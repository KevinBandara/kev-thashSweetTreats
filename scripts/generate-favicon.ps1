Add-Type -AssemblyName System.Drawing

$sourcePath = Join-Path $PSScriptRoot "..\public\KevAndThashSweetTreatsLogo.png"
$destAppIco = Join-Path $PSScriptRoot "..\src\app\favicon.ico"
$destPubIco = Join-Path $PSScriptRoot "..\public\favicon.ico"

$sizes = @(16, 32, 48, 64)
$pngBytesList = @()
$origBmp = [System.Drawing.Bitmap]::FromFile($sourcePath)

foreach ($s in $sizes) {
    $resized = New-Object System.Drawing.Bitmap($s, $s)
    $g = [System.Drawing.Graphics]::FromImage($resized)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($origBmp, 0, 0, $s, $s)
    $g.Dispose()

    # Save standalone pngs for 16 and 32
    if ($s -eq 16) {
        $resized.Save((Join-Path $PSScriptRoot "..\public\favicon-16x16.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    }
    if ($s -eq 32) {
        $resized.Save((Join-Path $PSScriptRoot "..\public\favicon-32x32.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    }

    $ms = New-Object System.IO.MemoryStream
    $resized.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
    $pngBytesList += ,$ms.ToArray()
    $resized.Dispose()
    $ms.Dispose()
}

# Apple Touch Icon (180x180)
$appleBmp = New-Object System.Drawing.Bitmap(180, 180)
$ag = [System.Drawing.Graphics]::FromImage($appleBmp)
$ag.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$ag.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$ag.Clear([System.Drawing.Color]::Transparent)
$ag.DrawImage($origBmp, 0, 0, 180, 180)
$ag.Dispose()
$appleBmp.Save((Join-Path $PSScriptRoot "..\public\apple-touch-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$appleBmp.Dispose()

$origBmp.Dispose()

function Write-IcoFile($targetPath) {
    $fs = [System.IO.File]::Create($targetPath)
    $bw = New-Object System.IO.BinaryWriter($fs)

    # ICONDIR
    $bw.Write([uint16]0) # Reserved
    $bw.Write([uint16]1) # Type (1 = ICO)
    $bw.Write([uint16]$sizes.Count) # Count

    $offset = 6 + ($sizes.Count * 16)

    for ($i = 0; $i -lt $sizes.Count; $i++) {
        $w = $sizes[$i]
        $bytes = $pngBytesList[$i]

        $bw.Write([byte]($w % 256)) # Width
        $bw.Write([byte]($w % 256)) # Height
        $bw.Write([byte]0)          # ColorCount
        $bw.Write([byte]0)          # Reserved
        $bw.Write([uint16]1)        # Planes
        $bw.Write([uint16]32)       # BitCount
        $bw.Write([uint32]$bytes.Length) # ImageSize
        $bw.Write([uint32]$offset)       # ImageOffset

        $offset += $bytes.Length
    }

    foreach ($bytes in $pngBytesList) {
        $bw.Write($bytes)
    }

    $bw.Flush()
    $bw.Close()
    $fs.Close()
    Write-Host "Generated ICO at $targetPath size: $((Get-Item $targetPath).Length) bytes"
}

Write-IcoFile $destAppIco
Write-IcoFile $destPubIco

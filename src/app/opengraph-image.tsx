import { ImageResponse } from 'next/og';
import fs from 'node:fs';
import path from 'node:path';

export const runtime = 'nodejs';
export const alt = 'Kev & Thash Sweet Treats — Panadura, Sri Lanka';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Read official logo as base64 data URI
  const logoPath = path.join(process.cwd(), 'public', 'KevAndThashSweetTreatsLogo.png');
  const logoBuffer = fs.readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFF5F7',
          backgroundImage:
            'radial-gradient(circle at 20px 20px, #FCE7F3 3px, transparent 0%), radial-gradient(circle at 60px 60px, #FBCFE8 3px, transparent 0%)',
          backgroundSize: '80px 80px',
          padding: '36px 48px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(255, 255, 255, 0.96)',
            borderRadius: '32px',
            border: '3px solid #F472B6',
            boxShadow: '0 24px 60px rgba(236, 72, 153, 0.22)',
            padding: '48px 56px',
            width: '100%',
            height: '100%',
            gap: '40px',
          }}
        >
          {/* Left Column: Brand Logo */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {/* Real Logo Image */}
            <img
              src={logoBase64}
              alt="Kev & Thash Sweet Treats Logo"
              width={240}
              height={240}
              style={{
                borderRadius: '9999px',
                border: '6px solid #EC4899',
                boxShadow: '0 12px 36px rgba(236, 72, 153, 0.35)',
                objectFit: 'cover',
              }}
            />

            {/* Rating Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFF1F2',
                borderRadius: '9999px',
                border: '1.5px solid #FDA4AF',
                padding: '8px 20px',
                marginTop: '20px',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#BE185D',
              }}
            >
              ⭐ 5.0 Rating • 10+ Customers
            </div>
          </div>

          {/* Right Column: Information & Badges */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            {/* Panadura Location Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FCE7F3',
                borderRadius: '9999px',
                border: '1.5px solid #F472B6',
                padding: '8px 22px',
                marginBottom: '16px',
                fontSize: '17px',
                fontWeight: 'bold',
                color: '#BE185D',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              📍 Malamulla, Panadura • Sri Lanka Orders
            </div>

            {/* Brand Title */}
            <h1
              style={{
                fontSize: '56px',
                fontWeight: '900',
                color: '#3D1A0A',
                margin: '0 0 6px 0',
                letterSpacing: '-1px',
                lineHeight: 1.1,
              }}
            >
              Kev &amp; Thash
            </h1>
            <div
              style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#EC4899',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                margin: '0 0 16px 0',
              }}
            >
              Sweet Treats
            </div>

            {/* Tagline */}
            <p
              style={{
                fontSize: '24px',
                fontWeight: '600',
                fontStyle: 'italic',
                color: '#7A3F2A',
                margin: '0 0 24px 0',
                lineHeight: 1.3,
              }}
            >
              Crafted with Love, Baked to Perfection
            </p>

            {/* Feature Pills Grid */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#FFF0F5',
                  borderRadius: '9999px',
                  padding: '8px 18px',
                  fontSize: '17px',
                  fontWeight: 'bold',
                  color: '#9D174D',
                  border: '1px solid #FBCFE8',
                }}
              >
                🎂 Custom Cakes
              </div>

              <div
                style={{
                  backgroundColor: '#FEF3C7',
                  borderRadius: '9999px',
                  padding: '8px 18px',
                  fontSize: '17px',
                  fontWeight: 'bold',
                  color: '#92400E',
                  border: '1px solid #FDE68A',
                }}
              >
                🛍️ Self-Pickup in Panadura
              </div>

              <div
                style={{
                  backgroundColor: '#DCFCE7',
                  borderRadius: '9999px',
                  padding: '8px 18px',
                  fontSize: '17px',
                  fontWeight: 'bold',
                  color: '#166534',
                  border: '1px solid #BBF7D0',
                }}
              >
                💬 WhatsApp: 071 851 1165
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

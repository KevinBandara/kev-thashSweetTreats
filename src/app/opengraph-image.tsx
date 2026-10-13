import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Kev & Thash Sweet Treats — Panadura, Sri Lanka';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
            'radial-gradient(circle at 25px 25px, #fbcfe8 2%, transparent 0%), radial-gradient(circle at 75px 75px, #f472b6 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          padding: '40px 60px',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '32px',
            border: '4px solid #F472B6',
            boxShadow: '0 20px 50px rgba(236, 72, 153, 0.2)',
            padding: '48px 64px',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FCE7F3',
              borderRadius: '9999px',
              padding: '10px 28px',
              marginBottom: '20px',
              border: '1.5px solid #F472B6',
            }}
          >
            <span
              style={{
                fontSize: '22px',
                fontWeight: 'bold',
                color: '#BE185D',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              📍 Malamulla, Panadura • Sri Lanka
            </span>
          </div>

          {/* Business Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: '900',
              color: '#3D1A0A',
              margin: '0 0 12px 0',
              textAlign: 'center',
              letterSpacing: '-1px',
            }}
          >
            Kev &amp; Thash Sweet Treats
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: '30px',
              fontWeight: '600',
              fontStyle: 'italic',
              color: '#DB2777',
              margin: '0 0 28px 0',
              textAlign: 'center',
            }}
          >
            Crafted with Love, Baked to Perfection
          </p>

          {/* Feature Pills */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                backgroundColor: '#FFF1F2',
                borderRadius: '9999px',
                padding: '10px 22px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#9F1239',
                border: '1px solid #FECDD3',
              }}
            >
              🎂 Custom Cakes
            </div>
            <div
              style={{
                backgroundColor: '#FEF3C7',
                borderRadius: '9999px',
                padding: '10px 22px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#92400E',
                border: '1px solid #FDE68A',
              }}
            >
              🧁 Cupcakes &amp; Brownies
            </div>
            <div
              style={{
                backgroundColor: '#DCFCE7',
                borderRadius: '9999px',
                padding: '10px 22px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#166534',
                border: '1px solid #BBF7D0',
              }}
            >
              💬 WhatsApp Orders
            </div>
            <div
              style={{
                backgroundColor: '#F3E8FF',
                borderRadius: '9999px',
                padding: '10px 22px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#6B21A8',
                border: '1px solid #E9D5FF',
              }}
            >
              🛍️ Panadura Self-Pickup
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

import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = '404 - Page Not Found | Got Plate Lunch';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#FDFAF5',
          backgroundImage: 'linear-gradient(to bottom right, rgba(251, 146, 60, 0.05), rgba(251, 113, 133, 0.05))',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15), transparent 70%)',
            zIndex: '1',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251, 113, 133, 0.15), transparent 70%)',
            zIndex: '1',
          }}
        />

        {/* Palm leaves pattern (simplified as shapes) */}
        <div style={{ position: 'absolute', top: 20, left: 20, opacity: 0.1, zIndex: 1 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '80px',
                height: '200px',
                borderRadius: '50% 50% 0 0',
                background: '#0F766E',
                transform: `rotate(${i * 30}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: 20, right: 20, opacity: 0.1, zIndex: 1 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '80px',
                height: '200px',
                borderRadius: '50% 50% 0 0',
                background: '#0F766E',
                transform: `rotate(${i * 30 + 180}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
          ))}
        </div>

        {/* Main content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            padding: '40px',
            textAlign: 'center',
          }}
        >
          {/* 404 heading */}
          <h1
            style={{
              fontSize: '120px',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #f43f5e, #fb923c)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: '0',
              lineHeight: '1.2',
              padding: '0 20px',
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            404
          </h1>
          
          {/* Decorative line */}
          <div
            style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(to right, #f43f5e, #fb923c)',
              borderRadius: '2px',
              margin: '20px 0',
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontSize: '50px',
              fontWeight: 'bold',
              color: '#334155',
              margin: '0 0 20px 0',
            }}
          >
            Oops! Page Not Found
          </p>
          
          <p
            style={{
              fontSize: '28px',
              fontWeight: 'normal',
              color: '#64748b',
              maxWidth: '700px',
            }}
          >
            Looks like this dish isn&apos;t on our menu! The page you&apos;re looking for has been removed, renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Footer with branding */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <p
            style={{
              fontSize: '24px',
              fontWeight: 'semibold',
              color: '#64748b',
            }}
          >
            gotplatelunch.com
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
} 
import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get title from search params or use default
    const title = searchParams.get('title') || 'Got Plate Lunch';
    const subtitle = searchParams.get('subtitle') || 'Authentic Hawaiian Cuisine';

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
            {/* Main heading */}
            <h1
              style={{
                fontSize: '80px',
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
              {title}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '40px',
                fontWeight: 'medium',
                color: '#334155',
                marginTop: '20px',
                marginBottom: '40px',
              }}
            >
              {subtitle}
            </p>

            {/* Decorative line */}
            <div
              style={{
                width: '200px',
                height: '4px',
                background: 'linear-gradient(to right, #f43f5e, #fb923c)',
                borderRadius: '2px',
              }}
            />
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
        width: 1200,
        height: 630,
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`${e.message}`);
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 
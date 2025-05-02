import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Generate alt text for each menu item
export async function generateImageMetadata({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const menuItem = siteConfig.menuItems.find(item => item.id === id);
  
  if (!menuItem) {
    return [{
      alt: 'Menu Item - Got Plate Lunch',
    }];
  }
  
  return [{
    alt: `${menuItem.name} - ${menuItem.category} - Got Plate Lunch`,
  }];
}

// Image generation
export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const menuItem = siteConfig.menuItems.find(item => item.id === id) || {
    name: "Menu Item",
    description: "Authentic Hawaiian Cuisine",
    category: "Menu",
  };
  
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

        {/* Content container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            width: '100%',
            padding: '40px',
          }}
        >
          {/* Menu card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
              overflow: 'hidden',
              width: '900px',
              height: '400px',
            }}
          >
            {/* Card header */}
            <div
              style={{
                background: 'linear-gradient(to right, #f43f5e, #fb923c)',
                padding: '30px',
                color: 'white',
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 'medium',
                  marginBottom: '10px',
                }}
              >
                {menuItem.category} • Got Plate Lunch
              </div>
              <h2
                style={{
                  fontSize: '56px',
                  fontWeight: 'bold',
                  margin: '0',
                }}
              >
                {menuItem.name}
              </h2>
            </div>
            
            {/* Card body */}
            <div
              style={{
                padding: '40px',
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <p
                style={{
                  fontSize: '32px',
                  color: '#334155',
                  margin: '0',
                  lineHeight: '1.5',
                }}
              >
                {menuItem.description}
              </p>
              
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '40px',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    color: '#64748b',
                  }}
                >
                  gotplatelunch.com/menu/{id}
                </div>
                
                <div
                  style={{
                    background: '#f0f9ff',
                    color: '#0284c7',
                    padding: '10px 20px',
                    borderRadius: '9999px',
                    fontSize: '20px',
                    fontWeight: 'medium',
                  }}
                >
                  View Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
} 
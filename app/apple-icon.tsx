import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #f43f5e, #fb923c)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px', // Rounded corners for iOS
          color: 'white',
          fontWeight: 'bold',
          fontSize: 120,
          fontFamily: 'system-ui',
        }}
      >
        G
      </div>
    ),
    {
      ...size,
    }
  );
} 
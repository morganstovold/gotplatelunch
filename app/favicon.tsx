import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 16,
  height: 16,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 12,
          background: 'linear-gradient(to right, #f43f5e, #fb923c)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          color: 'white',
          fontWeight: 'bold',
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
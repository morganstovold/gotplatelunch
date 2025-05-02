import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Got Plate Lunch',
    short_name: 'GotPlateLunch',
    description: 'Authentic Hawaiian Cuisine',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFAF5',
    theme_color: '#f43f5e',
    icons: [
      {
        src: '/favicon',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
} 
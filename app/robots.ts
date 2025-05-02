import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/api/og',  // Allow OG image generation API
      ],
      disallow: [
        '/api/',    // Disallow other API routes 
        '/admin/',
      ],
    },
    sitemap: '/sitemap.xml',
  }
} 
import '@/app/globals.css'; 

export const metadata = {
  title: 'SolarPanelPro | Professional Solar Panel Installation',
  description: 'SolarPanelPro offers professional solar panel installation services for residential, commercial, and custom projects. Harness the power of the sun with our expert team.',
  keywords: 'solar panel installation, residential solar, commercial solar, solar energy, renewable energy, SolarPanelPro',
  author: 'SolarPanelPro',
  robots: 'index, follow',
  openGraph: {  
    title: 'SolarPanelPro | Professional Solar Panel Installation',
    description: 'Harness the power of the sun with SolarPanelPro\'s expert solar panel installation services.',
    image: '/solar-panel-logo.png',  
    url: 'https://yourwebsite.com',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolarPanelPro | Professional Solar Panel Installation',
    description: 'Harness the power of the sun with SolarPanelPro\'s expert solar panel installation services.',
    image: '/solar-panel-logo.png',  
  },
  canonical: 'https://yourwebsite.com',
  favicon: '/solar-panel-logo.png',  
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SolarPanelPro',
    url: 'https://yourwebsite.com',
    logo: '/solar-panel-logo.png',  
    description: 'SolarPanelPro offers professional solar panel installation services for residential, commercial, and custom projects.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-555-1234',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.facebook.com/solarpanelpro',
      'https://www.instagram.com/solarpanelpro',
      'https://www.linkedin.com/company/solarpanelpro'
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/solar-panel-logo.png" /> 
      </head>
      <body>{children}</body>
    </html>
  );
}

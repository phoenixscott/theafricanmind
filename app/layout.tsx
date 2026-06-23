import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The African Mind',
  description: 'Rigorous thinking on Nigeria, Africa, and the civilisational project that defines our century.',
  openGraph: {
    title: 'The African Mind',
    description: 'Rigorous thinking on Nigeria, Africa, and the civilisational project that defines our century.',
    siteName: 'The African Mind',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}

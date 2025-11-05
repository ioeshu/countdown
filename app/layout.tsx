import './globals.css'
import React from 'react'

const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://countdown-seven-sooty.vercel.app'
const target = process.env.NEXT_PUBLIC_TARGET_DATE || '2026-05-26'

export const metadata = {
  title: 'Aischu Countdown',
  description: 'Countdown to May 26, 2026',
  openGraph: {
    title: 'Aischu Countdown',
    description: 'Countdown to May 26, 2026',
    url: site,
    type: 'website',
    images: [
      {
        url: `${site}/api/og?date=${target}`,
        width: 1200,
        height: 630,
        alt: 'Countdown'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aischu Countdown',
    description: 'Countdown to May 26, 2026',
    images: [`${site}/api/og?date=${target}`]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

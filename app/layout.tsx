import 'styles/global.css'
import React from 'react'

const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://countdown-seven-sooty.vercel.app'
const target = process.env.NEXT_PUBLIC_TARGET_DATE || '2026-05-26'
const OG_URL = `${site}/api/og?date=${target}&v=${Date.now()}`

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
        url: OG_URL,
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
    images: [OG_URL]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
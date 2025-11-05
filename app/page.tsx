import React from 'react'

const TARGET_DATE = process.env.NEXT_PUBLIC_TARGET_DATE || '2026-05-26'
const BRAND = process.env.NEXT_PUBLIC_BRAND || 'Aischu Countdown'

function daysLeft(target: string) {
  const t = new Date(target + 'T00:00:00Z')
  const now = new Date()
  const diff = Math.ceil((t.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  return Math.max(0, diff)
}

export default function Page() {
  const days = daysLeft(TARGET_DATE)

  // OG refresh param (forces fresh image)
  const OG_URL = `${
    process.env.NEXT_PUBLIC_SITE_URL || ''
  }/api/og?date=${TARGET_DATE}&v=${Date.now()}`

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      background: '#f7f8fa'
    }}>
      <div style={{width: 720, padding: 40, background: '#fff', borderRadius: 12, boxShadow: '0 6px 24px rgba(15, 23, 42, 0.06)'}}>
        <div style={{fontSize: 14, color: '#6b7280'}}>May 26, 2026</div>
        <h1 style={{margin: '8px 0 16px', fontSize: 48, letterSpacing: '-1px'}}>{days} days left</h1>
        <div style={{height: 1, background: '#eef2f6', margin: '12px 0'}} />
        <div style={{fontSize: 13, color: '#9ca3af'}}>{BRAND}</div>

        <div style={{marginTop: 18}}>
          <a href={OG_URL} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
            <button style={{padding: '10px 14px', borderRadius: 8, border: '1px solid #e6eef8', background: '#ffffff'}}>Open OG image</button>
          </a>
        </div>

        <div style={{marginTop: 16, fontSize: 12, color: '#6b7280'}}>
          Tip: Share this page on X — preview auto-updates.
        </div>
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kinecta – Connector to Your Past',
  description: 'Experience meaningful conversations with your ancestors through AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
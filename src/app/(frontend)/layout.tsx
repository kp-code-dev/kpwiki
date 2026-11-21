import React from 'react'

import { cn } from '@/utilities/ui'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { Providers } from '@/providers'
import { draftMode } from 'next/headers'
import { Header } from '@/Header/Component'
import { Footer } from '@/Footer/Component'
import { AdminBar } from '@/components/AdminBar'
import { Analytics } from '@vercel/analytics/next'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),

  title: {
    default: 'Games | KP Wiki',
    template: '%s | KP Wiki',
  },

  description: 'KP Wiki - Explore games, technology and digital entertainment.',

  openGraph: mergeOpenGraph(),

  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },

  icons: {
    icon: [
      { url: '/icon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
}

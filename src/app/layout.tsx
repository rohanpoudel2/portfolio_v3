import { type Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Rohan Poudel',
    default:
      'Rohan Poudel - Tech Enthusiast, Problem Solver, and Amateur Guitarist',
  },
  description:
    "I'm Rohan Poudel, a tech enthusiast and an amateur guitarist based in Kathmandu, Nepal. Specializing in Next.js, Ruby on Rails, Node.js, React, and React Native. I thrive on unraveling intricate tech challenges. As an avid guitarist, I find joy and inspiration in strumming melodies while also exploring the endless possibilities within the realm of technology.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <SpeedInsights />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

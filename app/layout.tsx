import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Muhammad Zeshan Tahir - Full Stack Developer',
  description: 'Full Stack Developer with strong experience in MERN stack, Next.js, NestJS, and cloud technologies.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'Next.js', 'React', 'Node.js', 'MongoDB', 'PostgreSQL'],
  authors: [{ name: 'Muhammad Zeshan Tahir' }],
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
  openGraph: {
    title: 'Muhammad Zeshan Tahir - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className={`${inter.className} bg-neutral-950 text-neutral-100 overflow-x-hidden`}>
        <CustomCursor />
        {/* Static background - no animations for better performance */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none will-change-auto">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-fuchsia-500/8 rounded-full blur-3xl" />
        </div>
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 -z-10 bg-grid-pattern bg-grid opacity-50 pointer-events-none" />
        {children}
      </body>
    </html>
  )
}

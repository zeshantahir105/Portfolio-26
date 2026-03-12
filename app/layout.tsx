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
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-white text-neutral-900 overflow-x-hidden`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}

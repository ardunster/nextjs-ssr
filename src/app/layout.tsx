import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Navbar from '@/app/_components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS Blog with Markdown via MDX',
  description:
    'A NextJS app using Markdown/MDX to dynamically display blog content',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log('rendering root layout')
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

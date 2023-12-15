import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ModeToggle from '@/components/color-toggle'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chaty',
  description: 'A chatbot that uses Gemini-Pro to respond to your messages.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className="float-right p-5">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

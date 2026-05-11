import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/ThemeProvider'

const geistSans = Inter({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = JetBrains_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EngTrack — English Learning Tracker',
  description: 'Track your English learning progress. Roadmaps for IELTS, TOEFL, PTE, TOEIC, and more.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  themeColor: '#259775',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme'),s=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';if(t==='dark'||(t===null&&s==='dark'))document.documentElement.classList.add('dark')})()` }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: '12px',
                fontSize: '14px',
                padding: '12px 16px',
                boxShadow: '0 4px 16px 0 rgba(0,0,0,0.10)',
              },
              success: { iconTheme: { primary: '#259775', secondary: '#fff' } },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}

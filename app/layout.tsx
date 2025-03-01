import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import QueryProvider from '@/context/query-provider'
import { ThemeProvider } from '@/context/theme-provider'
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Novus Technologies | Innovative Software and Technology Startup',
  description: 'Innovative Software and Technology Startup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href='/logo.png'/>
      </head>
      <body className={inter.className}>
        <QueryProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          {children}

          </ThemeProvider>
          <Toaster/>
        </QueryProvider>
      </body>
    </html>
  )
}

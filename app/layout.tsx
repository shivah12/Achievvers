import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Achievvers Coaching Center",
  description: "Unlock your academic potential with personalized coaching for grades 6-12",
    generator: 'Shreeti'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
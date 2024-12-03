import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './ThemeRegistry';
import { Providers } from './Providers';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QUICKBET',
  description: 'Mejor sitio de películas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <Providers>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </Providers>
      </body>
    </html>
  )
}

import './globals.css'
import { Playfair_Display } from 'next/font/google'

const pf = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
})

export const metadata = {
  title: 'REMTA Design',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={pf.className}>{children}</body>
    </html>
  )
}

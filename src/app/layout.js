import './globals.css'
import { Playfair_Display } from 'next/font/google'
import img from '../assets/logo.svg'

const pf = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
})

export const metadata = {
  title: 'REMTA Design',
  description: 'Мебели по поръчка, изработени специално за теб',
  image: {img},
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={pf.className}>{children}</body>
    </html>
  )
}

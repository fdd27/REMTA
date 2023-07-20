import './globals.css'
import { Playfair_Display } from 'next/font/google'
import img from '../assets/logo.svg'

const pf = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
})

export const metadata = {
  title: 'REMTA Design',
  description: '',
  keywords: ['Next.js', 'React', 'JavaScript', 'Remta', 'Momchilgrad', 'furniture', 'Bulgaria', 'мебели', 'мебели по поръчка', 'Момчилград', 'България', 'Ремта'],
  openGraph: {
    images: {img},
  },
  openGraph: {
    title: 'REMTA Design',
    description: 'Мебели по поръчка, изработени специално за теб',
    url: 'https://www.remtadesign.store',
    siteName: 'REMTA Design',
    images: {
      url: 'https://i.postimg.cc/HsY496wY/asdasd.png',
      width: 66,
      height: 66,
    },
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={pf.className}>{children}</body>
    </html>
  )
}

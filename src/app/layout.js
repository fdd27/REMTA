import './globals.css'
import { Playfair_Display } from 'next/font/google'
// import img from '../assets/logo.svg'

const pf = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  metadataBase: 'https://www.remtadesign.store',
  title: 'REMTA Design',
  description: 'Мебели по поръчка, изработени специално за теб',
  keywords: ['Remta', 'Momchilgrad', 'furniture', 'Bulgaria', 'мебели', 'мебел', 'мебели по поръчка', 'Момчилград', 'България', 'Ремта', 'Кърджали', 'шкаф', 'шкафчета', 'врата', 'врати', 'дръжки', 'плот', 'плотове',
    'кухня', 'кухни', 'кухни по поръчка'],
  openGraph: {
    title: 'REMTA Design',
    description: 'Мебели по поръчка, изработени специално за теб',
    url: 'https://www.remtadesign.store',
    siteName: 'REMTA Design',
    images: [
      {
        url: 'https://postimg.cc/nsp8C3dS',
        width: 66,
        height: 66,
      },
    ],
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

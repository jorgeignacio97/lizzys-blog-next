import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
})

export const metadata: Metadata = {
  title: 'Portafolio Swanson',
  description: 'Galería de trabajos de Swanson',
}

export default function PortafolioLayout({ children }: { children: React.ReactNode }) {
  return <div className={bebasNeue.className}>{children}</div>
}

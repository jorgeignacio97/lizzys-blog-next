import { Header } from '@/features/Layout/Header'
import { Footer } from '@/features/Layout/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

import style from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { brand } from '@/shared/utils/data'

export function Header() {
  return (
    <header className={style.header}>
      <Link href={'/'} className={style.logo}>
        <Image
          src="/logo/SinFondo/logo-positivo.png"
          alt="Lizzy's"
          width={70}
          height={70}
          className={style.logoImage}
          priority
        />
        <span className={style.logoTagline}>{brand.tagline}</span>
      </Link>

      <nav className={style.nav}>
        {brand.nav.map((label) => (
          <Link key={label} href="#" className={style.navLink}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

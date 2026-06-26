import { Icons } from '@/shared/components/Icons'
import { brand, footer, linksFooter } from '@/shared/utils/data'
import style from './Footer.module.css'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        {/* Columna marca */}
        <div>
          <div className={style.brand}>
            <span className={style.brandMark}>
              <Icons name="logo" size={26} />
            </span>
            <span className={style.brandName}>{brand.name}</span>
          </div>
          <p className={style.tagline}>
            Taller artesanal de bordado, pintura textil y rediseño en la Araucanía. Piezas únicas,
            hechas a mano.
          </p>
        </div>

        {/* Columna catálogo */}
        <div>
          <h4 className={style.colTitle}>Catálogo</h4>
          <ul className={style.list}>
            {footer.catalogLinks.map((label) => (
              <li key={label}>
                <Link href="#">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna taller */}
        <div>
          <h4 className={style.colTitle}>El taller</h4>
          <ul className={style.list}>
            {footer.tallerLinks.map((label) => (
              <li key={label}>
                <Link href="#">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna contacto */}
        <div>
          <h4 className={style.colTitle}>Visítanos</h4>
          <ul className={style.list}>
            <li>{footer.address}</li>
            <li>{footer.whatsapp}</li>
            <li>{footer.email}</li>
          </ul>
        </div>
      </div>

      <div className={style.bottom}>
        <span>{footer.rights}</span>
        <div className={style.socials}>
          <Link
            href={linksFooter.instagram}
            aria-label="Instagram"
            className={style.socialLink}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <Icons name="instagram" size={15} />
          </Link>
          <Link
            href={linksFooter.whatsapp}
            aria-label="WhatsApp"
            className={style.socialLink}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <Icons name="whatsapp" size={15} />
          </Link>
          <Link
            href={linksFooter.correo}
            aria-label="Blog"
            className={style.socialLink}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <Icons name="mail" size={15} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

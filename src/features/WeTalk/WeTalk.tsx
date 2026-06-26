import style from './WeTalk.module.css'
import Link from 'next/link'
import { linksFooter } from '@/shared/utils/data'
import { Icons } from '@/shared/components/Icons'

export function WeTalk() {
  return (
    <section className={style.section} id="contacto">
      <div className={style.card}>
        <div className={style.kicker}>— Conversemos —</div>
        <h2 className={style.title}>
          ¿Tienes una <em>idea</em> esperando?
        </h2>
        <p className={style.desc}>
          Cuéntanos qué te imaginas: una prenda heredada que quieres rescatar, un regalo único, una
          iniciativa con identidad. Respondemos en menos de 24 horas.
        </p>
        <div className={style.ctaRow}>
          <Link
            href={linksFooter.whatsapp}
            aria-label="WhatsApp"
            className="btn-primary"
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <Icons name="whatsapp" size={18} /> WhatsApp
          </Link>
          <Link
            href={linksFooter.correo}
            aria-label="Blog"
            className="btn-ghost"
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <Icons name="mail" size={18} /> Escríbenos
          </Link>
        </div>
      </div>
    </section>
  )
}

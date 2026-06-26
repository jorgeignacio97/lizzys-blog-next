import style from './Products.module.css'
import { products } from '@/shared/utils/data'
import { Icons } from '@/shared/components/Icons'

const visualVariant: Record<number, string> = {
  1: style.visualPaint,
  2: style.visualSage,
}

export function Products() {
  return (
    <section className={style.section} id="productos">
      <div className={style.head}>
        <div className={style.kicker}>— Catálogo —</div>
        <h2 className={style.headTitle}>
          Tres oficios, <em>un mismo amor</em>.
        </h2>
        <p className={style.headLead}>
          Cada categoría es una invitación a transformar algo simple en algo tuyo. Trabajamos con
          calma, en piezas únicas.
        </p>
      </div>

      <div className={style.grid}>
        {products.map((product, i) => (
          <article key={product.n} className={`${style.card} ${i === 1 ? style.cardOffset : ''}`}>
            {i === 0 && <span className={style.ribbon}>Más pedido</span>}
            <div className={`${style.visual} ${visualVariant[i] ?? ''}`}>
              <Icons name={product.icon} size={64} />
            </div>

            <div className={style.body}>
              <h3 className={style.cardTitle}>{product.title}</h3>
              <div className={style.sub}>{product.sub}</div>
              <p className={style.desc}>{product.desc}</p>
              <div className={style.foot}>
                <a href="#" className={style.more}>
                  explorar <Icons name="arrow" size={13} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

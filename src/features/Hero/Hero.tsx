import style from './Hero.module.css'
import { Icons } from '@/shared/components/Icons'
import { hero } from '@/shared/utils/data'

export function Hero() {
  return (
    <section className={style.hero}>
      {/* Columna izquierda */}
      <div className={style.left}>
        <div className={style.eyebrow}>
          <span className={style.eyebrowDot}>
            <Icons name="leaf" size={10} />
          </span>
          <span>{hero.eyebrow}</span>
        </div>

        <h1 className={style.title}>
          <span className={style.titleLine}>Dale un toque</span>
          <span className={style.titleLineIndented}>
            <em className={style.titleEmphasis}>
              único
              <svg viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
                <path
                  d="M2 8 Q 50 2, 100 7 T 198 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </em>
          </span>
          <span className={style.titleLine}>
            a tu vida<span className={style.punct}>.</span>
          </span>
        </h1>

        <p className={style.lead}>{hero.subtitle}</p>

        <div className={style.ctaRow}>
          <button className="btn-primary">
            Ver el catálogo <Icons name="arrow" size={18} />
          </button>
        </div>
      </div>

      {/* Columna derecha — tarjetas tipo packing-slip */}
      <div className={style.right}>
        <svg
          className={style.string}
          style={{ top: 60, left: 100, width: 320, height: 280 }}
          viewBox="0 0 320 280"
          fill="none"
        >
          <path
            d="M 280 20 Q 200 80, 100 140 T 80 240"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 4"
          />
        </svg>

        <div className={`${style.tag} ${style.tagA}`}>
          <div className={style.tagAHead}>
            <span className={style.tagALabel}>Bordado fino</span>
          </div>
          <div className={style.tagATitle}>Aguja, hilo y paciencia.</div>
          <div className={style.tagADesc}>
            Bordamos iniciales, frases e ilustraciones sobre cualquier tela que tengas o que escojas
            con nosotrastyle.
          </div>
          <div className={style.tagASwatch}>
            <Icons name="needle" size={56} />
          </div>
        </div>

        <div className={`${style.tag} ${style.tagB}`}>
          <div className={style.tagBSwatch}>
            <Icons name="brush" size={48} />
          </div>
          <div className={style.tagBMeta}>Pintura</div>
          <div className={style.tagBTitle}>Tu prenda, tu lienzo.</div>
        </div>

        <div className={`${style.tag} ${style.tagC}`}>
          <div className={style.tagCSwatch}>
            <Icons name="sewing" size={44} />
          </div>
          <div className={style.tagCLabel}>Rediseño</div>
          <div className={style.tagCTitle}>Vida nueva a lo de siempre.</div>
        </div>
      </div>
    </section>
  )
}

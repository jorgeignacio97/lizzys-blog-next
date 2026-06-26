import { CategoryCarousel } from '@/features/Swanson'
import { categories, slidesByCategory } from '@/features/Swanson/utils/data'
import styles from './portfolio.module.css'

const categoryAccents: Record<string, string> = {
  ACRILICO: 'var(--color-lavender-deep)',
  GRAFITO: 'var(--color-ink)',
  'LAPIZ A COLOR': 'var(--color-sage-deep)',
  OLEO: 'var(--color-gold)',
}

export default function PortafolioSwanson() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Arte original · Swanson</span>
        <h1 className={styles.title}>Portafolio</h1>
        <p className={styles.lead}>
          Una selección de obras realizadas en distintas técnicas a lo largo de los años.
        </p>
      </section>

      {categories.map((cat, i) => {
        const slides = slidesByCategory[cat.key]
        if (!slides?.length) return null

        return (
          <div key={cat.key} className={`${styles.band} ${i % 2 === 1 ? styles.bandAlt : ''}`}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{cat.name}</h2>
                <span className={styles.sectionCount}>
                  {slides.length} {slides.length === 1 ? 'obra' : 'obras'}
                </span>
              </div>
              <CategoryCarousel
                slides={slides}
                accent={categoryAccents[cat.key] ?? 'var(--color-lavender-deep)'}
              />
            </section>
          </div>
        )
      })}
    </main>
  )
}

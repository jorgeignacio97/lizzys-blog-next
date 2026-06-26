'use client'

import { useState, useRef, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import type { Slide } from '../utils/data'
import styles from './CategoryCarousel.module.css'

interface Props {
  slides: Slide[]
  accent: string
}

export function CategoryCarousel({ slides, accent }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true })
  const [lightbox, setLightbox] = useState<Slide | null>(null)
  const dragged = useRef(false)

  useEffect(() => {
    if (!emblaApi) return
    const onDown = () => {
      dragged.current = false
    }
    const onScroll = () => {
      dragged.current = true
    }
    emblaApi.on('pointerDown', onDown)
    emblaApi.on('scroll', onScroll)
    return () => {
      emblaApi.off('pointerDown', onDown)
      emblaApi.off('scroll', onScroll)
    }
  }, [emblaApi])

  const handleClick = (slide: Slide) => {
    if (dragged.current) return
    setLightbox(slide)
  }

  return (
    <>
      <div
        className={styles.viewport}
        ref={emblaRef}
        style={{ '--accent': accent } as React.CSSProperties}
      >
        <div className={styles.container}>
          {slides.map((s) => (
            <div key={s.id} className={styles.slide}>
              <button
                className={styles.cardBtn}
                onClick={() => handleClick(s)}
                aria-label={`View full size: ${s.title}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 640px) 80vw, 300px"
                    draggable={false}
                  />
                </div>
              </button>
              <p className={styles.caption}>{s.title}</p>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className={styles.overlay}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            className={styles.closeBtn}
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 2l14 14M16 2L2 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                fill
                className={styles.lightboxImage}
                sizes="90vw"
              />
            </div>
            <p className={styles.lightboxCaption}>{lightbox.title}</p>
          </div>
        </div>
      )}
    </>
  )
}

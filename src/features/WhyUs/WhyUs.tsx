import style from './WhyUs.module.css'
import { whyItems } from '@/shared/utils/data'
import { Icons } from '@/shared/components/Icons'

const badgeVariant: Record<number, string> = {
  1: style.badgeSage,
  2: style.badgeGold,
}

export function WhyUs() {
  return (
    <section className={style.section} id="conocenos">
      <div className={style.head}>
        <div className={style.kicker}>— Por qué Lizzy&apos;s —</div>
        <h2 className={style.headTitle}>
          Tres razones, <em>cosidas a mano</em>.
        </h2>
        <p className={style.headLead}>Trabajamos despacio, pero hacemos todo bien.</p>
      </div>

      <div className={style.grid}>
        {whyItems.map((item, i) => (
          <div key={item.n} className={style.item}>
            <div className={`${style.badge} ${badgeVariant[i] ?? ''}`}>
              <Icons name={item.icon} size={36} />
            </div>
            <h3 className={style.itemTitle}>{item.title}</h3>
            <p className={style.itemDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

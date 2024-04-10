import { CardPromo } from './CardPromo'
import promo from '../assets/promo.jpg'
import { TitleSection } from './TitleSection'

export const Promotions = () => {
  const infoPromotions = [
    {
      imgSrc: promo,
      alt: 'Promoción inicial'
    },
    {
      imgSrc: promo,
      alt: 'Promoción inicial'
    },
    {
      imgSrc: promo,
      alt: 'Promoción inicial'
    }
  ]

  return (
    <section className='w-full flex justify-center items-center flex-col mt-14 mb-10'>
      <div className='w-full flex justify-center items-center flex-col max-w-7xl px-4'>
        <TitleSection title='Promociones' />
        <div className='w-full mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
          {
            infoPromotions.map((item, i) => (
              <CardPromo
                key={i}
                imgSrc={item.imgSrc}
                alt={item.alt}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

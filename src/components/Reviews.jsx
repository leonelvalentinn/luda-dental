import paciente1 from '../assets/paciente-1.png'
import paciente2 from '../assets/paciente-2.png'
import paciente3 from '../assets/paciente-3.png'
import paciente4 from '../assets/paciente-4.png'
import paciente5 from '../assets/paciente-5.png'
import { CardReview } from './CardReview'
import { TitleSection } from './TitleSection'
import { Splide } from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css'
import '../index.css'

export const Reviews = () => {
  const infoReview = [
    {
      name: 'Tania García',
      textReview: 'Este establecimiento ha sido de los mejores que he visitado. Ambos médicos profesionales, atentos y sobre todo con la mejor actitud de atender a sus pacientes. Sin duda alguna mi peque y yo seguiremos nuestro cuidado de tal solo con ellos.',
      imgSrc: paciente1
    },
    {
      name: 'Hector Pérez',
      textReview: 'Excelente servicio! Ambos dentistas son muy profesionales, respetan el horario de tu cita y  la atención, así como el servicio es muy buena, super recomendado.',
      imgSrc: paciente2
    },
    {
      name: 'Malleli Ramirez',
      textReview: 'El mejor trabajo que me han realizado!!! Son super profesionales, limpios y sobre todo excelente servicio con precio accesible. Muy recomendado',
      imgSrc: paciente3
    },
    {
      name: 'Paola Julieta Rivera Velasco',
      textReview: 'Súper profesionales, una atención excelente, muy puntuales y súper higiénicos, siempre muy atentos y te explican todo, con atención personalizada',
      imgSrc: paciente4
    },
    {
      name: 'Eusebio Gutierrez Barba',
      textReview: 'Me encanto el servicio, muy profesional y recomendable.',
      imgSrc: paciente5
    }
  ]

  return (
    <section className='w-full flex justify-center items-center'>
      <div className='w-full h-full flex justify-center flex-col items-center max-w-7xl px-4 gap-10'>
        <TitleSection title='Testimonios' />
        <Splide
          aria-label='Reseñas de pacientes'
          options={{
            rewind: true,
            width: '100%',
            perPage: 3,
            padding: '1rem',
            gap: '2rem',
            pauseOnHover: true,
            pauseOnFocus: true,
            autoplay: true,
            breakpoints: {
              767: { perPage: 1 },
              1023: { perPage: 2 }
            }
          }}
        >
          {
            infoReview.map((item, i) => (
              <CardReview
                key={i}
                name={item.name}
                textReview={item.textReview}
                imgSrc={item.imgSrc}
                alt={`Imagen de perfil de ${item.name}`}
              />
            ))
          }
        </Splide>
      </div>
    </section>
  )
}

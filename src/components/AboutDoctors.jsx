import { CardAbout } from './CardAbout'

import Jesus from '../assets/photo_doc.jpg'
import Will from '../assets/photo_jesus.jpg'

export const AboutDoctors = () => {
  return (
    <section className='w-full flex justify-center items-center flex-col'>
      <div className='w-full grid grid-cols-1 gap-8 place-content-center max-w-7xl px-4 mb-10'>
        <CardAbout
          name='Dr. Will Gallegos'
          imgSrc={Will}
          imgAlt='Foto de perfil del Dr. Will Gallegos'
          reverse
        >
          <li className='mb-2'>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
          <li className='mb-2'>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
          <li>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
        </CardAbout>
        <CardAbout
          name='Dr. Jesus Barajas'
          imgSrc={Jesus}
          imgAlt='Foto de perfil del Dr. Jesus Barajas'
        >
          <li className='mb-2'>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
          <li className='mb-2'>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
          <li>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
        </CardAbout>
      </div>
    </section>
  )
}

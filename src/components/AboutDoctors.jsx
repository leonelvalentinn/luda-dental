import { CardAbout } from './CardAbout'

import Jesus from '../assets/photo_doc.webp'
import Will from '../assets/photo_jesus.webp'

export const AboutDoctors = () => {
  return (
    <section className='w-full flex justify-center items-center flex-col'>
      <div className='w-full grid grid-cols-1 gap-8 place-content-center max-w-7xl px-4 mb-10'>
        <CardAbout
          name='C.D.E.O. Will Gallegos Gómez'
          imgSrc={Will}
          imgAlt='Foto de perfil del C.D.E.O. Will Gallegos Gómez'
          reverse
          isHero
        >
          <li><strong>Licenciatura De Cirujano Dentista.</strong> Universidad De Guadalajara. Cucs.</li>
          <li><strong>Diplomado En Ortodoncia.</strong> Avalado Por El Instituto Odontológico De Especialidades, A.C</li>
          <li><strong>Curso Cryst Aligner Pro</strong> / Biomecánica En Ortodoncia Invisible Personalizada. Borgatta</li>
          <li><strong>Diplomado En Rehabilitación Estética.</strong> Instituto Multidisciplinario De Especialidades Dentales Imed</li>
          <li><strong>Curso Smile System Pro</strong> / Biomecánica De Auto ligado Interactivo Y Ortodoncia Digital Simplificada. Borgatta</li>
        </CardAbout>
        <CardAbout
          name='Dr. Jesus Barajas'
          imgSrc={Jesus}
          imgAlt='Foto de perfil del Dr. Jesus Barajas'
          isHero
        >
          <li>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
          <li>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
          <li>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
        </CardAbout>
      </div>
    </section>
  )
}

import { useState } from 'react'
import Jesus from '../../assets/photo_doc.webp'
import Will from '../../assets/photo_jesus.webp'

// eslint-disable-next-line react/prop-types
export const CardAboutDoc = () => {
  const [visibleWill, setVisibleWill] = useState(false)
  const [visibleJesus, setVisibleJesus] = useState(false)
  const infoDocs = [
    {
      id: 1,
      name: 'C.D.E.O. Will Gallegos Gómez',
      imgSrc: Will,
      imgAlt: 'Foto de perfil del C.D.E.O. Will Gallegos Gómez',
      reverse: true,
      visible: visibleWill,
      textV: `${visibleWill ? 'Ver menos' : 'Ver más'} `,
      info: `
        <li><strong>Licenciatura De Cirujano Dentista.</strong> Universidad De Guadalajara. Cucs.</li>
        <li><strong>Diplomado En Ortodoncia.</strong> Avalado Por El Instituto Odontológico De Especialidades, A.C</li>
        <li><strong>Curso Cryst Aligner Pro</strong> / Biomecánica En Ortodoncia Invisible Personalizada. Borgatta</li>
        <li><strong>Diplomado En Rehabilitación Estética.</strong> Instituto Multidisciplinario De Especialidades Dentales Imed</li>
        <li><strong>Curso Smile System Pro</strong> / Biomecánica De Auto ligado Interactivo Y Ortodoncia Digital Simplificada. Borgatta</li>
      `,
      description: `
        <li><strong>Congreso Internacional De Ortodoncia.</strong> Avalado Por Instituto Para El Desarrollo Y Actualización De Profesionales IDAP Cancún, Q.R.</li>
        <li><strong>Curso Básico Y Avanzado De Mini Implantes Ortodónticos O.S.A.S.</strong> Avalado Por Asociación Mexicana De Ortopedia Maxilar A.C, Amom Y Dewimed Smart Innovation</li>
        <li><strong>Curso De Rehabilitación Estética Adhesiva.</strong> Biotec Studio, Actualización Odontológica</li>
        <li><strong>Diplomado De Biomecánica En Ortodoncia.</strong> Avalado Por Asociación Odontológica Mexicana Para La Enseñanza Y La Investigación / Diagnostico Radiológico Dental Orthodent</li>
        <li><strong>Diplomado En Especialización En Ortopedia Maxilar.</strong> Avalado Por La Asociación Mexicana De Ortopedia Maxilar A.C, Amom</li>
        <li><strong>Certificación En Ortopedia Maxilar.</strong> Consejo Mexicano De Ortopedia Maxilar A.C / Amom</li>
        <li><strong>Especialidad En Ortodoncia.</strong> Instituto Para El Desarrollo Y Actualización De Profesionales IDAP</li>
        <li><strong>Recertificación En Ortopedia Maxilar.</strong> Avalado Por La Asociación Mexicana De Ortopedia Maxilar A.C, Amom</li>
        <li><strong>Congreso Online De Ortodoncia 2021.</strong>  Avalado Por Instituto Para El Desarrollo Y Actualización De Profesionales IDAP </li>
        <li><strong>Congreso Internacional De Ortodoncia.</strong> Avalado Por Instituto Para El Desarrollo Y Actualización De Profesionales IDAP CDMX</li>
      `
    },
    {
      id: 2,
      name: 'Dr. Jesus Barajas',
      imgSrc: Jesus,
      imgAlt: 'Foto de perfil del Dr. Jesus Barajas',
      reverse: false,
      visible: visibleJesus,
      textV: `${visibleJesus ? 'Ver menos' : 'Ver más'} `,
      info: `
        <li><strong>Licenciatura De Cirujano Dentista.</strong> Universidad De Guadalajara. Cucs.</li>
        <li><strong>Diplomado En Ortodoncia.</strong> Avalado Por El Instituto Odontológico De Especialidades, A.C</li>
        <li><strong>Curso Cryst Aligner Pro</strong> / Biomecánica En Ortodoncia Invisible Personalizada. Borgatta</li>
        <li><strong>Diplomado En Rehabilitación Estética.</strong> Instituto Multidisciplinario De Especialidades Dentales Imed</li>
        <li><strong>Curso Smile System Pro</strong> / Biomecánica De Auto ligado Interactivo Y Ortodoncia Digital Simplificada. Borgatta</li>
      `,
      description: `
        <li><strong>Licenciatura De Cirujano Dentista.</strong> Universidad De Guadalajara. Cucs.</li>
        <li><strong>Diplomado En Ortodoncia.</strong> Avalado Por El Instituto Odontológico De Especialidades, A.C</li>
        <li><strong>Curso Cryst Aligner Pro</strong> / Biomecánica En Ortodoncia Invisible Personalizada. Borgatta</li>
        <li><strong>Diplomado En Rehabilitación Estética.</strong> Instituto Multidisciplinario De Especialidades Dentales Imed</li>
        <li><strong>Curso Smile System Pro</strong> / Biomecánica De Auto ligado Interactivo Y Ortodoncia Digital Simplificada. Borgatta</li>
        <li><strong>Licenciatura De Cirujano Dentista.</strong> Universidad De Guadalajara. Cucs.</li>
        <li><strong>Diplomado En Ortodoncia.</strong> Avalado Por El Instituto Odontológico De Especialidades, A.C</li>
        <li><strong>Curso Cryst Aligner Pro</strong> / Biomecánica En Ortodoncia Invisible Personalizada. Borgatta</li>
        <li><strong>Diplomado En Rehabilitación Estética.</strong> Instituto Multidisciplinario De Especialidades Dentales Imed</li>
        <li><strong>Curso Smile System Pro</strong> / Biomecánica De Auto ligado Interactivo Y Ortodoncia Digital Simplificada. Borgatta</li>
      `
    }
  ]

  const visibleInfo = (e) => {
    if (e === 1) {
      setVisibleWill(!visibleWill)
    } else {
      setVisibleJesus(!visibleJesus)
    }
  }

  return (
    <>
      {
        infoDocs.map((item) => (
          <article key={item.id} className='w-full flex justify-center items-center flex-col rounded-xl shadow-xl shadow-gray-600/80 md:flex-row'>
            <img src={item.imgSrc} alt={item.imgAlt} className={`w-full rounded-t-xl md:max-w-72 ${item.reverse ? 'md:order-2 md:rounded-r-xl md:rounded-tl-none' : 'md:rounded-l-xl md:rounded-tr-none'} lg:max-w-md`} />
            <div className='px-4 w-full flex justify-center items-center flex-col py-8 text-center md:px-12'>
              <h4 className='font-bold text-xl text-secondary mb-2 lg:text-3xl'>Conoce a nuestro especialista</h4>
              <h3 className='font-semibold text-2xl text-gray-700'>{item.name}</h3>
              <ul className='mt-4 list-disc color text-lg text-gray-700 text-start pl-5 gap-2' dangerouslySetInnerHTML={{ __html: item.info }} />
              <div className='w-full grid place-items-center'>
                <div className={`transition-all duration-[500ms] overflow-hidden origin-bottom ${item.visible ? 'max-h-[1500px]' : 'max-h-0'}`}>
                  <ul className='mb-4 mt-2 list-disc color text-lg text-gray-700 text-start pl-5 gap-2' dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                <button
                  className='w-full max-w-44 flex justify-center mt-4 items-center rounded-lg bg-blue-700 py-3 px-6 text-center font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                  onClick={() => visibleInfo(item.id)}
                >
                  <span>{item.textV}</span>
                </button>
              </div>
            </div>
          </article>
        ))
      }
    </>
  )
}

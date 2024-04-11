import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { useRef } from 'react'
import { About } from '../components/About'
import { Features } from '../components/aboutpage/Features'
import { CardAbout } from '../components/CardAbout'
import hero from '../assets/about-hero.webp'
import heroDes from '../assets/about-hero-des.webp'
import Jesus from '../assets/photo_doc.webp'
import Will from '../assets/photo_jesus.webp'

export const AboutPage = () => {
  const divRef = useRef('home')

  const scrollToElement = () => {
    const { current } = divRef
    if (current !== null) {
      return (current.scrollIntoView ? current.scrollIntoView() : '')
    }
  }

  return (
    <>
      <NavBar
        Function={scrollToElement}
      />
      <main>
        <section className='w-full h-[calc(100svh-89px)] max-h-[900px] flex justify-center items-center flex-col relative' id='home' ref={divRef}>
          <img
            src={hero}
            alt='Foto de sonrisa perfecta'
            className='w-full h-full object-cover md:hidden'
            loading='eager'
            width='1333'
            height='2000'
          />
          <img
            src={heroDes}
            alt='Foto de sonrisa perfecta'
            className='w-full h-full object-cover hidden md:block'
            loading='eager'
            width='2000'
            height='1333'
          />
          <div className='w-full h-full absolute inset-0 bg-primary/70' />
          <div className='w-full absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2'>
            <h1 className='font-bold text-4xl text-center text-white'>Conoce LuDa Dental</h1>
            <p className='font-semibold text-xl text-center text-white'>Cuidamos tu sonrisa</p>
          </div>
        </section>
        <About />
        <Features />
        <section className='w-full flex justify-center items-center flex-col'>
          <div className='w-full grid grid-cols-1 gap-8 place-content-center max-w-7xl px-4 my-10'>
            <CardAbout
              name='C.D.E.O. Will Gallegos Gómez'
              imgSrc={Will}
              imgAlt='Foto de perfil del C.D.E.O. Will Gallegos Gómez'
              reverse
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
            >
              <li>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
              <li>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
              <li>Graduado de la Universidad Latinoamericana como cirujano dentista</li>
            </CardAbout>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

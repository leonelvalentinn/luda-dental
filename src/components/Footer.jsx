import { WhatsApp } from './WhatsApp'
import { Instagram } from './Instagram'
import { Facebook } from './Facebook'

// eslint-disable-next-line react/prop-types
export const Footer = ({ elementRef }) => {
  const year = new Date().getFullYear()

  return (
    <footer className='w-full flex justify-center items-center bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 mt-10' id='footer' ref={elementRef}>
      <div className='w-full flex justify-center items-center flex-col px-4 text-center lg:flex-row lg:justify-between md:max-w-8xl'>
        <p>© {year} Todos los derechos reservados LuDaDental. Diseño web y posicionamiento realizado por
          <a href='https://wa.me/525514476309' target='_blank' rel='noopener noreferrer' aria-label='Contactar a la agencia de marketing Dentarios'> Dentarios</a>
        </p>
        <div className='w-44 mt-4 flex justify-between items-center'>
          <a title='Mandar mensaje al WhatsApp de LuDaDental' href='https://wa.me/523317118089' className='w-12 h-12 rounded-full border-white border-2 flex justify-center items-center transition duration-300 fill-white hover:duration-300 hover:transition hover:bg-white hover:text-gray-800' target='_blank' rel='noopener noreferrer'>
            <WhatsApp className='w-5 h-5' />
          </a>
          <a title='Ir a la página de Instagram de LuDaDental' href='https://www.instagram.com/dental_luda' className='w-12 h-12 rounded-full border-white border-2 flex justify-center items-center transition duration-300 fill-white hover:duration-300 hover:transition hover:bg-white hover:text-gray-800' target='_blank' rel='noopener noreferrer'>
            <Instagram className='w-5 h-5' />
          </a>
          <a title='Ir a la página de Facebook de LuDaDental' href='https://www.facebook.com/LuDaDental' className='w-12 h-12 rounded-full border-white border-2 flex justify-center items-center transition duration-300 fill-white hover:duration-300 hover:transition hover:bg-white hover:text-gray-800' target='_blank' rel='noopener noreferrer'>
            <Facebook className='w-5 h-5' />
          </a>
        </div>
      </div>
    </footer>
  )
}

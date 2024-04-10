// eslint-disable-next-line react/prop-types
export const CardPromo = ({ imgSrc, alt }) => {
  return (
    <article className='w-full flex justify-center items-center flex-col'>
      <a href='https://wa.me/523317118089' target='_blank' rel='noopener noreferrer'>
        <img src={imgSrc} alt={alt} className='w-full rounded-2xl mb-5' />
      </a>
      <a
        data-ripple-light='true'
        className='select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
        href='https://wa.me/523317118089'
      >
        Agenda tu cita
      </a>
    </article>
  )
}

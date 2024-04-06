// eslint-disable-next-line react/prop-types
export const CardAbout = ({ children, imgSrc, imgAlt, name, reverse }) => {
  return (
    <article className="w-full flex justify-center items-center flex-col rounded-xl shadow-xl shadow-gray-600/80 md:flex-row">
      <img src={imgSrc} alt={imgAlt} className={`w-full rounded-t-xl md:max-w-72 ${reverse ? "md:order-2 md:rounded-r-xl md:rounded-t-none" : "md:rounded-l-xl md:rounded-tr-none"} lg:max-w-md`}/>
      <div className="px-4 w-full flex justify-center items-center flex-col py-8 md:px-20">
        <h4 className="font-semibold text-lg text-secondary">Conoce a nuestro especialista</h4>
        <h3 className="font-semibold text-xl text-gray-700">{name}</h3>
        <ul className="my-4 list-inside list-disc color text-gray-700 text-center">
          {children}
        </ul>
        <a 
          data-ripple-light="true" 
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          href="#"
        >
          Ver curriculum
        </a>
      </div>
    </article>
  )
}
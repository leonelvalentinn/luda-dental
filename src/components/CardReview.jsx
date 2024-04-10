import { SplideSlide } from '@splidejs/react-splide'
// eslint-disable-next-line react/prop-types
export const CardReview = ({ imgSrc, alt, textReview, name }) => {
  return (
    <SplideSlide>
      <article className='w-full flex justify-center items-center flex-col rounded-xl shadow-xl mb-12 shadow-gray-600/80 md:flex-row'>
        <div className='px-8 w-full flex justify-center items-center flex-col py-8 text-center gap-5 md:px-20 md:py-20'>
          <p className='italic text-lg'><span className='text-2xl font-semibold'>&ldquo;</span>{textReview}<span className='text-2xl font-semibold'>&rdquo;</span></p>
          <img src={imgSrc} alt={alt} className='w-14' />
          <h5 className='text-primary font-semibold text-xl'>{name}</h5>
        </div>
      </article>
    </SplideSlide>
  )
}

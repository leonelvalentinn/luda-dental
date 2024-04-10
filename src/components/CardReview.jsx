import { SplideSlide } from '@splidejs/react-splide'
// eslint-disable-next-line react/prop-types
export const CardReview = ({ imgSrc, alt, textReview, name }) => {
  return (
    <SplideSlide>
      <article className='w-full flex justify-center items-center flex-col rounded-xl shadow-xl shadow-gray-600/80 md:flex-row'>
        <div className='px-8 w-full flex justify-center items-center flex-col py-8 text-center md:px-20 md:py-20'>
          <p>{textReview}</p>
          <img src={imgSrc} alt={alt} />
          <h5>{name}</h5>
        </div>
      </article>
    </SplideSlide>
  )
}

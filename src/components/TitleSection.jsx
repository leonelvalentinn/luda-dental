// eslint-disable-next-line react/prop-types
export const TitleSection = ({ title }) => {
  return (
    <div className='w-full flex justify-center items-center gap-4 lg:gap-8'>
      <hr className='w-full border-2 border-secondary rounded-lg max-w-96' />
      <h2 className='text-nowrap text-3xl font-bold text-secondary lg:text-5xl'>{title}</h2>
      <hr className='w-full border-2 border-secondary rounded-lg max-w-96' />
    </div>
  )
}

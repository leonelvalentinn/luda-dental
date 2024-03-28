import team from '../assets/somos-img.jpg'
export const About = () => {
  return (
    <section className='px-4 w-full flex justify-center items-center flex-col my-5'>
      <img src={team} alt="Fotografía equipo LuDaDental" className='w-full max-w-xl mb-3'/>
      <div className='text-center'>
        <h2 className='text-2xl font-bold'>¿Quiénes somos?</h2>
        <p className='text-lg'>Somos una Clínica Dental orientada a la atención odontológico integral, abocándonos por más de 25 años en el cuidado de su sonrisa.</p>
      </div>
    </section>
  );
}
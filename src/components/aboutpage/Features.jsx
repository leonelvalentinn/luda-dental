import { TitleSection } from '../TitleSection'

export const Features = () => {
  return (
    <section className='w-full flex justify-center items-center flex-col'>
      <div className='w-full max-w-7xl grid grid-cols-1 gap-6 px-4 text-center'>
        <article className='flex justify-center items-center w-full flex-col'>
          <TitleSection title='Misión' />
          <p>En Luda Dental nos comprometemos a proporcionar servicios dentales de alta calidad con un enfoque centrado en el paciente, utilizando tecnología de vanguardia y un equipo altamente capacitado para mejorar la salud bucal y la calidad de vida de nuestros paciente</p>
        </article>
        <article className='flex justify-center items-center w-full flex-col'>
          <TitleSection title='Visión' />
          <p>Queremos convertirnos en el referente de excelencia en atención dental en nuestra comunidad, siendo reconocidos por nuestro compromiso con la calidad, la ética profesional y la satisfacción del paciente. Aspiramos a ser líderes en innovación y cuidado integral de la salud oral.</p>
        </article>
      </div>
    </section>
  )
}

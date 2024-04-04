import { CardService } from "./CardService"
import ortodoncia from '../assets/orto.png'

// eslint-disable-next-line react/prop-types
export const Services = ({ divRef }) => {

  const servicesInformation = [
    {
      id: 1,
      title: "Ortodoncia",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit qui omnis nulla quo voluptates ullam.",
      img: ortodoncia,
      alt: "Tratamiento de ortodoncia",
    },
    {
      id: 2,
      title: "Ortodoncia",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit qui omnis nulla quo voluptates ullam.",
      img: ortodoncia,
      alt: "Tratamiento de ortodoncia",
    },
    {
      id: 3,
      title: "Ortodoncia",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit qui omnis nulla quo voluptates ullam.",
      img: ortodoncia,
      alt: "Tratamiento de ortodoncia",
    },
    {
      id: 4,
      title: "Ortodoncia",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit qui omnis nulla quo voluptates ullam.",
      img: ortodoncia,
      alt: "Tratamiento de ortodoncia",
    },
    {
      id: 5,
      title: "Ortodoncia",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit qui omnis nulla quo voluptates ullam.",
      img: ortodoncia,
      alt: "Tratamiento de ortodoncia",
    },
    {
      id: 6,
      title: "Ortodoncia",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit qui omnis nulla quo voluptates ullam.",
      img: ortodoncia,
      alt: "Tratamiento de ortodoncia",
    },
  ]

  return (
    <section className="w-full flex justify-center items-center" id="services" ref={divRef}>
      <div className="w-full px-4 flex justify-center items-center flex-col max-w-7xl">
        <h2 className='text-3xl font-bold text-secondary mb-2'>Servicios que ofrecemos</h2>
        <section className="grid grid-cols-1 mt-8 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {
            servicesInformation.map((item) => (
              <CardService 
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
                alt={item.alt}
              />
            ))
          }
        </section>
      </div>
    </section>
  )
}
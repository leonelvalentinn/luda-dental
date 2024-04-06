import { CardAbout } from "./CardAbout"

import Willy from '../assets/photo_doc.jpg'
import WillyMalo from "../assets/photo_jesus.jpg"

export const AboutDoctors = () => {
  return(
    <section className="w-full flex justify-center items-center flex-col">
      <div className="w-full grid grid-cols-1 gap-8 place-content-center max-w-7xl px-4 mb-10">
        <CardAbout 
          name="Willy Wonka"
          imgSrc={Willy}
          imgAlt="Foto de perfil del Dr. Willy Wonka"
        >
          <li className="mb-2">Graduado de la Universidad Latinoamericana como cirujano dentista</li>
          <li className="mb-2">Graduado de la Universidad Latinoamericana como cirujano dentista</li>
          <li className="">Graduado de la Universidad Latinoamericana como cirujano dentista</li>
        </CardAbout>
        <CardAbout 
          name="Will Smith"
          imgSrc={WillyMalo}
          imgAlt="Foto de perfil del Dr. Willy Malo"
          reverse
        >
          <li className="mb-2">Graduado de la Universidad Latinoamericana como cirujano dentista</li>
          <li className="mb-2">Graduado de la Universidad Latinoamericana como cirujano dentista</li>
          <li className="">Graduado de la Universidad Latinoamericana como cirujano dentista</li>
        </CardAbout>
      </div>
    </section>
  )
}
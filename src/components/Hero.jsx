import hero from "../assets/hero.webp"
export const Hero = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col max-h-[600px] relative">
      <img src={hero} alt="Foto de sonrisa perfecta" className="w-full h-full object-cover lg:h-[600px]"/>
      <div className="absolute bottom-0">
        <h1 className="font-bold text-4xl text-center">LuDa Dental</h1>
        <p className="font-semibold text-xl text-center">Cuidamos tu sonrisa</p>
      </div>
    </section>
  );
}
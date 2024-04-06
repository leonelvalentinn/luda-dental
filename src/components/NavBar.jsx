import { useState } from "react";
import logo from "../assets/logo.png";

// eslint-disable-next-line react/prop-types
export const NavBar = ({ Function }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full relative px-4 flex justify-between items-center max-w-7xl flex-col">
        <div className="w-full flex justify-between items-center my-2">
          <a href="/" aria-label="Ir a la página principal" className="w-3/5 max-w-52">
            <img className="w-full" src={logo} alt="Logo Luda Dental" width="350" height='123'/>
          </a>
          <button 
            className="border-none bg-transparent flex justify-between items-center flex-col w-10 h-6 cursor-pointer transition lg:hidden" 
            aria-label="Menu"
            onMouseOver={() => setIsOpen(!isOpen)}
            onMouseOut={() => setIsOpen(!isOpen)}
          >
            <span aria-hidden className={`w-10 h-1 rounded-lg bg-primary transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span aria-hidden className={`w-10 h-1 rounded-lg bg-primary transition ${isOpen ? "scale-0": ""}`}></span>
            <span aria-hidden className={`w-10 h-1 rounded-lg bg-primary transition ${isOpen ? "-rotate-45 -translate-y-3" : ""}`}></span>
          </button>
          <ul className={`w-[90%] absolute top-[88px] flex flex-col p-4 z-20 ${isOpen ? "scale-1 translate-x-0 translate-y-0" : "scale-0 translate-x-36 -translate-y-36"} lg:p-0 font-medium border border-gray-200 rounded-lg bg-gray-200 transition-all duration-300 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white lg:scale-100 lg:static lg:-translate-x-0 lg:translate-y-0 lg:w-fit`}>
            <li>
              <a href="/" className="block py-2 px-3 text-white bg-primary rounded transition lg:bg-transparent lg:text-secondary/60 lg:hover:text-secondary/60 lg:p-0 lg:dark:text-secondary/lg:hover:text-secondary/60 lg:text-xl lg:text-secondary" aria-current="page">Inicio</a>
            </li>
            <li>
              <a href="#about" onClick={() => Function()} className="block py-2 px-3 transition text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-secondary/60 lg:p-0 lg:text-xl">Nosotros</a>
            </li>
            <li>
              <a href="/#services" onClick={() => Function()} className="block py-2 px-3 transition text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-secondary/60 lg:p-0 lg:text-xl">Servicios</a>
            </li>
            <li>
              <a href="#promotion" className="block py-2 px-3 text-gray-900 transition rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-secondary/60 lg:p-0 lg:text-xl">Promociones</a>
            </li>
            <li>
              <a href="#location" className="block py-2 px-3 text-gray-900 transition rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-secondary/60 lg:p-0 lg:text-xl">Ubicación</a>
            </li>
            <li>
              <a href="tel:5555555555" className="block py-2 px-3 text-gray-900 transition rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-secondary/60 lg:p-0 lg:text-xl">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

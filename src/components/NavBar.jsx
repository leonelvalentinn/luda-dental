import { useState } from "react";
import logo from "../assets/logo.png";
import { Phone } from "./Phone";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <article className="hidden w-full justify-between items-center max-w-7xl px-4">
        <a
          className="flex justify-center items-center text-lg"
          href="tel:5555555555"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="w-6 fill-secondary pr-1" /> 5555555555
        </a>
        <a
          className="flex justify-center items-center text-lg"
          href="tel:5555555555"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="w-6 fill-secondary pr-1" /> 5555555555
        </a>
      </article>
      <nav className="w-full relative px-4 flex justify-between items-center max-w-7xl flex-col">
        <div className="w-full flex justify-between items-center my-2">
          <a href="/" aria-label="Ir a la página principal" className="w-3/5 max-w-52">
            <img className="w-full" src={logo} alt="Logo Luda Dental" />
          </a>
          <button 
            className="border-none bg-transparent flex justify-between items-center flex-col w-10 h-6 cursor-pointer transition" 
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span aria-hidden className={`w-8 h-1 rounded-lg bg-primary transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span aria-hidden className={`w-8 h-1 rounded-lg bg-primary transition ${isOpen ? "scale-0": ""}`}></span>
            <span aria-hidden className={`w-8 h-1 rounded-lg bg-primary transition ${isOpen ? "-rotate-45 -translate-y-3" : ""}`}></span>
          </button>
        </div>
        <ul className={`w-[90%] absolute top-[88px] flex flex-col p-4 z-20 md:p-0 font-medium border border-gray-200 rounded-lg bg-gray-200 transition-all duration-300 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ${isOpen ? "scale-1 translate-x-0 translate-y-0" : "scale-0 translate-x-28 -translate-y-24"}`}>
          <li>
            <a href="/" className="block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:text-secondary/60 md:hover:text-secondary/60 md:p-0 md:dark:text-secondary/md:hover:text-secondary/60" aria-current="page">Inicio</a>
          </li>
          <li>
            <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary/60 md:p-0">Nosotros</a>
          </li>
          <li>
            <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary/60 md:p-0">Servicios</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

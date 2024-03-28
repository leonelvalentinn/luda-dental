import { useState } from "react";
import logo from "../assets/logo.png";
import { Phone } from "./Phone";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <article className="w-full flex justify-between items-center max-w-7xl px-4">
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
      <nav className="w-full px-4 flex justify-between items-center max-w-7xl my-4">
        <a href="/" aria-label="Ir a la página principal" className="w-3/5">
          <img className="w-full" src={logo} alt="Logo Luda Dental" />
        </a>
        <button 
          className="border-none bg-transparent flex justify-between items-center flex-col w-10 h-6 cursor-pointer transition" 
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-8 h-1 rounded-lg bg-primary transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-8 h-1 rounded-lg bg-primary transition ${isOpen ? "scale-0": ""}`}></span>
          <span className={`w-8 h-1 rounded-lg bg-primary transition ${isOpen ? "-rotate-45 -translate-y-3" : ""}`}></span>
        </button>
      </nav>
    </header>
  );
};

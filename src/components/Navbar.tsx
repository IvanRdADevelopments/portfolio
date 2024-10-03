"use client";

import "@/styles/Navbar.css";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar-box text-greyCorp-700">
      <section className="logo-box">
        <Link
          to="hero"
          smooth={true}
          duration={800}>
          <Image
            src="/img/iconograma-nobg.png"
            alt="Iconograma IvanRdA"
            title="Volver arriba"
            width={120}
            height={120}
          />
        </Link>
      </section>

      <section className="nav-box">
        <ul className="nav-list">
          <Link
            to="about"
            smooth={true}
            duration={800}>
            <li className="nav-element">Sobre mí</li>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={800}>
            <li className="nav-element">Habilidades</li>
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={800}>
            <li className="nav-element">Experiencia</li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}>
            <li className="nav-element">Contáctame</li>
          </Link>
        </ul>
      </section>
    </nav>
  );
}

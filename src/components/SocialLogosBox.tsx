"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/LanguageModal.css";
import LanguageModal from "./LanguageModal";

export default function SocialLogoBox() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDownload = (language: string) => {
    let fileUrl: string = "";
    let fileName: string = "";

    if (language === "es") {
      fileUrl = "/files/resume-ES.pdf";
      fileName = "resume-ES.pdf";
    } else if (language === "en") {
      fileUrl = "/files/resume-EN.pdf";
      fileName = "resume-EN.pdf";
    }

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsModalOpen(false);
  };

  return (
    <>
      <div className="social-media-box">
        <div className="logo-social-box">
          <Image
            src="/img/linkedin.png"
            alt="Ir a Linkedin"
            title="Ver perfil en Linkedin"
            width={60}
            height={60}
          />
        </div>

        <div className="logo-social-box">
          <Image
            src="/img/github.png"
            alt="Ir a Github"
            title="Ver repositorios de Github"
            width={50}
            height={50}
          />
        </div>

        <div className="logo-social-box">
          <Image
            src="/img/instagram.png"
            alt="Ir a Instagram"
            title="Ver perfil de Instagram"
            width={60}
            height={60}
          />
        </div>

        <div
          className="logo-social-box"
          onClick={() => {
            setIsModalOpen(true);
          }}>
          <Image
            src="/icons/download.svg"
            alt="Descargar CV"
            title="Descargar CV"
            width={60}
            height={60}
          />
        </div>
      </div>

      <LanguageModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        handleDownload={handleDownload} 
      />
    </>
  );
}

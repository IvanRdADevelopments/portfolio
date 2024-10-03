import SocialLogoBox from "./SocialLogosBox";

export default function LeftHeroBox() {
  return (
    <div className="w-[100%] h-[80%] bg-gradient-to-br from-blueCorp-700 to-blueCorp-900 p-24 flex flex-col justify-center items-start">
      <h4 className="hero-section-welcome lg:text-2xl md:text-xl text-lg">
        <i>
          Bienvenido
          <span className="ellipsis">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </i>
      </h4>
      <h1 className="hero-section-title lg:text-6xl md:text-4xl text-2xl">
        Iván Rodríguez
      </h1>
      <h3 className="hero-section-subtitle lg:text-2xl md:text-xl text-lg">
        <i>Desarrollador Fullstack / Especialista técnico</i>
      </h3>

      <SocialLogoBox />
    </div>
  );
}

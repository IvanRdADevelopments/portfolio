import SocialLogoBox from "./SocialLogosBox";

export default function LeftHeroBox() {
  return (
    <div className="w-[100%] h-[80%] bg-gradient-to-br from-blueCorp-700 to-blueCorp-900 p-24 flex flex-col justify-center items-start">
      <h4 className="hero-section-welcome">Bienvenido...</h4>
      <h1 className="hero-section-title">Iván Rodríguez</h1>
      <h3 className="hero-section-subtitle">Desarrollador Fullstack / Especialista técnico</h3>

      <SocialLogoBox />
    </div>
  );
}

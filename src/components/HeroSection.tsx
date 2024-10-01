import LeftHeroBox from "./LeftHeroBox";
import "@/styles/HeroSection.css";
import RightHeroBox from "./RightHeroBox";

export default function HeroSection() {
  return (
    <>
      <article className="left-hero-box">
        <LeftHeroBox />
      </article>

      <article className="right-hero-box">
        <RightHeroBox />
      </article>

      <footer className="hero-footer-box"></footer>
    </>
  );
}

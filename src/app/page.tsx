import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import HeroSectionFooter from "@/components/HeroSectionFooter";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="main-page-box">
      <Navbar />

      <section
        className="page-box boxed-section"
        id="hero">
        <HeroSection />
        <HeroSectionFooter />
      </section>

      <section
        className="page-box"
        id="about">
        <AboutSection />
      </section>
      <section
        className="page-box"
        id="skills">
        {/* SKILLS SECTION COMPONETIZED */}
      </section>
      <section
        className="page-box"
        id="experience">
        {/* EXPERIENCE SECTION COMPONETIZED */}
      </section>
      <section
        className="page-box"
        id="contact">
        {/* CONTACT SECTION COMPONETIZED */}
      </section>
    </main>
  );
}

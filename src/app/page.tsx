import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="main-page-box">
      <Navbar />

      <section
        className="page-box boxed-section"
        id="hero">
        <HeroSection />
      </section>

      <section
        className="page-box"
        id="about">
        {/* ABOUT SECTION COMPONETIZED */}
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

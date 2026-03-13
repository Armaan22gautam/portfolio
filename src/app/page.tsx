import Hero from "@/components/Hero";
import TechSkills from "@/components/TechSkills";
import SoftSkills from "@/components/SoftSkills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <Hero />
      <TechSkills />
      <SoftSkills />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

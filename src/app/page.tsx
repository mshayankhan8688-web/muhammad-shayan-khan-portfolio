import { AboutSkills } from "@/components/AboutSkills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return (
    <>
      <main id="content">
        <Hero />
        <AboutSkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Journey from "@/components/experience/Experience";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";
import Experience from "@/components/experience/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
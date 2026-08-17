import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";
import Certifications from "@/components/certifications/Certifications";
import ResumeSection from "@/components/resume/ResumeSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Services />
      <Skills />
      <Certifications />
      <ResumeSection />
      <Contact />
      <Footer />
    </>
  );
}
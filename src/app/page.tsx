import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/feature/Hero";
import About from "@/components/feature/About";
import Projects from "@/components/feature/Projects";
import Experience from "@/components/feature/Experience";
import Education from "@/components/feature/Education";
import Services from "@/components/feature/Services";
import Testimonials from "@/components/feature/Testimonials";
import Blog from "@/components/feature/Blog";
import Contact from "@/components/feature/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main id="home">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Services />
        <Testimonials />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

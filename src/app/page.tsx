import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Focus } from "@/components/Focus";
import { Approach } from "@/components/Approach";
import { Projects } from "@/components/Projects";
import { Clients } from "@/components/Clients";
import { Software } from "@/components/Software";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="page-top" className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Focus />
        <Approach />
        <Projects />
        <Clients />
        <Software />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

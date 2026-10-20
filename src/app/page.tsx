import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Focus } from "@/components/Focus";
import { Approach } from "@/components/Approach";
import { Projects } from "@/components/Projects";
import { Software } from "@/components/Software";
import { References } from "@/components/References";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

/**
 * Sectievolgorde zoals in het voorbeeld: eerst de activiteiten (roterende
 * beelden), dan de persoon, dan het werk.
 */
export default function Home() {
  return (
    <div id="page-top" className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Focus />
        <Approach />
        <Projects />
        <Software />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

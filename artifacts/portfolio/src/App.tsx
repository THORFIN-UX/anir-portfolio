import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Stack } from "@/components/site/Stack";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { GridOverlay } from "@/components/site/GridOverlay";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { LOCATION } from "@/content/site";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <GridOverlay />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Stack />
          <Process />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
      <span className="sr-only">
        Full Stack Developer available in {LOCATION}
      </span>
    </div>
  );
}

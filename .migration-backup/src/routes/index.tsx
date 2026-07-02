import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Stack } from "@/components/site/Stack";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { GridOverlay } from "@/components/site/GridOverlay";
import { EMAIL, LOCATION } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Anir — Full Stack Developer | Premium Websites in Agadir, Morocco",
      },
      {
        name: "description",
        content:
          "Full Stack Developer in Agadir building fast, premium websites for local businesses, real estate agencies, and cooperatives. React, Next.js, Node.js.",
      },
      {
        property: "og:title",
        content: "Anir — Full Stack Developer | Premium Websites",
      },
      {
        property: "og:description",
        content:
          "Fast, premium websites that help businesses attract customers and grow revenue.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Anir — Full Stack Developer",
      },
      {
        name: "twitter:description",
        content:
          "Premium websites that turn visitors into customers. Based in Agadir, Morocco.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Anir",
          jobTitle: "Full Stack Developer",
          email: EMAIL,
          telephone: "+212773534733",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Agadir",
            addressCountry: "MA",
          },
          description:
            "Full Stack Developer building premium websites for businesses, real estate, and cooperatives.",
          knowsAbout: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Web Performance",
            "SEO",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
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
      </div>
      <span className="sr-only">
        Full Stack Developer available in {LOCATION}
      </span>
    </div>
  );
}

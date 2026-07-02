export const WHATSAPP_NUMBER = "212773534733";
export const WHATSAPP_MESSAGE = "Hi Anir, I'd like a proposal for a website project.";
export const EMAIL = "ecoanir52@gmail.com";
export const LOCATION = "Agadir, Morocco";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
export const MAILTO_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Project inquiry",
)}`;

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  label: "FULL STACK DEVELOPER",
  headline: "Premium Websites That Turn Visitors Into Customers",
  subheadline:
    "I build high-performance websites and web platforms for businesses that want stronger credibility, better customer experience, and measurable growth.",
  trust: ["Modern Stack", "Fast", "Responsive", "SEO Ready"],
};

export const SERVICES = [
  {
    n: "01",
    title: "Landing Pages",
    description:
      "High-converting pages designed to attract and convert visitors.",
  },
  {
    n: "02",
    title: "Business Websites",
    description:
      "Professional digital experiences that build trust and credibility.",
  },
  {
    n: "03",
    title: "Admin Dashboards",
    description:
      "Operational systems for managing business workflows efficiently.",
  },
] as const;

export const PROJECTS = {
  featured: {
    name: "Argan Glow Store",
    category: "Premium Cosmetic Website",
    challenge: "Build trust while keeping the ordering experience frictionless.",
    solution: "Minimal storefront with a WhatsApp ordering flow.",
    outcome:
      "Professional digital identity and smoother customer communication.",
    url: "https://argan-glow-store.vercel.app",
    display: "argan-glow-store.vercel.app",
  },
  others: [
    {
      name: "Sahel Immobilier",
      category: "Real Estate Lead Generation",
      challenge: "Organize listings and simplify contact.",
      solution: "Search-first interface with a clear conversion flow.",
      url: "https://sahel-immoubilier.vercel.app",
      display: "sahel-immoubilier.vercel.app",
    },
    {
      name: "Coopérative Timgharine",
      category: "Cooperative Showcase",
      challenge: "Create a professional digital presence.",
      solution: "Fast and focused informational website.",
      url: "https://timgharin.vercel.app/",
      display: "timgharine.vercel.app",
    },
  ],
} as const;

export const STACK = [
  { label: "Frontend", items: ["React", "Next.js", "Tailwind", "TypeScript"] },
  { label: "Backend", items: ["Node.js", "Express"] },
  { label: "Database", items: ["PostgreSQL", "Supabase"] },
  { label: "Tools", items: ["Git", "Linux"] },
  { label: "Specialization", items: ["Web Engineering", "Security Awareness"] },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Discovery",
    description:
      "We clarify goals, audience, and constraints so every decision serves a real outcome.",
  },
  {
    n: "02",
    title: "Strategy",
    description:
      "Structure, content priorities, and conversion paths mapped before a single line of code.",
  },
  {
    n: "03",
    title: "Build",
    description:
      "Clean, performant implementation with careful attention to detail, motion, and accessibility.",
  },
  {
    n: "04",
    title: "Launch",
    description:
      "Deployed, measured, and refined. You get a fast website and a partner who stays reachable.",
  },
] as const;

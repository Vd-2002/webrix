"use client";

const TECHS = [
  {
    id: "react",
    name: "React.js",
    accentColor: "#61DAFB",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  {
    id: "nextjs",
    name: "Next.js",
    accentColor: "#E2E8F0",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
  {
    id: "nodejs",
    name: "Node.js",
    accentColor: "#4ADE80",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  {
    id: "javascript",
    name: "JavaScript",
    accentColor: "#F7DF1E",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  {
    id: "expressjs",
    name: "Express.js",
    accentColor: "#818CF8",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
  },
  {
    id: "tailwind",
    name: "Tailwind",
    accentColor: "#38BDF8",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    accentColor: "#7952B3",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
  },
  {
    id: "html5",
    name: "HTML5",
    accentColor: "#E34F26",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  },
  {
    id: "css3",
    name: "CSS3",
    accentColor: "#1572B6",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
  },
  {
    id: "php",
    name: "PHP",
    accentColor: "#A78BFA",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
  },
  {
    id: "wordpress",
    name: "WordPress",
    accentColor: "#06B6D4",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    accentColor: "#47A248",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    accentColor: "#60A5FA",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
  },
  {
    id: "mysql",
    name: "MySQL",
    accentColor: "#F59E0B",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative z-10 space-y-12 py-0 scroll-mt-24">
      {/* Header Container */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Technology{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Stack
          </span>
        </h2>
        <p className="text-base text-white/50 font-sans max-w-xl mx-auto">
          Powering dynamic digital products with a lightweight, industry-standard, and highly optimized technology suite.
        </p>
      </div>

      {/* Grid Showcase */}
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Symmetric 7-column desktop grid for the 14 items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
          {TECHS.map((tech) => (
            <div
              key={tech.id}
              className="relative group rounded-3xl border border-white/5 bg-[#070712]/30 backdrop-blur-sm p-4 sm:p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-1 hover:bg-[#070712]/60 overflow-hidden cursor-pointer aspect-square"
            >
              {/* Decorative blueprint grid lines inside card */}
              <div 
                className="absolute inset-0 opacity-[0.015] pointer-events-none group-hover:opacity-[0.04] transition-opacity duration-500"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px"
                }}
              />

              {/* Glowing spot background inside card */}
              <div 
                className="absolute w-36 h-36 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle, ${tech.accentColor}18 0%, transparent 70%)`
                }}
              />

              {/* Rotating dashed ring behind the logo */}
              <div 
                className="absolute w-24 h-24 rounded-full border border-dashed border-white/[0.02] group-hover:border-white/[0.06] group-hover:w-[102px] group-hover:h-[102px] transition-all duration-700 animate-[spin_40s_linear_infinite] pointer-events-none"
              />

              {/* Logo container */}
              <div className="transition-transform duration-500 group-hover:scale-110 z-10 flex items-center justify-center w-12 h-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={tech.logoUrl} 
                  alt={`${tech.name} logo`}
                  className={`w-12 h-12 object-contain select-none pointer-events-none ${
                    tech.id === "nextjs" || tech.id === "expressjs" ? "invert brightness-[1.8] opacity-90" : ""
                  }`}
                />
              </div>

              {/* Monospace tech name label */}
              <span 
                className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 group-hover:text-white transition-colors duration-300 z-10 text-center"
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

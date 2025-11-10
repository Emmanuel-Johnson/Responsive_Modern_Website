export const codeExamples = {
  "App.jsx": `import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
     <Navbar />
     <Hero /> 
     <Features /> 
     <Pricing /> 
     <Testimonials /> 
     <Footer /> 
    </div>
  )
}
`,

  "Hero.jsx": `
export default function Hero() {
  return (
    <section 
      className="flex flex-col items-center justify-center 
                 text-center py-24 px-6 
                 bg-gradient-to-b from-transparent to-[#111]"
    >

      <p 
        className="text-gray-400 max-w-2xl mx-auto 
                   leading-relaxed text-lg">
        AI-assisted design-to-code workflow that helps you create elegant
      </p>

      <div className="mt-10 flex gap-4">
      </div>
    </section>
  )
}
`,


  "Navbar.jsx": `
export default function Navbar() {
  return (
    <nav 
      className="flex justify-between items-center 
                 px-8 py-5 
                 bg-[#0d0d0d]/70 
                 backdrop-blur-md 
                 border-b border-white/10 
                 sticky top-0 z-50">
      <h1 
        className="text-2xl font-bold 
                   bg-gradient-to-r from-orange-400 to-pink-500 
                   bg-clip-text text-transparent"
      >
        CodeNova
      </h1>
    </nav>
  )
}
`,


  "Features.jsx": `
export default function Features() {
  const items = [
    { title: "Smart Completion", desc: "Get instant AI-powered code suggestions." },
    { title: "Auto Animation", desc: "Effortless transitions with smart motion presets." },
    { title: "Realtime Preview", desc: "See UI updates live as you type." },
  ];
  return (
    <section className="grid sm:grid-cols-3 gap-6 px-6 py-16 text-center">
      {items.map((item, i) => (
        <div key={i}
          className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 
                     border border-white/10 transition-all"
        >
          <h3 className="text-lg font-semibold text-orange-400 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-400">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
`,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "⚙️",
    title: "App Layout",
    content: "Manages layout and imports of key components.",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "🚀",
    title: "Hero Section",
    content: "Eye-catching intro with gradient text and CTA.",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🧭",
    title: "Navbar",
    content: "Sticky glass navbar with responsive links.",
  },
  "Features.jsx": {
    bgColor: "bg-orange-500/20",
    iconColor: "text-orange-400",
    textColor: "text-orange-200",
    contentColor: "text-orange-300",
    icon: "💡",
    title: "Feature Grid",
    content: "Showcases AI-powered coding capabilities.",
  },
};

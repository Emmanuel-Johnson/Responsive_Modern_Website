export const codeExamples = {
  "App.jsx": `
import Navbar 
  from "./Navbar";
import Hero 
  from "./Hero";

export default 
function App() {
  return (
    <div
      className="min-h-screen
                 bg-gray-900
                 transition-all
                 text-white"
    >
      <Navbar />
      <Hero />
    </div>
  );
}
`,

  "Hero.jsx": `
export default 
function Hero() {
  return (
    <section
      className="flex flex-col
                 items-center
           
    >
      <h1
        className="text-4xl
                   sm:text-6xl
                   font-bold mb-4"
      >
        Build Modern
        Web UI
      </h1>
    </section>
  );
}
`,

  "Navbar.jsx": `
export default 
function Navbar() {
  return (
    <nav
      className="flex
                 justify-between
                 items-center
                 px-6 py-4
                 border-b
                 border-gray-800">
      <h1
        className="text-xl
                   font-semibold"
      >
        CodeNova
      </h1>
    </nav>
  );
}
`,
};

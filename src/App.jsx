import About from "./ui/About";
import Contact from "./ui/Contact";
import Experience from "./ui/Experience";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import ProjectList from "./ui/ProjectList";
import ScrollToTopBtn from "./ui/ScrollToTopBtn";
import Skills from "./ui/Skills";

function App() {
  return (
    <div className="bg-slate-50 dark:bg-neutral-900">
      <Header />
      <Hero />
      <About />
      <ProjectList />
      <Experience />
      <Skills />
      <Contact />
      <ScrollToTopBtn />
    </div>
  );
}

export default App;

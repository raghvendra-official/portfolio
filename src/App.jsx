import "./App.css";
import Certifications from "./components/CertificationsSection";
import Contact from "./components/Contact";
import Education from "./components/EducationSection";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/SiteNavbar";
import Projects from "./components/Projects";
import Skills from "./components/SkillsSection";

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;

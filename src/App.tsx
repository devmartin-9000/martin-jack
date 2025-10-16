import HeroSection from "./sections/hero";
import Projects from "./sections/projects";

function App() {
	return (
    <div className="space-y-6">
      {/* HERO SECTION */}
      <section>
        <HeroSection />
      </section>
      {/* PROJECTS SECTION */}
      <section>
        <Projects />
      </section>
      <section></section>
      <section></section>
		</div>
	);
}

export default App;

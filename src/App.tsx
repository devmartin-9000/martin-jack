import Contact from "./sections/contact";
import HeroSection from "./sections/hero";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

function App() {
	return (
		<div className="space-y-[-2px]">
			{/* HERO SECTION */}
			<section>
				<HeroSection />
			</section>
			{/* PROJECTS SECTION */}
			<section>
				<Projects />
			</section>
			{/* SKILLS SECTION */}
			<section>
				<Skills />
			</section>
			{/* CONTACT SECTION*/}
			<section>
				<Contact />
			</section>
		</div>
	);
}

export default App;

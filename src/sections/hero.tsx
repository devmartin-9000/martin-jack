import { Blocks } from "lucide-react";
import Navbar from "./components/navbar";

const HeroSection = () => {
	return (
		<section className="min-h-screen bg-gradient-to-b from-blue-500 via-background to-background text-primary">
			<div className="max-w-7xl mx-auto px-6 py-2">
				<Navbar />
				<div className="mt-30 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center justify-center">
					{/* Left Side */}
					<div className="space-y-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
							<span className="bg-gradient-to-r from-blue-700 via-yellow-500 to-red-400 bg-clip-text text-transparent">
								Front-End Developer
							</span>
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl text-primary/70 max-w-md">
							I Build intuitive UIs, web apps, and visual elements with React,
							TypeScript, JavaScript, and Tailwind CSS.
						</p>
						<div className="sm:max-w-[180px] pt-4">
							<a
								href="#projects"
								className="flex justify-center items-center gap-4 px-4 py-3 text-sm sm:text-base font-semibold bg-accent border border-accent text-white/90 rounded-md hover:bg-background/50 hover:border hover:border-accent-foreground transition"
							>
								<Blocks size={18} />
								View Projects
							</a>
						</div>
					</div>

					{/* Right Side */}
					<div className="flex justify-center md:justify-end">
						<img
							src="./logo-light.png"
							alt="Hero"
							className="w-60 sm:w-72 md:w-80 lg:w-[28rem] animate-fade-in-up"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

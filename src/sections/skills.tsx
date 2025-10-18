import { Activity, ArrowRightCircleIcon, BookCheck, CircleGauge, MonitorSmartphone, Server, ShieldCheck, TabletSmartphone, Webhook, Wrench } from "lucide-react";

const techItem = [
	{ name: "HTML", logo: "./assets/html.svg" },
	{ name: "CSS", logo: "./assets/css.svg" },
	{ name: "JavaScript", logo: "./assets/javascript.svg" },
	{ name: "TypeScript", logo: "./assets/typescript.svg" },
	{ name: "React", logo: "./assets/react.svg" },
	{ name: "Next.js", logo: "./assets/nextjs.svg" },
	{ name: "Tailwind CSS", logo: "./assets/tailwindcss.svg" },
	{ name: "Python", logo: "./assets/python.svg" },
	{ name: "SQL", logo: "./assets/sql.svg" },
	{ name: "Express", logo: "./assets/express.svg"},
	{ name: "C", logo: "./assets/c.svg" },
	{ name: "Bash", logo: "./assets/bash.svg" },
];


const developmentSkills = [
	{ skill: "Responsive Web Design", icon: <TabletSmartphone /> },
	{ skill: "API Integration", icon: <Webhook /> },
	{ skill: "Deployment & Hosting", icon: <Server /> },
	{ skill: "State Management", icon: <Activity /> },
	{ skill: "User Authentication", icon: <ShieldCheck /> },
	{ skill: "Performance Debugging", icon: <CircleGauge /> },
	{ skill: "UI/UX Implementation", icon: <MonitorSmartphone /> },
	{ skill: "Software AB Testing", icon: <BookCheck /> },
];

const Skills = () => {
	return (
		<div className="py-10 text-center flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-500 via-background to-background">
			{/* Section Title */}
			<div className="space-y-2">
				<h1 className="flex text-center justify-center items-center gap-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
					<Wrench
						className="p-3 bg-background/40 border-3 border-primary rounded-sm"
						size={80}
					/>
					SKILLS
				</h1>
				<p className="items-center flex gap-2 text-md p-2 border-r-3 border-primary/60 text-center border-b-3 rounded-br-xl shadow-blue-100 text-primary/80">
					<ArrowRightCircleIcon />
					Some of the tech I use
				</p>
			</div>

			{/* Content Container */}
			<div className="mt-10 p-4 rounded-4xl backdrop-blur-sm grid sm:grid-cols-2 gap-4 max-w-7xl w-full">
				{/* Languages & Frameworks */}
				<div className="p-4 bg-background/40 dark:bg-primary/10 backdrop-blur-2xl border-b-2 dark:border-b rounded-lg w-full">
					<h1 className="text-md text-muted-foreground font-bold">
						Languages & Frameworks
					</h1>
					<div className="mt-5">
						<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 w-full px-0">
							{techItem.map((tech, idx) => (
								<div
									key={idx}
									className="rounded-md border-tr shadow-lg dark:bg-background/70 bg-background/50 backdrop-blur-sm"
								>
									<div className="p-1 space-y-4 text-center">
										<h1 className="flex justify-left items-center text-primary/80 gap-2 text-xs sm:gap-4 sm:text-sm font-semibold">
											<img
												src={tech.logo}
												alt={`${tech.name} Logo`}
												className="h-10 w-10 p-0.5 border border-primary/50 dark:bg-primary rounded-full"
											/>
											{tech.name}
										</h1>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Other  */}
				<div className="p-4 bg-background/40 dark:bg-primary/10 backdrop-blur-2xl border-2 dark:border-b rounded-lg w-full">
					<h1 className="text-md text-muted-foreground font-bold">
						Development Skills
					</h1>
					<div className="mt-5">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full px-0">
							{developmentSkills.map((developmentSkills, idx) => (
								<div
									key={idx}
									className="rounded-md border-tr shadow-lg dark:bg-background/70 bg-background/50 backdrop-blur-sm"
								>
									<div className="p-1 space-y-4 text-center">
										<h1 className="flex justify-left items-center text-primary/80 gap-2 text-xs sm:gap-4 sm:text-sm font-semibold">
											<div className="h-10 w-10 py-2 px-1.5 items-center justify-center border border-primary/50 dark:bg-primary rounded-full">
												{developmentSkills.icon}
											</div>
											{developmentSkills.skill}
										</h1>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;

import { Activity, ArrowRightCircleIcon, BookCheck, CheckCircleIcon, CircleGauge, MonitorSmartphone, Server, ShieldCheck, TabletSmartphone, Webhook, Wrench } from "lucide-react";
import TextType from "./components/typingtext";

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

const developmentTools = [
	{ tool: "Postman", logo: "./assets/postman.svg" },
	{ tool: "Figma", logo: "./assets/figma.svg" },
	{ tool: "WordPress", logo: "./assets/wordpress.svg" },
	{ tool: "DevTools", logo: "./assets/chrome.svg" },
	{ tool: "Jira", logo: "./assets/jira.svg" },
];

const otherTools = [
	{ tool: "Convex", logo: "./assets/convex.svg" },
	{ tool: "Supabase", logo: "./assets/supabase.svg" },
	{ tool: "Vercel", logo: "./assets/vercel.svg" },
	{ tool: "Nginx", logo: "./assets/nginx.svg" },
	{ tool: "Firebase", logo: "./assets/firebase.svg" },
];

const otherAbilities = [
	{ ability: "Problem Solving", image: "./assets/problemsolving.svg" },
	{ ability: "Team Collaboration", image: "./assets/teamcollaboration.svg" },
	{ ability: "Adaptability", image: "./assets/adaptation.svg" },
	{ ability: "Attention to Detail", image: "./assets/detail.svg" },
];
const Skills = () => {
	return (
		<div className="py-10 text-center flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-500 via-background to-background">
			{/* Section Title */}
			<div className="space-y-2">
				<h1 className="flex text-center justify-center items-center gap-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
					<Wrench
						className="p-2 bg-background/40 border-3 border-primary rounded-sm"
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
					<h1 className="text-md text-primary/80 font-bold">
						Languages & Frameworks
					</h1>
					<div className="mt-5">
						<div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full px-0">
							{techItem.map((tech, idx) => (
								<div
									key={idx}
									className="transform hover:-translate-y-1 transition duration-200 ease-out cursor-pointer rounded-lg border-tr shadow-lg dark:bg-background/1 bg-background/50 backdrop-blur-sm"
								>
									<div className="p-1 space-y-4 text-center">
										<h1 className="flex justify-left items-center text-primary/80 gap-2 text-xs sm:gap-4 sm:text-sm font-semibold">
											<img
												src={tech.logo}
												alt={`${tech.name} Logo`}
												className={`h-10 w-10 p-0.5 border border-primary/25 dark:bg-primary/30 rounded-tl-2xl rounded-bl-2xl ${
													["Next.js", "Express"].includes(tech.name)
														? "dark:invert"
														: ""
												}`}
											/>
											{tech.name}
										</h1>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="mt-5 p-2 bg-background/40 dark:bg-primary/10 backdrop-blur-2xl border-2 dark:border-b rounded-lg w-full">
							<h1 className="text-md text-primary/80 font-bold">
								Development Tools
							</h1>
							<div className="mt-5">
								<div className="grid grid-cols-1 gap-2 w-full px-0">
									{developmentTools.map((developmentTools, idx) => (
										<div
											key={idx}
											className="transform hover:-translate-y-1 transition duration-200 ease-out cursor-pointer rounded-lg border-tr shadow-lg dark:bg-background/80 bg-background/50 backdrop-blur-sm"
										>
											<div className="p-1 space-y-4 text-center">
												<h1 className="flex justify-start items-center text-primary/80 gap-2 text-xs sm:gap-4 sm:text-sm font-semibold">
													<div className="h-10 w-10 py-2 px-1.5 flex items-center justify-center border border-primary/25 dark:bg-primary/10 rounded-tl-2xl rounded-bl-2xl">
														<img
															src={developmentTools.logo}
															alt={`${developmentTools.tool} Logo`}
														/>
													</div>
													{developmentTools.tool}
												</h1>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="mt-5 p-2 border-b border-t border-r rounded-tr-md rounded-br-md w-full">
							<h1 className=" text-md flex justify-center text-primary/80 font-bold">
								Deployment Toolkit
							</h1>
							<div className="mt-5">
								<div className="grid grid-cols-1 gap-2 w-full px-0">
									{otherTools.map((otherTools, idx) => (
										<div
											key={idx}
											className="transform hover:-translate-y-1 transition duration-200 ease-out cursor-pointer rounded-md border-tr shadow-lg dark:bg-background/80 bg-background/50 backdrop-blur-sm"
										>
											<div className="p-1 space-y-4 text-center">
												<h1 className="flex justify-left items-center text-primary/80 gap-2 text-xs sm:gap-4 sm:text-sm font-semibold">
													<div className="h-10 w-10 py-2 px-1.5 flex items-center justify-center border border-primary/25 dark:bg-primary/10 rounded-tl-2xl rounded-bl-2xl">
														<img
															src={otherTools.logo}
															alt={`${otherTools.tool} logo`}
															className={`${
																otherTools.tool === "Vercel"
																	? "dark:invert"
																	: ""
															}`}
														/>
													</div>
													{otherTools.tool}
												</h1>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="col-span-2 shadow-lg py-7 border rounded-md w-full p-4 flex items-start space-x-4 overflow-visible">
							<img
								src="./logo-dark-1.png"
								alt="logo"
								className="transform hover:-translate-y-1 transition duration-200 ease-out cursor-pointer h-20 w-20 object-contain rounded-full hover:animate-in"
							/>
							<h1 className="flex mt-5 items-center text-primary">
								<TextType
									text={[
										"Fun fact: I can center a div… on the third try.",
										"Fun fact: naming variables is harder than solving the bug.",
										"Fun fact: Git commits are just diary entries for developers.",
										"Fun fact: deleted code is debugged code.",
										"Fun fact: I’ve got more skills than what you see here.",
										"Tip: If it works, don’t ask why — just push to Git.",
										"Tip: flex and grid are just CSS saying ‘trust me bro.",
										"Tip: If it compiles, ship it. If it doesn’t, blame caching.",
										"Fun fact: semicolons don’t care about your feelings, but they will destroy your build.",
										"Fun fact: I write cleaner code than my room.",
										"Fun fact: JavaScript has NaN… and it’s somehow of type 'number'.",
										"Tip: Never underestimate the power of deleting node_modules.",
										"Fun fact: CSS can ruin your day with just one missing bracket.",
										"Fun fact: console.log is my emotional support tool.",
										"Tip: Restarting VS Code fixes 90% of developer sadness.",
										"Fun fact: tabs vs spaces is not a fight — it’s a war.",
										"Tip: Ctrl + Z is not a debugging strategy… but it works.",
										"Tip: The bug is always in the file you didn’t check.",
										"Tip: Don’t worry about that warning — future you will understand.",
										"Tip: Breakpoints are therapy sessions for code.",
										"Tip: Rubber duck debugging works — ducks don’t judge.",
									]}
									typingSpeed={50}
									pauseDuration={2000}
									showCursor={true}
									cursorCharacter="|"
									className="flex text-start text-primary/70 font-semibold"
								/>
							</h1>
						</div>
					</div>
				</div>
				{/* Other  */}
				<div className="p-4 bg-background/40 dark:bg-primary/10 backdrop-blur-2xl border-b-2 dark:border-b rounded-lg w-full">
					<h1 className="text-md text-primary/80 font-bold">
						Development Skills
					</h1>
					<div className="mt-5">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full px-0">
							{developmentSkills.map((developmentSkills, idx) => (
								<div
									key={idx}
									className="transform hover:-translate-y-1 transition duration-200 ease-out cursor-pointer rounded-lg border-tr shadow-lg dark:bg-background/80 bg-background/50 backdrop-blur-sm"
								>
									<div className="p-1 space-y-4 text-center">
										<h1 className="flex justify-left items-center text-primary/80 gap-2 text-xs sm:gap-4 sm:text-sm font-semibold">
											<div className="h-10 w-10 py-2 px-1.5 items-center justify-center border border-primary/25 dark:bg-primary/10 rounded-tl-2xl rounded-bl-2xl">
												{developmentSkills.icon}
											</div>
											{developmentSkills.skill}
										</h1>
									</div>
								</div>
							))}
						</div>
					</div>
					<h1 className="mt-5 text-md text-primary/80 font-bold">
						Other Abilities
					</h1>
					<div className="mt-5">
						<div className="grid grid-cols-2 md:grid-cols-2 gap-2 w-full px-0">
							{otherAbilities.map((otherAbilities, idx) => (
								<div
									key={idx}
									className="transform hover:-translate-y-1 transition duration-200 ease-out cursor-pointer rounded-sm border-tr shadow-lg dark:bg-background/80 bg-background/50 backdrop-blur-sm"
								>
									<div className="flex p-6 items-center justify-center">
										<img
											src={otherAbilities.image}
											alt={`${otherAbilities.ability} image`}
											className="w-30 h-30 opacity-80 dark:invert"
										/>
									</div>
									<div className="py-4 space-y-4 text-center">
										<h1 className="flex justify-center items-center text-primary/80 gap-2 text-xs sm:gap-4 sm:text-sm font-semibold">
											<CheckCircleIcon size={15} className="text-blue-400" />
											{otherAbilities.ability}
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

import { Blocks, CirclePowerIcon, Code2Icon } from "lucide-react";

const projects = [
	{
		title: "Reactity UI",
		description:
			"Plug-and-play React blocks for building modern interfaces without starting from scratch",
		logo: "./reactity-ui-logo.png",
		image: "reactity-ui-logo.png",
	},
	{
		title: "Reactity UI",
		description:
			"Plug-and-play React blocks for building modern interfaces without starting from scratch",
		logo: "./reactity-ui-logo.png",
		image: "reactity-ui-logo.png",
	},
	{
		title: "Reactity UI",
		description:
			"Plug-and-play React blocks for building modern interfaces without starting from scratch",
		logo: "./reactity-ui-logo.png",
		image: "reactity-ui-logo.png",
	},
	{
		title: "Reactity UI",
		description:
			"Plug-and-play React blocks for building modern interfaces without starting from scratch",
		logo: "./reactity-ui-logo.png",
		image: "reactity-ui-logo.png",
	},
	{
		title: "Reactity UI",
		description:
			"Plug-and-play React blocks for building modern interfaces without starting from scratch",
		logo: "./reactity-ui-logo.png",
		image: "reactity-ui-logo.png",
	},
	{
		title: "Reactity UI",
		description:
			"Plug-and-play React blocks for building modern interfaces without starting from scratch",
		logo: "./reactity-ui-logo.png",
		image: "reactity-ui-logo.png",
	},
];

const Projects = () => {
	return (
		<div className="py-10 text-center flex flex-col items-center min-h-screen bg-gradient-to-t from-blue-500 via-background to-background">
			{/* Section Title */}
			<div className="space-y-2">
                <h1 className="flex text-center justify-center items-center gap-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <Blocks size={40} />
					PROJECTS
				</h1>
				<p className="text-md text-muted-foreground">
					Take a look into some of my most notable work
				</p>
			</div>

			{/* Grid */}
			<div className="grid mt-10 gap-6 w-full max-w-6xl px-6 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, idx) => (
					<div
						key={idx}
						className="rounded-xl border-t border-b border-l shadow-lg bg-background/50 backdrop-blur-sm"
					>
						<div className="p-4 space-y-4 text-center">
							<h1 className="flex justify-center items-center gap-2 text-lg font-semibold">
								<img
									src={project.logo}
									alt={`${project.title} Logo`}
									className="h-8 w-8"
								/>
								{project.title}
							</h1>

							<p className="text-xs text-muted-foreground px-2">
								{project.description}
							</p>

							<div className="bg-primary/10 rounded-sm p-2">
								<img
									src={project.image}
									alt=""
									className="object-contain w-full h-70"
								/>
							</div>

							<div className="flex justify-evenly">
								<button className="px-3 py-1 rounded-xl text-sm bg-primary/10 flex gap-2 items-center">
									<Code2Icon className="w-5 h-5" />
									Code
								</button>
								<button className="px-3 py-1 rounded-xl text-sm bg-primary/10 flex gap-2 items-center">
									<CirclePowerIcon className="w-4 h-4" />
									Preview
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;

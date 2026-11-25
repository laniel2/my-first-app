export const metadata = { title: "Projects | Alaniel Salada" };

const projects = [
	{
		id: 1,
		name: "FindItApp",
		description: "A web app that helps people report and recover lost items.",
	},
	{
		id: 2,
		name: "LostAndFoundMaterdei",
		description: "A local lost-and-found platform for the Mater Dei community.",
	},
	{
		id: 3,
		name: "Tailoring Management System",
		description:
			"A management system for tracking tailoring orders, customers, and measurements.",
	},
];

export default function ProjectsPage() {
	return (
		<section>
			<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
				Portfolio
			</p>
			<h1 className="text-4xl font-bold text-white sm:text-5xl">My Projects</h1>

			<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<article
						key={project.id}
						className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-sky-500/50"
					>
						<h2 className="text-xl font-semibold text-white">
							{project.name}
						</h2>
						<p className="mt-3 leading-7 text-slate-300">
							{project.description}
						</p>
					</article>
				))}
			</div>
		</section>
	);
}
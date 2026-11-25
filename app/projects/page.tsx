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
			<h1 className="text-4xl font-bold">My Projects</h1>

			<div className="mt-8 space-y-4">
				{projects.map((project) => (
					<article key={project.id} className="border-b border-gray-200 pb-4">
						<h2 className="text-xl font-semibold">{project.name}</h2>
						<p className="mt-2 text-gray-700">{project.description}</p>
					</article>
				))}
			</div>
		</section>
	);
}
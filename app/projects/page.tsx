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
			<h1>
				<strong>My Projects</strong>
			</h1>
			{projects.map((project) => (
				<article key={project.id}>
					<h2>{project.name}</h2>
					<p>{project.description}</p>
				</article>
			))}
		</section>
	);
}
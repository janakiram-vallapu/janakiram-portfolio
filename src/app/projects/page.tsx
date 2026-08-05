import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-28">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-3 uppercase tracking-[0.3em] text-green-400">
          Portfolio
        </p>

        <h1 className="text-5xl font-bold">
          All Projects
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Explore all completed data analytics projects built using SQL,
          Power BI, Excel, and Python.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}
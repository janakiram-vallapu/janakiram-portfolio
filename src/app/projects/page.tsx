import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-28">
      {/* Back Button */}
      <Link
        href="/#projects"
        className="inline-flex items-center text-green-400 transition hover:text-green-300"
      >
        ← Back to Home
      </Link>

      {/* Page Header */}
      <div className="mx-auto mb-16 mt-10 max-w-3xl text-center">
        <p className="mb-3 uppercase tracking-[0.3em] text-green-400">
          Portfolio
        </p>

        <h1 className="text-4xl font-bold sm:text-5xl">
          All Projects
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Explore all completed data analytics and automation projects built
          using SQL, Power BI, Excel, VBA, and Python.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
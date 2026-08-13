import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import AnimationWrapper from "../AnimationWrapper";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <AnimationWrapper>
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-16 sm:py-20 lg:py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-green-400">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A collection of data analytics projects built using SQL,
            Power BI, Excel and Python to solve real-world business
            problems and generate actionable insights.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex rounded-full border border-green-400 px-8 py-3 font-semibold text-green-400 transition hover:bg-green-400 hover:text-black"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </AnimationWrapper>
  );
}
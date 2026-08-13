import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/10">

      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-white">
        <Image
          src={project.image || "/projects/placeholder.png"}
          alt={project.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-8">

        {/* Category & Status */}
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
            {project.category}
          </span>

          <span className="text-xs font-medium text-slate-500">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 line-clamp-3 leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-green-400 transition hover:gap-3 hover:text-green-300"
        >
          View Case Study
          <ArrowRight size={18} />
        </Link>

      </div>
    </article>
  );
}
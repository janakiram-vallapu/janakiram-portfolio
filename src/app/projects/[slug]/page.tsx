import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectPreview from "@/components/projects/ProjectPreview";
import ProjectInfo from "@/components/projects/ProjectInfo";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-28">
      {/* Back Button */}
      <Link
        href="/#projects"
        className="text-green-400 transition hover:text-green-300"
      >
        ← Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mt-10">
        <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
          {project.category}
        </span>

        <h1 className="mt-6 text-5xl font-bold sm:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tech.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 px-4 py-2 text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard Preview */}
      <ProjectPreview
        slug={project.slug}
        title={project.title}
      />

      {/* Project Overview */}
      <ProjectInfo
        dataset={project.dataset}
        duration={project.duration}
        records={project.records}
        status={project.status}
        github={project.github}
        liveDemo={project.liveDemo}
      />

      {/* Business Problem */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">Business Problem</h2>

        <p className="mt-5 leading-8 text-slate-400">
          {project.problem}
        </p>
      </section>

      {/* Approach */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">Approach</h2>

        <div className="mt-6 space-y-4">
          {project.approach.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Key Insights */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">Key Insights</h2>

        <div className="mt-6 space-y-4">
          {project.insights.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="text-xl text-green-400">✓</span>

              <p className="text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
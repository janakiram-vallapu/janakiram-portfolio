import { FolderGit2, ExternalLink } from "lucide-react";

type ProjectInfoProps = {
  dataset?: string;
  duration?: string;
  records?: string;
  status: string;
  github?: string;
  liveDemo?: string;
};

export default function ProjectInfo({
  dataset,
  duration,
  records,
  status,
  github,
  liveDemo,
}: ProjectInfoProps) {
  const items = [
    {
      title: "Dataset",
      value: dataset ?? "Coming Soon",
    },
    {
      title: "Records",
      value: records ?? "N/A",
    },
    {
      title: "Duration",
      value: duration ?? "N/A",
    },
    {
      title: "Status",
      value: status,
    },
  ];

  return (
    <section className="my-20">
      <h2 className="mb-8 text-4xl font-bold">
        Project Overview
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-green-400"
          >
            <p className="text-sm uppercase tracking-wider text-slate-400">
              {item.title}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-green-400">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {(github || liveDemo) && (
        <div className="mt-10 flex flex-wrap gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              <FolderGit2 size={20} />
              View Source Code
            </a>
          )}

          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold transition hover:border-green-400 hover:text-green-400"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
        </div>
      )}
    </section>
  );
}
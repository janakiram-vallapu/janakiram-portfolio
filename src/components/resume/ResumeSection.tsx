import { Download, FolderOpen } from "lucide-react";
import AnimationWrapper from "../AnimationWrapper";

export default function ResumeSection() {
  return (
    <AnimationWrapper>
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center sm:px-10 lg:px-16">
          <p className="mb-3 uppercase tracking-[0.3em] text-green-400">
            Resume
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Want to Know More About My Work?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Explore my resume for a concise overview of my skills, education,
            certifications, and hands-on projects in SQL, Power BI, Excel,
            VBA, and Python.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/Resume.pdf"
              download="Janakiram_Vallapu_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              <Download size={19} />
              Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-7 py-3 font-semibold transition hover:border-green-400 hover:text-green-400"
            >
              <FolderOpen size={19} />
              View Projects
            </a>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
}
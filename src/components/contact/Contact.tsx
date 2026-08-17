import AnimationWrapper from "../AnimationWrapper";

export default function Contact() {
  return (
    <AnimationWrapper>
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center uppercase tracking-[8px] text-green-400">
            Contact
          </p>

          <h2 className="mt-4 text-center text-4xl font-bold sm:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-slate-400">
            I'm actively looking for Data Analyst opportunities, freelance
            projects and collaborations.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <a
              href="mailto:janakiramvallapu@gmail.com"
              className="rounded-2xl border border-slate-800 p-8 transition hover:-translate-y-1 hover:border-green-400"
            >
              <h3 className="text-xl font-semibold">
                Email
              </h3>

              <p className="mt-3 text-slate-400">
                janakiramvallapu@gmail.com
              </p>
            </a>

            <a
              href="https://linkedin.com/in/janakiramvallapu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-800 p-8 transition hover:-translate-y-1 hover:border-green-400"
            >
              <h3 className="text-xl font-semibold">
                LinkedIn
              </h3>

              <p className="mt-3 text-slate-400">
                Connect with me
              </p>
            </a>

            <a
              href="https://github.com/janakiram-vallapu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-800 p-8 transition hover:-translate-y-1 hover:border-green-400"
            >
              <h3 className="text-xl font-semibold">
                GitHub
              </h3>

              <p className="mt-3 text-slate-400">
                View my repositories
              </p>
            </a>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
}
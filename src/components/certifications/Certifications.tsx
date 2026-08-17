import AnimationWrapper from "../AnimationWrapper";

const certifications = [
  {
    title: "SQL (Advanced) Certificate",
    issuer: "HackerRank",
    date: "09 Aug 2026",
    credential: "O38A4367ECB9",
  },
  {
    title: "SQL Gold Badge",
    issuer: "HackerRank",
    date: "Completed",
    credential: "Advanced SQL Achievement",
  },
  {
    title: "The Ultimate Excel Mastery Course",
    issuer: "Skill Course",
    date: "08 Aug 2026",
    credential: "SC-70RYASMX12",
  },
  {
    title: "Data Analytics / Business Analytics",
    issuer: "Naresh IT",
    date: "Completed",
    credential: "Professional Training",
  },
];

export default function Certifications() {
  return (
    <AnimationWrapper>
      <section
        id="certifications"
        className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-green-400">
            Credentials
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Certifications & Achievements
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Certifications and achievements that validate my skills in SQL,
            Excel, data analytics, and business intelligence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <div
              key={certification.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-green-400/40 hover:bg-white/[0.05]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
                    {certification.issuer}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {certification.title}
                  </h3>
                </div>

                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-400">
                  Certified
                </span>
              </div>

              <div className="space-y-2 text-sm text-slate-400">
                <p>
                  <span className="font-medium text-slate-300">Date:</span>{" "}
                  {certification.date}
                </p>

                <p>
                  <span className="font-medium text-slate-300">
                    Credential:
                  </span>{" "}
                  {certification.credential}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimationWrapper>
  );
}
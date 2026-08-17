import AnimationWrapper from "@/components/AnimationWrapper";

const expertise = [
  {
    title: "Data Analytics",
    description:
      "SQL, Python, data cleaning, exploratory analysis, KPI reporting, and business insights.",
  },
  {
    title: "Business Intelligence",
    description:
      "Power BI, DAX, Power Query, dashboards, interactive reports, and performance tracking.",
  },
  {
    title: "Excel Automation",
    description:
      "Advanced Excel, PivotTables, VBA, UserForms, workflow automation, and business reporting.",
  },
];

export default function About() {
  return (
    <AnimationWrapper>
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 uppercase tracking-[0.3em] text-green-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Passionate about solving{" "}
              <span className="text-green-400">business problems</span>{" "}
              through data.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              I&apos;m Janakiram Vallapu, a Data Analyst focused on SQL,
              Power BI, Excel, VBA, and Python.
            </p>

            <p>
              I enjoy transforming raw datasets into interactive dashboards,
              automated reporting solutions, and meaningful business insights.
            </p>

            <p>
              My goal is to build practical data solutions that help
              organizations make faster and better decisions.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-green-400/40 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </AnimationWrapper>
  );
}
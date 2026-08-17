const skillGroups = [
  {
    title: "Data Analysis",
    skills: ["SQL", "MySQL", "Python", "Pandas"],
  },
  {
    title: "Business Intelligence",
    skills: ["Power BI", "DAX", "Power Query"],
  },
  {
    title: "Excel & Reporting",
    skills: [
      "Advanced Excel",
      "Pivot Tables",
      "Pivot Charts",
      "Excel Dashboards",
    ],
  },
  {
    title: "Analytics & Visualization",
    skills: [
      "Data Cleaning",
      "Exploratory Data Analysis",
      "KPI Reporting",
      "Data Visualization",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-20"
    >
      <p className="text-center uppercase tracking-[8px] text-green-400">
        Skills
      </p>

      <h2 className="mt-4 text-center text-5xl font-bold text-white">
        Technical Skills
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-400">
        Tools and technologies I use to clean, analyze, visualize,
        and communicate data-driven insights.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-green-400"
          >
            <h3 className="text-2xl font-bold text-white">
              {group.title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-green-400 hover:text-green-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import AnimationWrapper from "../AnimationWrapper";

export default function Experience() {
  const experiences = [
    {
      title: "B.Tech in Information Technology",
      company: "Jawaharlal Nehru Technological University Hyderabad",
      period: "2021 – 2025",
      description:
        "Graduated with a strong foundation in programming, databases, software development, and data analytics.",
      type: "Education",
    },
    {
      title: "Open to Full-Time Opportunities",
      company: "Data Analyst • Business Analyst • Power BI Developer",
      period: "Present",
      description:
        "Actively seeking full-time opportunities where I can apply SQL, Power BI, Excel, and Python to solve business problems and deliver data-driven insights.",
      type: "Open to Work",
    },
    {
      title: "Freelance Data Analyst",
      company: "Fiverr & Independent Clients",
      period: "2026 – Present",
      description:
        "Providing Excel automation, data cleaning, dashboard development, Power BI reporting, SQL analysis, and data visualization solutions for clients.",
      type: "Freelancing",
    },
  ];

  return (
    <AnimationWrapper>
      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <p className="mb-3 text-center uppercase tracking-[0.3em] text-green-400">
          BACKGROUND
        </p>

        <h2 className="mb-16 text-center text-5xl font-bold">
          Education & Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-green-400/40"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                    {item.type}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-slate-400">
                    {item.company}
                  </p>
                </div>

                <p className="font-semibold text-green-400">
                  {item.period}
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </AnimationWrapper>
  );
}
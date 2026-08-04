export default function ProjectStats() {
  const stats = [
    { title: "Records", value: "5,067+" },
    { title: "Tables", value: "4" },
    { title: "SQL Queries", value: "40+" },
    { title: "Dashboard", value: "3 Pages" },
  ];

  return (
    <section className="my-20">
      <h2 className="mb-8 text-4xl font-bold">
        Project Statistics
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-3xl font-bold text-green-400">
              {item.value}
            </p>

            <p className="mt-2 text-slate-400">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
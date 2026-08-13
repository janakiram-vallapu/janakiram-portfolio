import AnimationWrapper from "../AnimationWrapper";
import {
  Database,
  BarChart3,
  FileSpreadsheet,
  BrushCleaning,
  LineChart,
  FileBarChart,
} from "lucide-react";

const services = [
  {
    title: "Power BI Dashboards",
    icon: BarChart3,
    description: "Interactive dashboards with KPIs and business insights.",
  },
  {
    title: "SQL Analysis",
    icon: Database,
    description: "Data extraction, joins, optimization and reporting.",
  },
  {
    title: "Excel Automation",
    icon: FileSpreadsheet,
    description: "Advanced Excel, formulas, Pivot Tables and automation.",
  },
  {
    title: "Data Cleaning",
    icon: BrushCleaning,
    description: "Clean, transform and prepare data for analysis.",
  },
  {
    title: "Data Visualization",
    icon: LineChart,
    description: "Professional charts and reports for decision making.",
  },
  {
    title: "Data Reporting",
    icon: FileBarChart,
    description: "Business-ready KPI reports and insights for decision-making.",
  },
];

export default function Services() {
  return (
    <AnimationWrapper>
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-16 sm:py-20 lg:py-28">
        <div className="text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-green-400">
            Services
          </p>

          <h2 className="text-5xl font-bold">
            What I Can Help You With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Available for freelance Excel, SQL, Power BI, data cleaning,
            reporting, and analytics projects.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-2 hover:border-green-400"
              >
                <Icon className="mb-5 text-green-400" size={36} />

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </AnimationWrapper>
  );
}
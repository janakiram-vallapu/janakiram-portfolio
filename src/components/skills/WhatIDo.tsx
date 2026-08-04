const services = [
  "Data Cleaning & Preparation",
  "SQL Query Optimization",
  "Interactive Power BI Dashboards",
  "Excel Automation & Reporting",
  "Business Data Analysis",
  "Python Data Processing",
  "Data Visualization",
  "KPI & Performance Reporting",
];

export default function WhatIDo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
      <h3 className="mb-6 text-2xl font-bold">
        What I Do
      </h3>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service}
            className="flex items-center gap-3"
          >
            <span className="text-xl text-green-400">✓</span>

            <p className="text-slate-300">
              {service}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
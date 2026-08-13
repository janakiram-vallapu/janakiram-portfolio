import AnimationWrapper from "@/components/AnimationWrapper";

export default function About() {
  return (
    <AnimationWrapper>
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-28"
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
              I'm Janakiram Vallapu, a Data Analyst focused on SQL,
              Power BI, Excel and Python.
            </p>

            <p>
              I enjoy converting raw datasets into meaningful
              dashboards and business insights.
            </p>

            <p>
              My goal is to build data solutions that help
              organizations make better decisions.
            </p>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
}
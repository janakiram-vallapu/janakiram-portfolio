import SkillCard from "./SkillCard";
import WhatIDo from "./WhatIDo";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <p className="text-center uppercase tracking-[8px] text-green-400">
        Skills
      </p>

      <h2 className="mt-4 text-center text-5xl font-bold text-white">
        Technical Skills
      </h2>

      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>

        <WhatIDo />
      </div>
    </section>
  );
}
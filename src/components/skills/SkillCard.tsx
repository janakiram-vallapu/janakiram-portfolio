type SkillCardProps = {
  name: string;
  level: number;
};

export default function SkillCard({
  name,
  level,
}: SkillCardProps) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between">
        <h3 className="font-semibold text-white">
          {name}
        </h3>

        <span className="text-green-400">
          {level}%
        </span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-800">

        <div
          className="h-3 rounded-full bg-green-500 transition-all duration-700"
          style={{ width: `${level}%` }}
        />

      </div>

    </div>
  );
}
import Image from "next/image";

type ProjectPreviewProps = {
  slug: string;
  title: string;
};

export default function ProjectPreview({
  slug,
  title,
}: ProjectPreviewProps) {
  return (
    <section className="my-20">
      <h2 className="mb-8 text-4xl font-bold">
        Dashboard Preview
      </h2>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
        <Image
          src={`/projects/${slug}/dashboard.png`}
          alt={title}
          width={1400}
          height={800}
          className="w-full transition duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}
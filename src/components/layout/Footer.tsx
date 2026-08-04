import { Mail, FolderGit2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

        {/* Left */}
        <div>
          <h3 className="text-xl font-bold">
            Janakiram<span className="text-green-400">.</span>
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Data Analyst • SQL • Power BI • Python
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-6">

          <a
            href="mailto:janakiramvallapu@gmail.com"
            className="transition hover:text-green-400"
          >
            <Mail size={22} />
          </a>

          <a
            href="https://github.com/janakiram-vallapu/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-green-400"
          >
            <FolderGit2 size={22} />
          </a>

        </div>

        {/* Right */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Janakiram Vallapu
        </p>

      </div>
    </footer>
  );
}
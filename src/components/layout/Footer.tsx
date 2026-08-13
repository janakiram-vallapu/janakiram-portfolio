import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">
              Janakiram Vallapu
              <span className="text-green-400">.</span>
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Data Analyst • SQL • Power BI • Excel • Python
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:janakiramvallapu@gmail.com"
              aria-label="Email"
              className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-green-400 hover:text-green-400"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/janakiramvallapu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 transition hover:text-green-400"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/janakiram-vallapu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 transition hover:text-green-400"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Janakiram Vallapu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
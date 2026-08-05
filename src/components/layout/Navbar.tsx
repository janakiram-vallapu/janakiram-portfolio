"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;

      for (const link of links) {
        const section = document.getElementById(link.id);

        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActive(link.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold">
          Janakiram
          <span className="text-green-400">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              className={`transition ${
                active === link.id
                  ? "font-semibold text-green-400"
                  : "text-slate-300 hover:text-green-400"
              }`}
            >
              {link.label}
            </a>
          ))}

          <Link
            href="/projects"
            className="rounded-full border border-green-400 px-4 py-2 text-green-400 transition hover:bg-green-400 hover:text-black"
          >
            All Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
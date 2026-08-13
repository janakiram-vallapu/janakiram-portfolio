"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold" onClick={closeMenu}>
          Janakiram
          <span className="text-green-400">.</span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-green-400 hover:text-green-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-white/10 bg-[#050816] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={closeMenu}
                className={`rounded-lg px-3 py-2 transition ${
                  active === link.id
                    ? "bg-green-500/10 font-semibold text-green-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-green-400"
                }`}
              >
                {link.label}
              </a>
            ))}

            <Link
              href="/projects"
              onClick={closeMenu}
              className="mt-2 rounded-full border border-green-400 px-4 py-3 text-center font-semibold text-green-400 transition hover:bg-green-400 hover:text-black"
            >
              All Projects
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
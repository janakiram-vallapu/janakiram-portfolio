"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, FolderOpen } from "lucide-react";

export default function Hero() {
  return (
<section
  id="home"
  className="relative min-h-screen overflow-hidden px-6 pt-28"
>      {/* Background glow */}
      <div className="absolute left-[-120px] top-32 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute right-[-100px] top-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Welcome to my professional journey
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-green-400">Janakiram Vallapu</span>
          </h1>

          <div className="mt-5 min-h-10 text-xl font-semibold text-slate-200 sm:text-2xl">
            <TypeAnimation
              sequence={[
                "Data Analyst",
                1500,
                "SQL",
                1500,
                "Power BI",
                1500,
                "Excel",
                1500,
                "Python",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I transform raw data into meaningful business insights using SQL,
            Power BI, Excel and Python.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3 font-semibold text-black hover:bg-green-400"
            >
              <FolderOpen size={19} />
              Explore Projects
            </a>

            <a
              href="/Resume.pdf"
              download="Janakiram_Vallapu_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-7 py-3 font-semibold hover:border-green-400 hover:text-green-400"
            >
              <Download size={19} />
              Download Resume
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["6", "Projects"],
              ["5+", "Core Skills"],
              ["2025", "Graduate"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
              >
                <p className="text-2xl font-bold text-green-400">{value}</p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Profile image */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  className="relative mx-auto -translate-y-28"
>
  <div className="absolute inset-0 rounded-full bg-green-400/20 blur-3xl" />

  <div className="relative rounded-full bg-gradient-to-br from-green-400 via-emerald-400 to-cyan-400 p-[5px] shadow-2xl">
    <div className="rounded-full bg-[#07130e] p-2">
      <Image
        src="/profile.png"
        alt="Janakiram Vallapu"
        width={360}
        height={360}
        priority
        className="h-[300px] w-[300px] rounded-full object-cover object-top sm:h-[330px] sm:w-[330px]"
      />
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}
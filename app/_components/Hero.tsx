"use client";

import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-sky-900 to-purple-900 text-white">
      {/* Top badge strip */}
      <div className="bg-white/10 py-2 text-center text-sm font-medium text-sky-300">
        50+ Document Tools | 30+ Drawing Features | Secure & Real-time
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:items-center lg:gap-12">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Create, <span className="text-sky-300">Collaborate</span> &{" "}
            <span className="text-purple-300">Visualize</span> Documents Effortlessly
          </h1>

          <p className="text-slate-200 sm:text-lg mb-8">
            All-in-one collaborative workspace for engineering and design teams.
            Write documents, draw diagrams, and manage your files — all in one place.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/register"
              className="inline-block rounded-full bg-sky-400 px-8 py-3 font-medium text-black shadow-lg hover:bg-sky-500 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-block rounded-full border border-white px-8 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-300 max-w-md">
            Built with Next.js, React, TypeScript, Tailwind CSS, and powered by
            Convex DB for real-time collaboration. Trusted by early adopters and teams.
          </p>
        </div>

        {/* Right illustration */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="https://source.unsplash.com/600x400/?technology,workspace" // Replace with your illustration file
            alt="Noteverse Workspace"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import PracticalExperience from "@/components/PracticalExperience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Profiles from "@/components/Profiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <PracticalExperience />
        <Education />
        <Achievements />
        <Profiles />
        <Contact />
      </main>

      <Footer />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

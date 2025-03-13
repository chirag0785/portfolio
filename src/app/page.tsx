"use client";
import React from "react";
import { aboutContent, navItems } from "../../data";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Link from "next/link";
import { ThreeDCardDemo } from "@/components/ui/ThreeDCard";
import avatarImg from "../../public/images/avatar_img.png"
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import WorkExperience from "@/components/WorkExperience";
import { AboutMe } from "@/components/AboutMe";
const Page = () => {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="flex items-center justify-between">
          <Link  href="/" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white sm:block hidden">Chirag Bhatia</Link>
          <FloatingNav navItems={navItems} />
        </div>
        <Hero />

        <div className="flex justify-center flex-col" id="about">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">About Me</h1>
          <AboutMe/>
        </div>

        {/* Skills section */}
        <div id="skills">
        <Skills/>
        </div>

        <div id="projects">
          <Projects/>
        </div>

        <div id="workexperience">
          <WorkExperience/>
        </div>
        <div id="contact">
          <ContactMe/>
        </div>
      </div>
    </main>
  );
};

export default Page;

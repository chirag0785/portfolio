"use client";
import { projects } from "../../data";
import { Carousel } from "./ui/Carousel";
import { ProjectorIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const Projects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", containScroll: "keepSnaps" },
        [Autoplay({ delay: 4000 })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-16 px-4 sm:px-6 bg-[#0D1117] text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-start gap-6 w-full flex-shrink-0"
                            >
                                {/* Project Info */}
                                <div className="w-full md:w-1/2">
                                    <div className="cursor-pointer overflow-hidden relative rounded-lg shadow-xl bg-[#161b22] p-6 transition-transform duration-300 hover:scale-[1.02]">
                                        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
                                        {/* Project Title */}
                                        <div className="flex flex-row items-center space-x-4 relative z-10">
                                            <ProjectorIcon className="h-10 w-10 text-gray-300" />
                                            <div>
                                                <p className="font-semibold text-gray-300">{project.title}</p>
                                                <p className="text-sm text-gray-400">
                                                    {project.techStack.join(", ")}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Description */}
                                        <div className="relative z-10 mt-4">
                                            <h1 className="font-bold text-2xl text-gray-100">{project.title}</h1>
                                            {project.content.map((c, idx) => (
                                                <p key={idx} className="text-base text-gray-300 mt-2 leading-relaxed">
                                                    {c}
                                                </p>
                                            ))}
                                        </div>
                                        {/* Links */}
                                        <div className="flex justify-between items-center mt-4 relative z-10">
                                            {project.repoLink && (
                                                <a
                                                    href={project.repoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-blue-400 hover:text-blue-300 transition font-medium"
                                                >
                                                    GitHub Repo
                                                </a>
                                            )}
                                            {project.livelink && (
                                                <a
                                                    href={project.livelink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-green-400 hover:text-green-300 transition font-medium"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Carousel */}
                                <div className="w-full md:w-1/2">
                                    <Carousel
                                        slides={project.images.map((image) => ({
                                            alt: project.title,
                                            src: image,
                                        }))}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <button className="text-3xl border rounded-full p-3 hover:bg-gray-700" onClick={scrollPrev}>
                        &lt;
                    </button>
                    <button className="text-3xl border rounded-full p-3 hover:bg-gray-700" onClick={scrollNext}>
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;

"use client";
import React from "react";
import { workExperience } from "../../data";
import Image from "next/image";
import { motion } from "framer-motion";

const WorkExperience = () => {
    return (
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14"
            >
                Work Experience
            </motion.h2>

            <div className="space-y-14 relative">
                {workExperience.map((work, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative group"
                    >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-[#1a1a2e]/60 border border-gray-700 backdrop-blur-lg rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex-shrink-0">
                                <Image
                                    src={work.logo}
                                    alt={`${work.company} Logo`}
                                    width={70}
                                    height={70}
                                    className="rounded-lg transition-all duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col space-y-2 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                    {work.title}
                                </h3>
                                <p className="text-lg text-gray-300">{work.company}</p>
                                <p className="text-sm text-gray-400">{work.duration}</p>
                                <span
                                    className={`mt-2 inline-block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                                        work.status === "Upcoming"
                                            ? "bg-yellow-500 text-black shadow-md shadow-yellow-500/50"
                                            : "bg-green-500 text-black shadow-md shadow-green-500/50"
                                    }`}
                                >
                                    {work.status}
                                </span>
                            </div>
                        </div>

                        {/* Connector Line */}
                        {index !== workExperience.length - 1 && (
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] w-1 h-12 bg-gradient-to-b from-gray-500 to-transparent rounded-full md:h-16"
                            ></motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;

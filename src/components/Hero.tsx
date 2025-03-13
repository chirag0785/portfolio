import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TypewriterEffectSmooth } from './ui/TypewriterEffect';
import { aboutMe } from '../../data';
import Image from 'next/image';
import snippetImage from '../../public/images/portfolio-image.png';
import HelloIcon from './ui/HelloIcon';

const Hero = () => {
    return (
        <div className="relative min-h-screen px-6 md:px-12 lg:px-20 pt-32 pb-20 flex flex-col items-center gap-10">
            {/* Spotlights */}
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[60vh] w-[40vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[70vh] w-[40vw]" fill="blue" />

            {/* Background Effect */}
            <div className="absolute inset-0 w-full h-full bg-black-100 bg-grid-white/[0.03] flex items-center justify-center">
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            {/* Heading */}
            <h2 className="relative z-20 w-full text-xl sm:text-2xl md:text-3xl text-white flex items-center gap-2 text-center justify-center pb-8">
                Hi, I'm <span className="text-white flex items-center gap-1">Chirag <HelloIcon /></span>
            </h2>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-6 lg:gap-12">
                {/* Left Side - Text */}
                <div className="w-full lg:w-[600px] flex flex-col text-center sm:text-left items-center sm:items-start">
                    <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-normal max-w-xl">
                        <span>I am a </span>
                        <TypewriterEffectSmooth
                            words={aboutMe}
                            className="text-white inline"
                            cursorClassName="text-blue-100"
                        />
                    </h3>
                </div>

                {/* Right Side - Image */}
                <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/3]">
                        <Image
                            src={snippetImage}
                            alt="Hero Image"
                            className="shadow-lg object-cover rounded-lg"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 400px, 500px"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

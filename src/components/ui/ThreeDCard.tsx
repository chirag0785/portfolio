"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo({
  image,
  title,
  content,
}: {
  image: StaticImageData;
  title: string;
  content: string[];
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card w-full max-w-[30rem] h-auto rounded-xl p-6 border 
        bg-transparent border-gray-700 shadow-lg hover:shadow-emerald-500/10 text-white">
        
        {/* Responsive Image */}
        <CardItem translateZ="100" className="w-full mt-4r flex justify-center">
          <div className="w-28 h-28">
          <Image
            src={image}
            className="w-full h-full filter grayscale"
            alt="About Image"
          />
          </div>
        </CardItem>

        {/* Title */}
        <CardItem translateZ="100" className="w-full mt-4 text-xl font-semibold text-gray-100">
          {title}
        </CardItem>

        {/* Content List */}
        <CardItem translateZ="100" className="w-full mt-4">
          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm sm:text-base">
            {content.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

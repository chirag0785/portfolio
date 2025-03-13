import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileCode,
  IconTrophy,
} from "@tabler/icons-react";
import { aboutContent, passion, acheivements } from "../../data";

export function AboutMe() {
  const formatList = (items: string[]) => (
    <ul className="space-y-2 text-lg text-[#ffffff]">
      {items.map((point, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-blue-400">🔹</span>
          <span className="break-words">{point}</span>
        </li>
      ))}
    </ul>
  );

  const formatAchievements = (
    <ul className="space-y-2 text-lg text-[#ffffff]">
      {acheivements.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-yellow-400">🏆</span>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition duration-300 break-words "
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );

  const items = [
    {
      title: "Who Am I?",
      description: formatList(aboutContent),
      icon: <IconClipboardCopy className="h-7 w-7 text-blue-500" />,
      className: "md:col-span-2",
    },
    {
      title: "My Passion",
      description: formatList(passion),
      icon: <IconFileCode className="h-7 w-7 text-green-400" />,
    },
    {
      title: "Achievements",
      description: formatAchievements,
      icon: <IconTrophy className="h-7 w-7 text-yellow-500" />,
    },
  ];

  return (
    <div className="text-[#ffffff] py-12 px-6">
      <BentoGrid className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 auto-rows-fr lg:mb-36">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={
              <h3 className="text-xl font-semibold text-[#ffffff]">{item.title}</h3>
            }
            description={item.description}
            icon={item.icon}
            className={cn(
              "p-6 rounded-2xl border border-white/10 bg-slate-800 transition-transform duration-300 hover:scale-[1.03]",
              "flex flex-col items-start",
              "w-full h-fit"
            )}
          />
        ))}
      </BentoGrid>


      <BentoGridItem
            title={
              <h3 className="text-xl font-semibold text-[#ffffff]">See Resume</h3>
            }
            description={<p className="text-lg text-[#ffffff]">
                View my detailed resume for more information.
              </p>}
            icon={<IconClipboardCopy className="h-7 w-7 text-blue-500" />}
            className={cn(
              "p-6 rounded-2xl border border-white/10 bg-slate-800 transition-transform duration-300 hover:scale-[1.03]",
              "flex flex-col items-start",
              "w-full h-fit"
            )}
            link={"https://drive.google.com/file/d/1RyPiOLKuKV83__ClyiPGKcXT0pEerS00/view?usp=drive_link"}
          />
    </div>
  );
}

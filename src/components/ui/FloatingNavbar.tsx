"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: React.ReactNode }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      setVisible(scrollYProgress.get() >= 0.05 && direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto w-full max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-full border border-white/20 bg-[#0D1117] shadow-xl z-[5000] px-4 sm:px-6 md:px-8 py-2 flex items-center justify-center space-x-3 sm:space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className="relative text-neutral-300 hover:text-white transition-all duration-200 flex items-center space-x-2 text-sm sm:text-base"
          >
            {navItem.icon && <span className="block">{navItem.icon}</span>}
            <span className="text-xs sm:text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

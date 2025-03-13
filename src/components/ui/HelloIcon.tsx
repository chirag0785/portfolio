"use client";

import { motion } from "framer-motion";

export default function HelloIcon() {
  return (
    <motion.div
      animate={{ rotate: [0, 15, -15, 0] }} // Wave effect
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
      className="text-4xl"
    >
      👋
    </motion.div>
  );
}

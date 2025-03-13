"use client";
import Typewriter from "typewriter-effect";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  return (
    <div className={className}>
      <Typewriter
        options={{
          loop: true,
          delay: 75, // Typing speed
          deleteSpeed: 50,
        }}
        onInit={(typewriter) => {
          words.forEach((word, index) => {
            typewriter
              .typeString(`<span class="${word.className}">${word.text}</span>`)
              .pauseFor(1000)
              .deleteAll()
              .start();
          });
        }}
      />
    </div>
  );
};

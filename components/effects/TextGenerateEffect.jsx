"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();

  // Split words and mark the special phrase
  let wordsArray = words.split(" ").map((word, idx) => {
    if (
      word.toLowerCase().includes("high-quality") ||
      word.toLowerCase().includes("results") ||
      word.includes("MERN") 

    ) {
      return { text: word, highlight: true };
    }
    return { text: word, highlight: false };
  });

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((wordObj, idx) => (
          <motion.span
            key={wordObj.text + idx}
            className={cn(
              "opacity-0",
              wordObj.highlight
                ? "font-extrabold text-purple-500" // Highlight style
                : "dark:text-white text-black"
            )}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {wordObj.text}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black  leading-snug tracking-wide  sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};


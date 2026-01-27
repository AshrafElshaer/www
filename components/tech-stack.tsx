"use client";
import React from "react";
import { BiLogoReact } from "react-icons/bi";
import {
  SiExpress,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";

const techStack = [
  {
    name: "TypeScript",
    icon: <SiTypescript size={24} />,
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs size={30} />,
  },
  {
    name: "React Native",
    icon: <BiLogoReact size={30} />,
  },

  {
    name: "Redux",
    icon: <SiRedux size={24} />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={24} />,
  },
  {
    name: "Node.js",
    icon: <TbBrandNodejs size={24} />,
  },
  {
    name: "NestJS",
    icon: <SiNestjs size={22} />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase size={22} />,
  },
];

import { cn } from "@/lib/utils";
import { InfiniteSlider } from "./ui/infinite-slider";
import { motion } from "motion/react";

export default function TechStack({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        " relative z-20   overflow-hidden space-y-4 p-4",
        className,
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 4, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-lg font-medium font-chillax"
      >
        knowledge Base
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <InfiniteSlider
          speedOnHover={15}
          speed={30}
          gap={24}
          className="mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
        >
          {techStack.map((item, index) => (
            <div
              className="flex items-center gap-2 text-foreground/75 hover:text-foreground transition-colors duration-300 select-none"
              key={`first-${item.name}-${index}`}
            >
              {item.icon}
              <span className=" text-lg font-semibold">{item.name}</span>
            </div>
          ))}
        </InfiniteSlider>
      </motion.div>
    </div>
  );
}

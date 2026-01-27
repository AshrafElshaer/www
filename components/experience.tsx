"use client";
import { motion } from "motion/react";
import Link from "next/link";

const experience = [
  {
    role: "Frontend Engineer",
    company: "Antera Software",
    link: "https://anterasoftware.com",
    period: "May 2025 - Present",
    description:
      "Frontend engineer responsible for building the new version of the e-commerce front , building and maintaining custom ui components and participating in code reviews, troubleshooting, and debugging processes.",
    technologies: [
      "TypeScript",
      "React.js",
      "NestJs",
      "Material UI",
      "Redux",
      "Vitest",
    ],
  },
  {
    role: "Frontend & Mobile Engineer",
    company: "Teammate Me",
    link: "https://www.teammateme.com",
    period: "April 2024 - May 2025",
    description: `Developed and maintained responsive mobile and web applications using React Native and Next.js for TeammateMe, as well as participated in code reviews, troubleshooting, and debugging processes.`,
    technologies: ["TypeScript", "React Native", "Next.js", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <div className=" space-y-4 p-4">
      <motion.h2
        initial={{ opacity: 0, y: 4, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-lg font-medium font-chillax"
      >
        Experience
      </motion.h2>
      {experience.map((job, index) => {
        const delay = 0.35 + index * 0.1;
        return (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 4, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: delay }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="text-md font-medium">
                {job.role}{" "}
                {job.role.toLowerCase().includes("freelance") ? "" : "at"}{" "}
                <Link
                  href={job.link}
                  target="_blank"
                  className="text-foreground hover:underline"
                >
                  {job.company}
                </Link>
              </h3>
              <span className="text-xs text-foreground/60">{job.period}</span>
            </div>
            <p className="text-sm text-foreground/75 mb-2">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-xs text-foreground/60">
                  {tech}
                  {techIndex < job.technologies.length - 1 ? " /" : ""}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

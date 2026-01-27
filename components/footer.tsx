"use client";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { buttonVariants } from "./ui/button";
import { motion } from "motion/react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/AshrafElshaer",
    icon: <SiGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashrafelshaer",
    icon: <SiLinkedin />,
  },
  {
    label: "Twitter",
    href: "https://x.com/AshrafElshaer98",
    icon: <FaXTwitter />,
  },
];
export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.2, delay: 0.7 }}
      className="p-4 flex flex-col sm:flex-row items-center justify-between gap-2"
    >
      <div className="flex items-center gap-2">
        {links.map((link) => (
          <Link
            className={buttonVariants({ variant: "outline", size: "icon" })}
            href={link.href}
            target="_blank"
            key={link.label}
          >
            {link.icon}
          </Link>
        ))}
      </div>

      <p className="text-sm text-foreground/75">
        &copy; {new Date().getFullYear()} Ashraf Elshaer. All rights reserved.
      </p>
    </motion.footer>
  );
}

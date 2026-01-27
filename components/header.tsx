"use client";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { motion } from "motion/react";

export function Header() {
  return (
    <header className="p-4  space-y-4">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-between gap-2"
      >
        <h1 className="text-2xl font-medium font-chillax">Ashraf Elshaer</h1>
        <ThemeSwitcher />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 4, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="text-foreground/75 font-medium "
      >
        Software Engineer from Egypt <span className="text-foreground">🇪🇬</span>
        , Located in USA <span className="text-foreground">🇺🇸</span>. Currently
        working as a Frontend Engineer at{" "}
        <Link
          href="https://anterasoftware.com"
          target="_blank"
          className="text-foreground hover:underline"
        >
          Antera Software
        </Link>
      </motion.p>
    </header>
  );
}

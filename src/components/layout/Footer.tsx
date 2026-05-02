"use client";

import React from "react";
import { motion } from "motion/react";
import "iconify-icon";

const footerGroups = [
  {
    title: "Product",
    links: ["Features", "Models", "Pricing", "API"],
  },
  {
    title: "Company",
    links: ["Studio", "Journal", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "Whitepaper", "Status", "Security"],
  },
];

const socials = [
  { label: "X", icon: "simple-icons:x" },
  { label: "GitHub", icon: "simple-icons:github" },
  { label: "Discord", icon: "simple-icons:discord" },
];

export const Footer = () => {
  return (
    <motion.footer
      className="section-shell pb-8 pt-12"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bento-card footer-card p-5 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.25fr_auto] lg:items-start">
          <div>
            <a href="#" className="inline-flex items-center gap-3">
              <span className="icon-button icon-button-sm">
                <iconify-icon icon="solar:stars-linear" class="iconify-center"></iconify-icon>
              </span>
              <span className="font-playfair text-xl italic text-white">Cosmos AI</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/58 font-geist">
              A compact visual engine for cinematic concepts, production boards and controlled AI image direction.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-xs uppercase font-geist font-bold text-white/72">{group.title}</h4>
                <ul className="mt-3 space-y-2">
                  {group.links.map((label) => (
                    <li key={label}>
                      <a href="#" className="text-sm text-white/48 hover:text-white transition-colors font-geist">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex lg:flex-col items-center gap-2 lg:items-end">
            {socials.map((social) => (
              <a key={social.label} href="#" className="icon-button icon-button-sm" aria-label={social.label}>
                <iconify-icon icon={social.icon} class="iconify-center"></iconify-icon>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/42 font-geist">© 2026 Cosmos AI. Designed for visual production.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/42 hover:text-white font-geist transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/42 hover:text-white font-geist transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

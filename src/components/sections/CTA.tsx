"use client";

import React from "react";
import { motion } from "motion/react";
import "iconify-icon";

export const CTA = () => {
  return (
    <motion.section
      className="section-shell mt-12 sm:mt-16 md:mt-[4.5rem] relative"
      id="cta"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-18%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bento-card p-5 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="section-kicker">
              <iconify-icon icon="solar:stars-minimalistic-linear" class="iconify-center"></iconify-icon>
              Limited beta
            </span>
            <h2 className="section-title mt-4 max-w-3xl">Start with a controlled visual system.</h2>
            <p className="section-copy mt-4">
              Open the studio, build a cinematic board and keep the same bento workflow from prompt to export.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href="#" className="btn-premium btn-premium-glass !normal-case">
              Start creating
              <iconify-icon icon="solar:magic-stick-3-linear" class="iconify-center"></iconify-icon>
            </a>
            <a href="#" className="btn-quiet !normal-case">
              View showcase
              <iconify-icon icon="solar:gallery-linear" class="iconify-center"></iconify-icon>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

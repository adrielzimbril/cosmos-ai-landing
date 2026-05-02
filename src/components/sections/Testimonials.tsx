"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Elena Vance",
    role: "Visual Effects Director",
    content:
      "Cosmos-gen-4 shortened our look-dev loop without flattening the art direction. The lighting controls feel production-ready.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Elena",
  },
  {
    name: "Marcus Thorne",
    role: "Digital Artist",
    content:
      "It understands the intent behind lens language. I can adjust mood, material and atmosphere without rebuilding the whole prompt.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Marcus",
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    content:
      "The boards are consistent enough for real review. We moved from loose exploration to campaign-ready frames in one afternoon.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Sarah",
  },
  {
    name: "Ilya Moreau",
    role: "AI Film Producer",
    content:
      "Shot memory is the difference. Characters keep their silhouette and the model still gives us surprising compositions.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Ilya",
  },
  {
    name: "Naomi Hart",
    role: "Brand Systems Lead",
    content:
      "The visual system is clean enough to brief non-technical teams. We can talk in references, not settings.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Naomi",
  },
  {
    name: "Theo Park",
    role: "Motion Designer",
    content:
      "The outputs have depth but do not feel overcooked. It is fast, controlled and easy to art-direct.",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Theo",
  },
];

export const Testimonials = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>("[data-testimonial-card]");
    if (!rail || !card) return;

    const gap = 16;
    rail.scrollTo({
      left: active * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  }, [active]);

  return (
    <motion.section
      className="section-shell mt-12 sm:mt-16 md:mt-[4.5rem] relative"
      id="testimonials"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-18%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bento-card testimonials-gooey p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-kicker">Testimonials</span>
            <h2 className="section-title mt-4 max-w-2xl">Rotating creator notes.</h2>
          </div>
          <p className="section-copy">
            Auto-sliding cards bring back the rotated editorial feel, with more examples and tighter spacing.
          </p>
        </div>

        <div className="relative mt-7 overflow-hidden">
          <div
            ref={railRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-1 py-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              maskImage: "linear-gradient(90deg, black 0%, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(90deg, black 0%, black 88%, transparent 100%)",
            }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.article
                data-testimonial-card
                key={testimonial.name}
                className={cn(
                  "bento-card min-w-[280px] sm:min-w-[360px] lg:min-w-[390px] p-5 flex flex-col justify-between",
                  index % 2 === 0 ? "-rotate-1" : "rotate-1",
                )}
                animate={{
                  scale: active === index ? 1.02 : 1,
                  rotate: active === index ? 0 : index % 2 === 0 ? -1 : 1,
                }}
                whileHover={{ rotate: 0, y: -5 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-base sm:text-lg leading-relaxed text-white/82 font-jakarta">
                  {testimonial.content}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-11 w-11 overflow-hidden rounded-full border border-white/16 bg-white/[0.06] p-1">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      unoptimized
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-jakarta font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-white/44 font-geist">{testimonial.role}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    active === index ? "w-8 bg-white/80" : "w-3 bg-white/20 hover:bg-white/40",
                  )}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous"
                className="icon-button icon-button-sm"
                onClick={() => setActive((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              >
                <iconify-icon icon="solar:arrow-left-linear" class="iconify-center"></iconify-icon>
              </button>
              <button
                aria-label="Next"
                className="icon-button icon-button-sm"
                onClick={() => setActive((current) => (current + 1) % TESTIMONIALS.length)}
              >
                <iconify-icon icon="solar:arrow-right-linear" class="iconify-center"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

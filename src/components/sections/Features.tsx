"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import "iconify-icon";

const systemCards = [
  {
    title: "Character Consistency",
    text: "Lock facial features and anatomical proportions across different lighting and environments.",
  },
  {
    title: "Dynamic Lighting",
    text: "Physically accurate light simulation with support for custom HDRI and light rigs.",
  },
  {
    title: "Temporal Stability",
    text: "Frame-to-frame coherence for smooth video generation and animation.",
  },
  {
    title: "Latent Space Control",
    text: "Directly manipulate the underlying noise for surgical precision in edits.",
  },
];

const ChatSimulation = () => {
  const [step, setStep] = React.useState(0);
  const [statusIndex, setStatusIndex] = React.useState(0);
  const generationStatuses = React.useMemo(
    () => [
      { label: "Parsing lens grammar", color: "bg-sky-300" },
      { label: "Binding style memory", color: "bg-violet-300" },
      { label: "Diffusing latent core", color: "bg-amber-300" },
      { label: "Resolving final pixels", color: "bg-emerald-300" },
    ],
    []
  );
  const activeStatus = generationStatuses[statusIndex];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 5600);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (step !== 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setStatusIndex((current) => (current + 1) % generationStatuses.length);
    }, 1450);

    return () => window.clearInterval(timer);
  }, [generationStatuses.length, step]);

  return (
    <div className="flex h-full flex-col gap-4">
      <svg aria-hidden="true" className="absolute h-0 w-0">
        <filter id="generation-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 10 }}
          className="chat-bubble-user glass-suction ml-auto max-w-[88%] rounded-2xl px-4 py-3"
        >
          <span className="text-sm leading-relaxed text-white/90">
            A glass orchid greenhouse at night, rain on the lens, soft amber key
            light.
          </span>
        </motion.div>

        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="chat-bubble-ai flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3"
          >
            {step === 1 ? (
              <div className="generating-dots">
                <div className="generating-dot bg-white" />
                <div className="generating-dot bg-white" />
                <div className="generating-dot bg-white" />
              </div>
            ) : (
              <span className="text-[11px] font-bold text-white/70 uppercase">
                Neural synthesis
              </span>
            )}
          </motion.div>
        )}

        <div className="image-gen-container glass-card relative min-h-[280px] flex-1 overflow-hidden !border-white/15">
          <AnimatePresence mode="wait">
            {step === 2 && (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden bg-black/68 backdrop-blur-md"
              >
                <div className="generation-goo-field" aria-hidden="true">
                  <span className="generation-blob generation-blob-a" />
                  <span className="generation-blob generation-blob-b" />
                  <span className="generation-blob generation-blob-c" />
                  <span className="generation-blob generation-blob-d" />
                </div>
                <div className="generation-status-pill">
                  <motion.span
                    key={activeStatus.color}
                    className={`generation-status-dot ${activeStatus.color}`}
                    initial={{ scale: 0.45, opacity: 0, filter: "blur(6px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={activeStatus.label}
                      initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
                      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[10px] font-geist font-black uppercase text-white/58"
                    >
                      {activeStatus.label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="image"
                initial={{
                  opacity: 0,
                  scale: 1.12,
                  filter: "blur(24px)",
                  clipPath: "circle(8% at 50% 50%)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  clipPath: "circle(78% at 50% 50%)",
                }}
                transition={{ duration: 1.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/img/model-translucent-fabric-with-floral-accent.jpg"
                  alt="Generated floral portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                <motion.div
                  aria-hidden="true"
                  className="generation-reveal-gloss"
                  initial={{ opacity: 0.9, x: "-35%", scaleX: 0.8 }}
                  animate={{ opacity: 0, x: "42%", scaleX: 1.35 }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)] animate-pulse" />
                    <span className="text-[10px] font-geist font-black text-white uppercase">
                      Image ready
                    </span>
                  </div>
                  <span className="rounded-full border border-white/16 bg-black/50 px-2.5 py-1 text-[10px] font-geist font-bold text-white/70 backdrop-blur-md">
                    4K
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {!step && (
            <div className="flex h-full items-center justify-center text-[11px] font-geist font-bold uppercase text-white/10">
              Awaiting input
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-white/14 bg-white/5 p-2 px-3 backdrop-blur-md">
        <div className="flex h-10 flex-1 items-center bg-transparent text-[11px] text-white/40 font-geist font-medium">
          Ask Cosmos anything...
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black shadow-[0_8px_20px_rgba(255,255,255,0.2)]">
          <iconify-icon
            icon="solar:arrow-up-linear"
            class="iconify-center !h-5 !w-5"
          ></iconify-icon>
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <motion.section
      className="section-shell mt-12 sm:mt-16 md:mt-[4.5rem] relative"
      id="features"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-18%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <span className="section-kicker">Bento capabilities</span>
          <h2 className="section-title mt-4">System architecture.</h2>
        </div>
        <p className="section-copy lg:max-w-md">
          A modular grid designed for clarity. Every card represents a core
          capability, from character identity to lighting control.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-5">
        <div className="col-span-12 grid auto-rows-[minmax(250px,auto)] grid-cols-1 gap-4 md:grid-cols-8 md:gap-5 lg:col-span-8">
          <article className="bento-card glass-suction-panel relative min-h-[340px] overflow-hidden group md:col-span-5">
            <Image
              src="/img/side-view-man-portrait-digital-art.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 62vw, 41vw"
              className="object-cover opacity-[0.58] transition-all duration-700 group-hover:scale-105 group-hover:opacity-[0.72]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />
            <div className="flex h-full flex-col justify-between p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="icon-button">
                  <iconify-icon
                    icon="solar:shield-check-linear"
                    class="iconify-center"
                  ></iconify-icon>
                </span>
                <span className="section-kicker !bg-black/40 !backdrop-blur-xl">
                  Identity Lock
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-jakarta font-semibold text-white tracking-tight">
                  Reference consistency.
                </h3>
                <p className="text-sm text-white/50 font-geist max-w-xs leading-relaxed">
                  Maintain character and style identity across thousands of
                  variations with neural anchors.
                </p>
              </div>
            </div>
          </article>

          <article className="bento-card glass-suction-panel relative min-h-[340px] overflow-hidden group md:col-span-3">
            <Image
              src="/img/darkly-atmospheric-retail-environment-rendering.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 38vw, 25vw"
              className="object-cover opacity-[0.58] transition-all duration-700 group-hover:scale-105 group-hover:opacity-[0.72]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />
            <div className="flex h-full flex-col justify-between p-7">
              <span className="icon-button">
                <iconify-icon
                  icon="solar:sun-linear"
                  class="iconify-center"
                ></iconify-icon>
              </span>
              <h3 className="text-2xl font-jakarta font-semibold text-white leading-tight tracking-tight">
                Lighting <br />
                grammar.
              </h3>
            </div>
          </article>

          <article className="bento-card glass-suction-panel relative flex min-h-[300px] flex-col justify-between overflow-hidden p-6 md:col-span-3 md:p-7">
            <div className="absolute! -right-8 -top-8 h-40 w-40 bg-white/5 blur-3xl rounded-full" />
            <div>
              <span className="section-kicker !bg-white/10 !text-white/80">
                Workflow
              </span>
              <h3 className="mt-5 text-2xl font-jakarta font-semibold text-white tracking-tight">
                Creative loop.
              </h3>
            </div>
            <div className="mt-8 space-y-2.5 relative z-10">
              {["Prompt", "Preview", "Refine", "Export"].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-3 transition-all hover:bg-white/[0.08] hover:translate-x-1 cursor-default"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[9px] font-geist font-black text-black shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                    {index + 1}
                  </span>
                  <span className="text-[10px] font-geist font-black text-white/80 uppercase tracking-widest">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="bento-card glass-suction-panel relative flex min-h-[300px] flex-col justify-between overflow-hidden p-6 md:col-span-5 md:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.03),transparent_40%)]" />
            <div className="grid gap-4 sm:grid-cols-2 h-full relative z-10">
              {systemCards.slice(0, 2).map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 flex flex-col justify-between group hover:bg-white/[0.06] transition-colors cursor-default"
                >
                  <h4 className="text-lg font-jakarta font-semibold text-white leading-tight tracking-tight">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-[11px] leading-relaxed text-white/40 font-geist font-medium">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/8 flex items-center justify-between relative z-10">
              <p className="text-[10px] text-white/30 uppercase font-geist font-black tracking-[0.2em]">
                Validated Production Pipeline
              </p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <iconify-icon
                  icon="solar:verified-check-linear"
                  class="text-white/40 text-lg"
                ></iconify-icon>
              </div>
            </div>
          </article>
        </div>

        <article className="bento-card glass-suction-panel relative col-span-12 flex min-h-[660px] flex-col overflow-hidden p-6 sm:p-8 lg:col-span-4">
          <div className="absolute! -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[100px]" />
          <div className="mb-4 flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-3xl font-jakarta font-semibold text-white tracking-tight">
                Live generation.
              </h3>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-11 w-11 rounded-full border-2 border-black bg-white/10 backdrop-blur-md overflow-hidden shadow-2xl relative group"
                >
                  <img
                    src={`https://api.dicebear.com/9.x/glass/svg?seed=Cosmos${i}`}
                    alt=""
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 min-h-0 relative z-10">
            <ChatSimulation />
          </div>
        </article>
      </div>
    </motion.section>
  );
};

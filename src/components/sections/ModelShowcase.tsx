'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import 'iconify-icon';

const modelCards = [
  {
    title: 'Latent Core',
    text: 'Scene structure stays locked while lighting, lens and material choices iterate.',
    icon: 'solar:cpu-linear',
  },
  {
    title: 'Color Discipline',
    text: 'Wide gamut outputs keep skin, product surfaces and neon accents controlled.',
    icon: 'solar:palette-linear',
  },
  {
    title: 'Shot Memory',
    text: 'Reference-aware passes help preserve characters across sequences.',
    icon: 'solar:layers-minimalistic-linear',
  },
];

export const ModelShowcase = () => {
  return (
    <motion.section
      className="section-shell mt-12 sm:mt-16 md:mt-[4.5rem] relative"
      id="models"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-18%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="section-kicker">
            <iconify-icon icon="solar:stars-linear" class="iconify-center"></iconify-icon>
            Model system
          </span>
          <h2 className="section-title mt-4 max-w-3xl">A cinematic engine in clean bento blocks.</h2>
        </div>
        <p className="section-copy">
          Cosmos-gen-4 is framed as a compact production surface: architecture, visual controls and live metrics each live in their own readable card.
        </p>
      </div>

      <div className="bento-grid">
        <article className="bento-card col-span-12 flex flex-col p-5 sm:p-6 lg:col-span-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-geist font-semibold text-white/55">Neural Architecture</p>
              <h3 className="mt-1 text-2xl sm:text-3xl font-jakarta font-semibold text-white">175B visual prior</h3>
            </div>
            <span className="icon-button">
              <iconify-icon icon="solar:bolt-linear" class="iconify-center"></iconify-icon>
            </span>
          </div>

          <div className="model-sim-stage relative mt-6 min-h-[430px] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <Image
              src="/img/beauty-digital-art-through-immersive-experiences.jpg"
              alt="Neural visualization"
              fill
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover opacity-[0.34] mix-blend-screen"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,190,90,0.24),transparent_34%),linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />

            <div className="model-sim-grid absolute! inset-4 grid gap-3">
              <div className="model-sim-main rounded-2xl border border-white/12 bg-black/[0.6] p-3 backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-geist font-bold text-white/62">Latent Core</span>
                  <span className="text-xs font-geist text-white/42">Processing 8K tensors</span>
                </div>
                <div className="mt-4 grid gap-2">
                  {[72, 48, 84, 61].map((width, index) => (
                    <div key={index} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2">
                      <span className="live-signal-dot h-3 w-3 rounded-full bg-white/[0.45]" />
                      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
                        <motion.span
                          className="live-signal-bar block h-full rounded-full bg-white/[0.2]"
                          initial={false}
                          animate={{ width: `${width}%` }}
                          transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="model-sim-preview overflow-hidden rounded-2xl border border-white/12 bg-black/[0.46] backdrop-blur-xl">
                <Image
                  src="/img/abstract-portrait-with-light-effects.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 24vw"
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/12 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[10px] font-geist font-black uppercase text-white/48">Shot memory</p>
                  <div className="mt-2 grid grid-cols-3 gap-1.5">
                    {[78, 55, 91].map((value, index) => (
                      <span key={index} className="h-1.5 overflow-hidden rounded-full bg-white/[0.12]">
                        <motion.span
                          className="live-signal-bar block h-full rounded-full bg-white/55"
                          animate={{ width: `${value}%` }}
                          transition={{ delay: index * 0.12, duration: 0.8 }}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="model-sim-scope rounded-2xl border border-white/10 bg-black/[0.44] p-3 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-geist font-black uppercase text-white/46">Color scope</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" />
                </div>
                <div className="mt-3 grid grid-cols-6 items-end gap-1.5">
                  {[34, 62, 48, 82, 58, 74].map((height, index) => (
                    <motion.span
                      key={index}
                      className="rounded-full bg-white/28"
                      animate={{ height: [`${height * 0.6}%`, `${height}%`, `${height * 0.72}%`] }}
                      transition={{ duration: 2.6, delay: index * 0.11, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              </div>

              <div className="model-sim-metrics grid grid-cols-2 gap-3">
                <div className="mini-metric">
                  <strong>0.4s</strong>
                  <span>Inference</span>
                </div>
                <div className="mini-metric">
                  <strong>99.9%</strong>
                  <span>Adherence</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="bento-card col-span-12 lg:col-span-5 p-5 sm:p-6">
          <span className="section-kicker">Visual fidelity</span>
          <h3 className="mt-4 text-3xl sm:text-4xl font-jakarta font-semibold leading-tight text-white">
            Less spectacle, more signal.
          </h3>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/56 font-geist">
            The model section now behaves like a product card stack: one lead diagram, compact metrics and supporting capability cards.
          </p>

          <div className="mt-7 grid gap-3">
            {modelCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start gap-3">
                  <span className="icon-button icon-button-sm">
                    <iconify-icon icon={card.icon} class="iconify-center"></iconify-icon>
                  </span>
                  <div>
                    <h4 className="font-jakarta text-lg font-semibold text-white">{card.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-white/52 font-geist">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </motion.section>
  );
};

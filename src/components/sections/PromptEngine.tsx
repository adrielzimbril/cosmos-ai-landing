'use client';

import React from 'react';
import { motion } from 'motion/react';
import 'iconify-icon';

const promptTokens = ['wide lens', 'rim light', 'porcelain skin', 'rain glass', 'amber fog'];

export const PromptEngine = () => {
  return (
    <motion.section
      className="section-shell mt-12 sm:mt-16 md:mt-[4.5rem] relative"
      id="prompt-engine"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-18%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bento-grid">
        <article className="bento-card col-span-12 lg:col-span-5 p-5 sm:p-6">
          <span className="section-kicker">
            <iconify-icon icon="solar:pen-linear" class="iconify-center"></iconify-icon>
            Prompt engine
          </span>
          <h2 className="section-title mt-4 max-w-xl">Build the shot from small controls.</h2>
          <p className="section-copy mt-4">
            The prompt section is now a control surface instead of a wall of copy. Each card has one job: parse, weight, preview or refine.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="mini-metric">
              <strong>2.4ms</strong>
              <span>Token latency</span>
            </div>
            <div className="mini-metric">
              <strong>0.05%</strong>
              <span>Artifact rate</span>
            </div>
          </div>

          <a href="#" className="btn-premium btn-premium-glass mt-7 !normal-case">
            Try builder
            <iconify-icon icon="solar:arrow-right-linear" class="iconify-center"></iconify-icon>
          </a>
        </article>

        <article className="bento-card col-span-12 flex p-5 sm:p-6 lg:col-span-7">
          <div className="prompt-sim-shell flex min-h-[430px] w-full flex-col rounded-2xl border border-white/10 bg-black/[0.58] p-4 sm:p-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="icon-button icon-button-sm">
                <iconify-icon icon="solar:magic-stick-3-linear" class="iconify-center"></iconify-icon>
              </span>
              <div className="min-w-0">
                <p className="text-sm font-geist font-semibold text-white">Prompt analysis</p>
                <p className="truncate text-xs text-white/42 font-geist">cinematic portrait, glass reflections, controlled amber rim light</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {promptTokens.map((token) => (
                <span key={token} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-geist font-semibold text-white/64">
                  {token}
                </span>
              ))}
            </div>

            <div className="mt-5 grid flex-1 gap-3 md:grid-cols-[minmax(0,1fr)_220px]">
              <div className="prompt-sim-map rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-geist font-bold text-white/54">Semantic map</span>
                  <span className="text-xs font-geist text-white/38">Stable</span>
                </div>
                <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_150px]">
                  <div className="space-y-3">
                    {[88, 64, 76, 52, 69].map((width, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="live-signal-dot h-2 w-2 rounded-full bg-white/[0.42]" />
                        <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
                          <motion.span
                            className="live-signal-bar block h-full rounded-full bg-white/[0.18]"
                            initial={false}
                            animate={{ width: `${width}%` }}
                            transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="prompt-sim-preview relative min-h-32 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_36%_32%,rgba(255,255,255,0.32),transparent_18%),radial-gradient(circle_at_70%_52%,rgba(255,190,89,0.2),transparent_24%),linear-gradient(145deg,rgba(255,255,255,0.04),transparent)]" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-[10px] font-geist font-black uppercase text-white/46">Preview lock</p>
                      <div className="mt-2 flex gap-1.5">
                        {[1, 2, 3].map((item) => (
                          <span key={item} className="h-8 flex-1 rounded-lg border border-white/10 bg-white/[0.06]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {['Lens', 'Skin', 'Glass'].map((item, index) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <span className="text-[10px] font-geist font-black uppercase text-white/34">0{index + 1}</span>
                      <p className="mt-3 text-xs font-geist font-bold text-white/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="prompt-sim-weights rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <span className="text-xs font-geist font-bold text-white/54">Weights</span>
                <div className="mt-4 space-y-3">
                  {['Lens', 'Light', 'Texture'].map((label, index) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-xs font-geist text-white/46">
                        <span>{label}</span>
                        <span>{[78, 86, 62][index]}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                        <motion.div
                          className="live-signal-bar h-full rounded-full bg-white/[0.45]"
                          initial={false}
                          animate={{ width: `${[78, 86, 62][index]}%` }}
                          transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-geist font-black uppercase text-white/42">Conflict pass</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,.9)]" />
                  </div>
                  <div className="mt-4 space-y-2">
                    {['rain glass', 'amber fog', 'rim light'].map((item) => (
                      <div key={item} className="rounded-lg border border-white/8 bg-white/[0.035] px-2.5 py-2 text-[10px] font-geist font-bold text-white/52">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </motion.section>
  );
};

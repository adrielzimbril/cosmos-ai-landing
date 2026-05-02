'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'iconify-icon';
import { AnimatePresence, motion } from 'motion/react';

const slides = [
  {
    eyebrow: 'Cosmos-Gen-4',
    title: 'Forge cinematic',
    accent: 'worlds in motion',
    body: 'A production engine for spatially consistent images, controlled lighting, and fast iteration without muddy textures.',
    image: '/img/digital-art-style-portrait-adult-woman.jpg',
    metric: '0.4s',
    metricLabel: 'Inference speed',
    badge: '175B parameters',
    icon: 'solar:magic-stick-3-linear',
    control: 'Cinematic',
  },
  {
    eyebrow: 'Neural Upscale',
    title: 'Sharper motion',
    accent: 'native 8K depth',
    body: 'Keep skin, fabric, typography, and architecture readable while the model preserves composition across variations.',
    image: '/img/glow-glitter-portrait-beautiful-woman.jpg',
    metric: '8K',
    metricLabel: 'Lossless output',
    badge: 'Color locked',
    icon: 'solar:camera-linear',
    control: 'Upscale',
  },
  {
    eyebrow: 'Director Mode',
    title: 'Control the shot',
    accent: 'keep the atmosphere',
    body: 'Tune lens, light, pose, palette, and scene continuity from one responsive creative surface.',
    image: '/img/beauty-digital-art-through-immersive-experiences.jpg',
    metric: '99.9%',
    metricLabel: 'Prompt adherence',
    badge: 'Studio ready',
    icon: 'solar:play-bold',
    control: 'Director',
  },
];

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative section-shell pt-2 pb-6 overflow-hidden">
      <div className="relative min-h-[80dvh] max-h-[860px] rounded-3xl overflow-hidden border border-white/12 shadow-[0_30px_120px_rgba(0,0,0,0.55)] bg-black">
        <svg aria-hidden="true" className="absolute h-0 w-0">
          <filter id="hero-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>
        <div className="absolute inset-0 bg-[#090909]">
          {slides.map((item, index) => (
            <motion.div
              key={item.image}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: index === activeSlide ? 1 : 0,
                scale: index === activeSlide ? 1 : 1.045,
                filter: index === activeSlide ? 'blur(0px)' : 'blur(10px)',
              }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 768px) calc(100vw - 2rem), 1220px"
                preload={index === 0}
                loading={index === 0 ? undefined : 'eager'}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_34%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.62)_42%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/74 to-transparent" />
        <div className="absolute inset-0 hero-gooey-glass" />

        <div className="relative z-10 flex min-h-[80dvh] max-h-[860px] flex-col justify-end px-5 py-7 sm:px-10 sm:py-9 lg:px-14 lg:py-12">
          <div className="flex max-w-4xl flex-1 flex-col justify-end lg:justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slide.title}
                initial={false}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -18, scale: 1.015, filter: 'blur(18px)' }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="glass-pill glass-suction !px-4 !py-2 text-white">{slide.eyebrow}</span>
                  <span className="h-px w-14 bg-white/35" />
                  <span className="text-xs uppercase font-geist font-bold text-white/65">{slide.badge}</span>
                </div>

                <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl xl:text-[5.6rem] font-jakarta font-semibold leading-[0.95] text-white text-glow">
                  {slide.title}
                  <span className="block pt-1 font-playfair italic font-medium text-white/72">{slide.accent}</span>
                </h1>

                <p className="max-w-2xl text-base sm:text-lg text-white/76 font-geist leading-relaxed">
                  {slide.body}
                </p>

                <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center">
                  <button className="btn-premium btn-premium-glass hero-cta-button">
                    Start Manifesting
                    <iconify-icon icon="solar:magic-stick-3-linear" class="iconify-center"></iconify-icon>
                  </button>
                  <button className="btn-quiet hero-cta-button">
                    <iconify-icon icon="solar:play-bold" class="iconify-center"></iconify-icon>
                    View Narrative
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${slide.metric}-${slide.metricLabel}`}
                initial={false}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(10px)' }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="hero-inline-metric"
              >
                <iconify-icon icon={slide.icon} class="iconify-center"></iconify-icon>
                <strong>{slide.metric}</strong>
                <span>{slide.metricLabel}</span>
              </motion.div>
            </AnimatePresence>

            <div className="hero-slider-dots" aria-label="Hero slides">
              {slides.map((item, index) => (
                <button
                  key={item.eyebrow}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`hero-slider-dot ${index === activeSlide ? 'hero-slider-dot-active' : ''}`}
                  aria-label={`Show ${item.eyebrow}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                >
                  <span className="sr-only">{item.control}</span>
                  {index === activeSlide && (
                    <motion.span
                      className="hero-slider-progress"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 4.8, ease: 'linear' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import "iconify-icon";

const PLANS = [
  {
    name: "Nebula",
    price: "$0",
    cadence: "trial lane",
    description: "Explore the model and build first visual boards.",
    features: ["100 images / month", "Standard speed", "Community support"],
    cta: "Start free",
    stat: "100",
    statLabel: "renders",
  },
  {
    name: "Cosmos Pro",
    price: "$49",
    cadence: "per seat",
    description: "For creators shipping campaign and concept work.",
    features: ["Unlimited images", "Priority inference", "8K upscaling"],
    cta: "Get started",
    premium: true,
    stat: "8K",
    statLabel: "upscale",
  },
  {
    name: "Supernova",
    price: "Custom",
    cadence: "studio",
    description: "Studio infrastructure, API access and private workflows.",
    features: ["Custom models", "Dedicated GPU lane", "Enterprise security"],
    cta: "Contact sales",
    stat: "SLA",
    statLabel: "private",
  },
];

const PRICING_RUNS = [
  [
    { status: "Draft lane open", color: "bg-sky-300", values: ["34%", "18%", "42%"], packet: "24", route: "Basic queue" },
    { status: "Rendering preview", color: "bg-violet-300", values: ["48%", "26%", "54%"], packet: "68", route: "Shared GPU" },
    { status: "Export locked", color: "bg-emerald-300", values: ["42%", "28%", "61%"], packet: "100", route: "Standard delivery" },
  ],
  [
    { status: "Priority queue claimed", color: "bg-amber-300", values: ["72%", "54%", "78%"], packet: "8K", route: "Priority GPU" },
    { status: "Style memory attached", color: "bg-violet-300", values: ["82%", "68%", "86%"], packet: "24", route: "Campaign batch" },
    { status: "Upscale pass ready", color: "bg-emerald-300", values: ["78%", "64%", "91%"], packet: "8K", route: "Fast export" },
  ],
  [
    { status: "Private model mounted", color: "bg-emerald-300", values: ["88%", "90%", "86%"], packet: "SLA", route: "Studio lane" },
    { status: "Dedicated lane reserved", color: "bg-sky-300", values: ["96%", "92%", "98%"], packet: "API", route: "Dedicated GPU" },
    { status: "Compliance export sealed", color: "bg-amber-300", values: ["94%", "96%", "99%"], packet: "SLA", route: "Private export" },
  ],
];

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = React.useState(1);
  const [flowStep, setFlowStep] = React.useState(0);
  const activePlan = PLANS[selectedPlan];
  const activeRun = PRICING_RUNS[selectedPlan][flowStep];

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setFlowStep((current) => (current + 1) % PRICING_RUNS[selectedPlan].length);
    }, 1850);

    return () => window.clearInterval(timer);
  }, [selectedPlan]);

  return (
    <motion.section
      className="section-shell mt-12 sm:mt-16 md:mt-[4.5rem] relative"
      id="pricing"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-18%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <span className="section-kicker">Pricing</span>
          <h2 className="section-title mt-4 max-w-2xl">Pricing as a production bento.</h2>
        </div>
        <p className="section-copy lg:max-w-md">
          Compare render volume, delivery lane and team controls without breaking the compact visual rhythm of the page.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-12 lg:auto-rows-[210px]">
        <article className="bento-card glass-suction-panel overflow-hidden p-6 lg:col-span-5 lg:row-span-3">
          <svg aria-hidden="true" className="absolute h-0 w-0">
            <filter id="pricing-goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </svg>
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className="section-kicker !bg-white/10">Studio calculator</span>
              <h3 className="mt-5 text-3xl font-jakarta font-semibold leading-tight text-white">
                {activePlan.name} capacity preview.
              </h3>
              <p className="mt-4 max-w-sm text-sm font-geist leading-relaxed text-white/48">
                Click a plan to morph the queue, delivery lane and output profile.
              </p>
            </div>
            <div className="pricing-sim my-8 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="pricing-sim-stage">
                <motion.div
                  key={`${activePlan.name}-${flowStep}`}
                  className="pricing-goo-field"
                  initial={{ opacity: 0.4, scale: 0.88, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="pricing-goo-orb pricing-goo-orb-a" />
                  <span className="pricing-goo-orb pricing-goo-orb-b" />
                  <span className="pricing-goo-orb pricing-goo-orb-c" />
                  <motion.span
                    className="pricing-flow-packet"
                    initial={{ x: "-15%", opacity: 0, scale: 0.72, filter: "blur(8px)" }}
                    animate={{ x: "118%", opacity: [0, 1, 1, 0], scale: [0.72, 1, 1, 0.82], filter: "blur(0px)" }}
                    transition={{ duration: 1.75, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {activeRun.packet}
                  </motion.span>
                </motion.div>
                <motion.div
                  key={`${activeRun.status}-label`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="pricing-sim-chip"
                >
                  <span>{activeRun.packet}</span>
                  <small>{activeRun.route}</small>
                </motion.div>
                <div className="pricing-sim-status">
                  <motion.span
                    key={activeRun.color}
                    className={`pricing-sim-dot ${activeRun.color}`}
                    initial={{ scale: 0.45, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                  />
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={activeRun.status}
                      initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {activeRun.status}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {[
                ["Render queue", activeRun.values[0]],
                ["Private style memory", activeRun.values[1]],
                ["Priority delivery", activeRun.values[2]],
              ].map(([label, value], index) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-[11px] font-geist font-bold uppercase text-white/44">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                    <motion.div
                      className="live-signal-bar h-full rounded-full bg-white/45"
                      animate={{ width: value }}
                      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Draft", "Grade", "Ship"].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="text-[10px] font-geist font-black uppercase text-white/38">0{index + 1}</span>
                  <p className="mt-4 text-sm font-geist font-bold text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {PLANS.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onClick={() => {
              setSelectedPlan(index);
              setFlowStep(0);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedPlan(index);
                setFlowStep(0);
              }
            }}
            role="button"
            tabIndex={0}
            aria-pressed={selectedPlan === index}
            className={`bento-card pricing-plan-card p-5 sm:p-6 lg:col-span-7 ${selectedPlan === index ? "pricing-plan-active" : ""} ${plan.premium ? "pricing-plan-featured ring-1 ring-white/20" : ""}`}
          >
            <div className="grid h-full gap-5 md:grid-cols-[minmax(0,1fr)_220px] md:items-stretch">
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-geist font-bold uppercase text-white/62">{plan.name}</h3>
                  {plan.premium && <span className="section-kicker !py-1">Popular</span>}
                </div>
                <div className="mt-5">
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-jakarta font-semibold text-white">{plan.price}</span>
                    <span className="pb-1 text-xs font-geist font-bold uppercase text-white/38">{plan.cadence}</span>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/54 font-geist">{plan.description}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {plan.features.map((feature) => (
                    <span key={feature} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-geist font-semibold text-white/62">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div>
                  <span className="text-[10px] font-geist font-black uppercase text-white/38">{plan.statLabel}</span>
                  <p className="mt-2 text-3xl font-jakarta font-semibold text-white">{plan.stat}</p>
                </div>
                <a href="#" className={`mt-6 w-full ${plan.premium ? "btn-premium btn-premium-glass" : "btn-quiet"} !min-h-11 !normal-case`}>
                  {plan.cta}
                  <iconify-icon icon="solar:arrow-right-linear" class="iconify-center"></iconify-icon>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

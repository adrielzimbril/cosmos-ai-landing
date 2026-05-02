'use client';

import React from 'react';
import { cn } from "@/lib/utils";
import 'iconify-icon';
import { NoiseTexture } from "@/components/ui/noise-texture";

export const SmartSearch = () => {
  return (
    <section className="sm:px-6 sm:mt-24 md:mt-32 max-w-7xl mt-16 mx-auto px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Copy & stats */}
          <div className="flex flex-col justify-center">
            <div className="tech-content">
              <h3 className="sm:text-5xl transition-colors duration-500 text-4xl font-medium text-white tracking-tight font-jakarta text-glow">Intelligent search, powered by advanced AI models</h3>

              <div className="mt-12">
                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-lg font-semibold text-white mb-6 font-jakarta">Advanced Search Capabilities</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mt-0.5 border border-white/10">
                        <iconify-icon icon="solar:magnifer-linear" class="text-white/60 h-5 w-5"></iconify-icon>
                      </div>
                      <div>
                        <h5 className="font-medium text-white font-geist">Contextual Understanding</h5>
                        <p className="text-sm text-white/60 mt-1 font-geist leading-relaxed">AI understands your intent and delivers relevant results based on context, not just keywords.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mt-0.5 border border-white/10">
                        <iconify-icon icon="solar:filters-linear" class="text-white/60 h-5 w-5"></iconify-icon>
                      </div>
                      <div>
                        <h5 className="font-medium text-white font-geist">Smart Filtering</h5>
                        <p className="text-sm text-white/60 mt-1 font-geist leading-relaxed">Automatically filters and ranks results by relevance, recency, and reliability for faster information discovery.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-10 mt-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer items-center">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl tracking-tighter font-jakarta font-medium text-white">95%</span>
                    </div>
                    <p className="text-[10px] text-white/40 font-geist uppercase tracking-[0.2em] font-bold">Search accuracy</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl tracking-tighter font-jakarta font-medium text-white">5.8M</span>
                    </div>
                    <p className="text-[10px] text-white/40 font-geist uppercase tracking-[0.2em] font-bold">Daily Queries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <a href="#" className="btn-premium !bg-transparent !text-white border border-white/20 !px-10">
                Discover smart search
                <iconify-icon icon="solar:arrow-right-linear" class="h-4 w-4"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Diagram */}
          <div className="p-1 relative overflow-hidden squircle-card">
            <NoiseTexture
              className={cn(
                "absolute inset-0",
                "mask-[linear-gradient(#f8f8f8,white)] opacity-30"
              )}
            />
            <article className="relative h-full transition-shadow bg-black/40 border-white/5 border rounded-[2.8rem] overflow-hidden">
              <div className="sm:p-10 p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white font-jakarta">AI-Powered Search</h3>
                  <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-white/80 bg-white/5 border border-white/10 rounded-full px-2 sm:px-2.5 py-1 backdrop-blur-sm font-geist uppercase tracking-widest font-bold">
                    <iconify-icon icon="solar:stars-linear" class="text-white/40 h-3.5 w-3.5 sm:h-4 sm:w-4"></iconify-icon>
                    AI Enhanced
                  </span>
                </div>

                {/* Illustration */}
                <div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 ring-1 ring-inset ring-white/5 mb-8 backdrop-blur-sm">
                  {/* Search bar */}
                  <div className="absolute left-4 sm:left-6 top-4 sm:top-6 w-[85%] rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-sm">
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                      <iconify-icon icon="solar:magnifer-linear" class="text-white/40 h-4 w-4"></iconify-icon>
                      <div className="h-2 w-32 bg-white/20 rounded"></div>
                      <div className="ml-auto">
                        <iconify-icon icon="solar:stars-linear" class="text-white/40 h-3.5 w-3.5"></iconify-icon>
                      </div>
                    </div>
                    <div className="p-3 space-y-1.5">
                      <div className="text-[9px] sm:text-[10px] text-white/40 tracking-widest px-2 font-geist font-bold">SUGGESTED</div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5">
                        <iconify-icon icon="solar:history-linear" class="text-white/60 h-3 w-3"></iconify-icon>
                        <div className="h-1.5 w-24 bg-white/20 rounded"></div>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5">
                        <iconify-icon icon="solar:document-linear" class="text-white/60 h-3 w-3"></iconify-icon>
                        <div className="h-1.5 w-20 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Results panel */}
                  <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 w-[85%] rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-sm">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                      <span className="text-[10px] sm:text-xs tracking-widest text-white/60 font-geist uppercase font-bold">AI INSIGHTS</span>
                      <span className="text-[9px] sm:text-[10px] text-white/40 font-geist uppercase font-bold">LIVE</span>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-2">
                        <iconify-icon icon="solar:check-circle-linear" class="text-white/40 flex-shrink-0 mt-0.5 h-3.5 w-3.5"></iconify-icon>
                        <div className="flex-1 space-y-1">
                          <div className="h-1 w-full bg-white/10 rounded"></div>
                          <div className="h-1 w-3/4 bg-white/5 rounded"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-white/40 px-2 font-geist">
                        <iconify-icon icon="solar:chart-linear" class="text-white/30 h-2.5 w-2.5"></iconify-icon>
                        <span>Analyzing context...</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating suggestions */}
                  <div className="absolute right-4 sm:right-6 top-24 sm:top-28 w-[42%] rounded-xl bg-black/90 backdrop-blur border border-white/10 shadow-sm p-2">
                    <div className="text-[9px] sm:text-[10px] text-white/40 tracking-widest mb-1.5 font-geist uppercase font-bold">RELATED</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded px-1.5 py-1">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        <div className="h-1 w-16 bg-white/20 rounded"></div>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded px-1.5 py-1">
                        <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                        <div className="h-1 w-12 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white tracking-tight font-jakarta">Natural Language</h4>
                    <p className="mt-2 text-sm text-white/60 font-geist leading-relaxed">Search using everyday language and get precise results that understand your intent.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold tracking-tight text-white font-jakarta">Instant Answers</h4>
                    <p className="mt-2 text-sm text-white/60 font-geist leading-relaxed">Get direct answers and summaries without clicking through multiple search results.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

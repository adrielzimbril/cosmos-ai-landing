'use client';

import React from 'react';
import 'iconify-icon';

export const TabIntelligence = () => {
  return (
    <section className="sm:px-6 sm:mt-24 md:mt-32 max-w-7xl mt-16 mx-auto px-4 relative" id="browse">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Diagram */}
          <div 
            className="bg-white/5 rounded-[36px] p-5 relative border border-white/10 overflow-hidden" 
            style={{ 
              maskImage: 'linear-gradient(130deg, transparent, black 10%, black 70%, transparent)', 
              WebkitMaskImage: 'linear-gradient(130deg, transparent, black 10%, black 70%, transparent)' 
            }}
          >
            <article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-black/70 border-white/10 border rounded-3xl shadow-xl backdrop-blur-xl">
              <div className="sm:p-10 p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-semibold tracking-tight text-white font-jakarta">Smart Tab Management</h3>
                  <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-white/80 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 backdrop-blur-sm font-geist">
                    <iconify-icon icon="solar:stars-linear" class="text-lime-400 h-4 w-4"></iconify-icon>
                    AI Powered
                  </span>
                </div>

                {/* Illustration */}
                <div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 ring-1 ring-inset ring-white/5 mb-8 backdrop-blur-sm">
                  {/* Main browser window */}
                  <div className="absolute right-3 sm:right-6 top-4 sm:top-6 w-[78%] h-[68%] rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-sm">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-xs tracking-tight text-white/60 font-geist">12 tabs active</span>
                      </div>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 rounded-lg px-2 py-1.5">
                        <div className="w-3 h-3 bg-lime-400 rounded"></div>
                        <div className="flex-1">
                          <div className="h-1.5 w-20 bg-lime-400/40 rounded"></div>
                        </div>
                        <iconify-icon icon="solar:stars-linear" class="text-lime-400 h-3 w-3"></iconify-icon>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5">
                        <div className="w-3 h-3 bg-white/20 rounded"></div>
                        <div className="flex-1">
                          <div className="h-1.5 w-16 bg-white/20 rounded"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5">
                        <div className="w-3 h-3 bg-white/20 rounded"></div>
                        <div className="flex-1">
                          <div className="h-1.5 w-24 bg-white/20 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab groups sidebar */}
                  <div className="absolute left-6 sm:left-12 bottom-10 sm:bottom-12 w-[62%] h-[52%] rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-sm">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                      <span className="text-[10px] sm:text-xs tracking-widest text-white/60 font-geist">TAB GROUPS</span>
                    </div>
                    <div className="p-2 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs bg-blue-500/10 border border-blue-500/20 rounded px-2 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-white/80 font-geist">Work (5)</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs bg-purple-500/10 border border-purple-500/20 rounded px-2 py-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-white/80 font-geist">Research (3)</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs bg-orange-500/10 border border-orange-500/20 rounded px-2 py-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-white/80 font-geist">Shopping (4)</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile preview */}
                  <div className="absolute left-3 sm:left-6 bottom-3 sm:bottom-4 w-[38%] h-[44%] rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-sm">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                      <span className="text-[10px] sm:text-xs tracking-widest text-white/60 font-geist">SYNC</span>
                    </div>
                    <div className="p-2 space-y-2">
                      <div className="flex items-center gap-1.5">
                        <iconify-icon icon="solar:smartphone-linear" class="text-lime-400 h-3 w-3"></iconify-icon>
                        <div className="h-1 w-12 bg-lime-400/40 rounded"></div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <iconify-icon icon="solar:laptop-linear" class="text-white/40 h-3 w-3"></iconify-icon>
                        <div className="h-1 w-10 bg-white/20 rounded"></div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <iconify-icon icon="solar:monitor-linear" class="text-white/40 h-3 w-3"></iconify-icon>
                        <div className="h-1 w-14 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white tracking-tight font-jakarta">Auto-Organize</h4>
                    <p className="mt-2 text-sm text-white/60 font-geist">AI automatically groups related tabs by topic, project, or task for effortless organization.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold tracking-tight text-white font-jakarta">Cross-Device Sync</h4>
                    <p className="mt-2 text-sm text-white/60 font-geist">Access your tab groups instantly across all devices with seamless cloud synchronization.</p>
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-white/90 hover:text-white font-geist">
                    Explore tab features
                    <iconify-icon icon="solar:arrow-right-linear" class="h-4 w-4"></iconify-icon>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Copy & stats */}
          <div>
            <div className="tech-content" id="technology">
              <h3 className="sm:text-5xl transition-colors duration-500 text-4xl font-medium text-white tracking-tight font-jakarta">Revolutionary tab intelligence, built for productivity</h3>

              <div className="mt-8">
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4 font-jakarta">Core Intelligence Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center mt-0.5">
                        <iconify-icon icon="solar:cpu-linear" class="text-lime-400 w-4 h-4"></iconify-icon>
                      </div>
                      <div>
                        <h5 className="font-medium text-white font-geist">Intelligent Grouping</h5>
                        <p className="text-sm text-white/60 mt-1 font-geist">Machine learning analyzes content and context to automatically organize tabs into logical groups based on your workflow.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center mt-0.5">
                        <iconify-icon icon="solar:settings-linear" class="text-lime-400 w-4 h-4"></iconify-icon>
                      </div>
                      <div>
                        <h5 className="font-medium text-white font-geist">Memory Management</h5>
                        <p className="text-sm text-white/60 mt-1 font-geist">Automatic tab suspension frees up system resources while keeping your workspace intact for instant restoration.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-10 mt-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl tracking-tight font-jakarta font-medium text-white">89%</span>
                    </div>
                    <p className="text-xs text-white/60 font-geist uppercase tracking-wider">Faster tab switching</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl tracking-tight font-jakarta font-medium text-white">3.2M</span>
                    </div>
                    <p className="text-xs text-white/60 font-geist uppercase tracking-wider">Groups created daily</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-8">
              <a href="#" className="inline-flex items-center justify-center gap-2 h-10 hover:bg-lime-600/90 transition text-sm font-normal text-white bg-lime-600 rounded-full px-4 font-geist">
                Learn about tab management
                <iconify-icon icon="solar:arrow-right-linear" class="h-4 w-4"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

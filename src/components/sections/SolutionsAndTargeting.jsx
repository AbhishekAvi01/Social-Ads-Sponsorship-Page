// src/components/sections/SolutionsAndTargeting.jsx
import React, { useState, useMemo } from 'react';
import { Layers, Target, Eye, Sliders, Users, Coins, CheckCircle2 } from 'lucide-react';
import { adSolutions } from '../../data/mockData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const SolutionsAndTargeting = () => {
  // Local state handling the real-time targeting configuration simulation
  const [targeting, setTargeting] = useState({
    ageGroup: 'all',
    interest: 'all',
    spendingBehavior: 'all',
  });

  // Dynamic computation logic simulating backend audience calculation matrices
  const computedMetrics = useMemo(() => {
    let baselineReach = 2450000;
    let baselineMultiplier = 1.0;

    if (targeting.ageGroup !== 'all') baselineMultiplier *= 0.45;
    if (targeting.interest !== 'all') baselineMultiplier *= 0.35;
    if (targeting.spendingBehavior !== 'all') baselineMultiplier *= 0.60;

    const finalReach = Math.floor(baselineReach * baselineMultiplier);
    const estimatedDailyCoins = Math.floor((finalReach / 1000) * 0.85);

    return {
      estimatedReach: finalReach.toLocaleString(),
      requiredCoinAllocation: estimatedDailyCoins.toLocaleString(),
      matchIndex: Math.floor(baselineMultiplier * 100),
    };
  }, [targeting]);

  const handleFilterChange = (key, value) => {
    setTargeting((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="py-20 bg-[#F9FAFB] px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* SECTION A: ADVERTISING SOLUTIONS */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">
              Ecosystem Native Advertising Solutions
            </h2>
            <p className="text-base text-[#6B7280]">
              Deploy highly contextual marketing collateral natively embedded inside high-traffic consumer touchpoints across our distributed fintech application stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adSolutions.map((solution) => (
              <Card key={solution.id} className="flex flex-col justify-between h-full relative group">
                <div className="space-y-5 text-left">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-[#fef2f2] rounded-xl text-[#dc2626]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <Badge variant="premium">{solution.metric}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#dc2626] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <hr className="border-[#E5E7EB]" />

                  <ul className="space-y-2.5">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#111827]">
                        <CheckCircle2 className="w-4 h-4 text-[#ef4444] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* SECTION B: TARGETED ADVERTISING INTERACTIVE CONSOLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Controls Input Parameter Box */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm space-y-8 text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded-md text-xs font-semibold text-gray-700">
                <Sliders className="w-3.5 h-3.5 text-gray-500" /> Behavioral Matrices
              </div>
              <h3 className="text-2xl font-bold text-[#111827]">Precision Algorithmic Targeting</h3>
              <p className="text-sm text-[#6B7280]">
                Configure cross-referenced structural properties below to build optimal demographic cohorts instantly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Parameter 1 */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#111827] uppercase tracking-wider">Demographic Cohort</label>
                <select 
                  value={targeting.ageGroup}
                  onChange={(e) => handleFilterChange('ageGroup', e.target.value)}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] outline-none transition-all"
                >
                  <option value="all">Global Matrix (All Ages)</option>
                  <option value="genz">18 - 24 (Gen-Z Gaming Core)</option>
                  <option value="millennial">25 - 40 (Professional / Investors)</option>
                </select>
              </div>

              {/* Parameter 2 */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#111827] uppercase tracking-wider">Interest Index</label>
                <select 
                  value={targeting.interest}
                  onChange={(e) => handleFilterChange('interest', e.target.value)}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] outline-none transition-all"
                >
                  <option value="all">All Ecosystem Verticals</option>
                  <option value="gaming">Web3 Gaming & eSports</option>
                  <option value="finance">DeFi Lending & Micro-Transacting</option>
                  <option value="creator">Creator Economy / NFTs</option>
                </select>
              </div>

              {/* Parameter 3 */}
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold text-[#111827] uppercase tracking-wider">Coin Spending Profiles</label>
                <select 
                  value={targeting.spendingBehavior}
                  onChange={(e) => handleFilterChange('spendingBehavior', e.target.value)}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] outline-none transition-all"
                >
                  <option value="all">High & Low Velocity Wallets</option>
                  <option value="whales">Ecosystem Whales (&gt;5,000 Coins Trailed)</option>
                  <option value="frequent">High-Frequency Micro-Spenders</option>
                </select>
              </div>
            </div>
          </div>

          {/* Computed Dynamic Target Matrix Output Sidebar */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#111827] to-gray-900 rounded-2xl p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="relative z-10 space-y-6 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#ef4444]">Calculated Metrics</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-xs text-gray-300 font-mono">Live Sync</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-gray-400 block">Total Target Reach Pool</span>
                <div className="text-4xl font-black tracking-tight text-white font-mono">
                  {computedMetrics.estimatedReach} <span className="text-xs font-normal text-gray-400">Audience Profiles</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Target className="w-3.5 h-3.5 text-[#ef4444]" /> Match Accuracy
                  </div>
                  <p className="text-xl font-bold font-mono text-white">{computedMetrics.matchIndex}%</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Coins className="w-3.5 h-3.5 text-amber-400" /> Minimum Est. Cost
                  </div>
                  <p className="text-xl font-bold font-mono text-amber-400">{computedMetrics.requiredCoinAllocation} <span className="text-xs font-normal text-gray-400">/day</span></p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3 text-left">
                <Users className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
                <p className="text-xs text-gray-300 leading-relaxed">
                  Target pool shifts in real time relative to dynamic network wallet transactions and localized verified business KYC parameters.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
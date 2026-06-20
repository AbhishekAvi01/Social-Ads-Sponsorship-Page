// src/components/sections/CreatorAndWalletHub.jsx
import React from 'react';
import { ShieldAlert, CheckCircle2, Award, Wallet, Coins, ArrowUpRight, BarChart3, Users, MessageSquareCode } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const CreatorAndWalletHub = () => {
  const customVerificationSteps = [
    { title: 'Secure KYC Integration', desc: 'Attach and authorize cryptographic wallet ownership attributes.' },
    { title: 'Corporate Registry', desc: 'Provide verified business registration hashes or domain alignments.' },
    { title: 'Ecosystem Cleared', desc: 'Automated governance evaluation confirms baseline trust standards.' }
  ];

  const customMonetizationVectors = [
    { name: 'Sponsored Video Placement', yield: 'High Yield', scope: 'Creator Streams' },
    { name: 'Ecosystem Native Board Ad', yield: 'Scale Volume', scope: 'Marketplace/Feed' },
    { name: 'Seasonal Challenge Reward Pool', yield: 'Premium Retention', scope: 'Gaming Hub' }
  ];

  return (
    <section className="py-20 bg-[#F9FAFB] px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* SECTION A: VERIFIED SPONSOR & CREATOR ECOSYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Verification Progress Mapping Layout */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#111827] to-gray-900 rounded-2xl p-8 text-white flex flex-col justify-between text-left shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04]"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Verified Sponsor Badge Flow</span>
              </div>
              
              <h3 className="text-2xl font-black text-white tracking-tight">Ecosystem Trust Matrix</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Complete our tier-one authentication protocols to secure exclusive real estate slots, direct smart contract access, and highlighted status placement hooks.
              </p>

              {/* Functional Procedure Chain */}
              <div className="space-y-4 pt-4">
                {customVerificationSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-white/10 text-[#ef4444] border border-white/20 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{step.title}</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-8 relative z-10 w-full py-2.5 bg-[#dc2626] hover:bg-[#ef4444] text-white text-xs font-bold rounded-xl transition-all shadow-md">
              Initiate Corporate Authentication
            </button>
          </div>

          {/* Creator Marketplace Collaboration Space Grid */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#fef2f2] rounded-md text-xs font-semibold text-[#dc2626]">
                <MessageSquareCode className="w-3.5 h-3.5" /> Direct Workspace Hub
              </div>
              <h3 className="text-2xl font-bold text-[#111827]">Creator Collaboration Hub</h3>
              <p className="text-sm text-[#6B7280]">
                Deploy marketing assignments and monitor delivery cycles via escrow-protected clearing systems seamlessly.
              </p>
            </div>

            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs whitespace-nowrap">
                  <thead>
                    <tr className="bg-gray-100 border-b border-[#E5E7EB] font-bold text-[#6B7280] uppercase tracking-wider">
                      <th className="px-4 py-3">Integration Matrix Title</th>
                      <th className="px-4 py-3">Clearance Classification</th>
                      <th className="px-4 py-3 text-right">Ecosystem Yield Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB] text-[#111827]">
                    {customMonetizationVectors.map((item, index) => (
                      <tr key={index} className="hover:bg-white transition-colors">
                        <td className="px-4 py-3.5 font-semibold">{item.name}</td>
                        <td className="px-4 py-3.5 text-gray-500">{item.scope}</td>
                        <td className="px-4 py-3.5 text-right font-bold text-emerald-600 font-mono">{item.yield}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION B: E-RUPAI COIN TRANSACTION ENGINE SYSTEM */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent pointer-events-none rounded-bl-full"></div>
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-md text-xs font-semibold text-amber-700">
              <Coins className="w-3.5 h-3.5" /> Ledger Settlement Protocol
            </div>
            <h3 className="text-2xl font-bold text-[#111827]">Native E-Rupai Coin Settlement Utility</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-2xl">
              Execute transactions using local ecosystem utilities to access a baseline **10% premium space markdown**, zero platform processing overheads, and immediate priority display pool deployment clearances.
            </p>
          </div>

          {/* Interactive Simulated Balance Console Card */}
          <div className="lg:col-span-5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white border border-gray-200 rounded-lg text-amber-500"><Wallet className="w-4 h-4" /></div>
                <span className="text-xs font-bold text-[#6B7280]">Ecosystem Wallet Ledger</span>
              </div>
              <Badge variant="active">Node Secure</Badge>
            </div>
            
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider block">Available Liquid Stakes</span>
              <p className="text-3xl font-black text-[#111827] font-mono tracking-tight">42,850.00 <span className="text-xs font-semibold text-gray-500">ERC</span></p>
            </div>

            <div className="pt-2 border-t border-gray-200 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-500 block">Active Allocations:</span>
                <span className="font-bold text-[#111827] font-mono">11,500 ERC</span>
              </div>
              <div>
                <span className="text-gray-500 block">Accumulated Boost Matrix:</span>
                <span className="font-bold text-emerald-600 font-mono">+4,250 ERC</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
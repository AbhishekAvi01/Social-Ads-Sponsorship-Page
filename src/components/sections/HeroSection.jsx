import React from 'react';
import { ArrowRight, ShieldCheck, BarChart3, Rocket } from 'lucide-react';
import { statsData } from '../../data/mockData';
import { Card } from '../common/Card';

export const HeroSection = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fef2f2] via-[#F9FAFB] to-[#F9FAFB] pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></span>
              <span className="text-xs font-semibold text-[#111827]">E-Rupai Native Ad Network v2.0</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-none">
              Grow Your Reach with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#ef4444]">
                E-Rupai Ads
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl leading-relaxed">
              Promote your brand, products, services, events, and campaigns across the high-frequency E-Rupai ecosystem and connect with thousands of active wallet holders globally.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => onNavigate('create')}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-[#dc2626] hover:bg-[#ef4444] transition-all duration-150 shadow-sm shadow-[#dc2626]/10 hover:shadow-lg cursor-pointer"
              >
                Create Campaign
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('marketplace')}
                className="inline-flex items-center justify-center px-6 py-3 border border-[#E5E7EB] text-sm font-bold rounded-xl text-[#111827] bg-white hover:bg-gray-50 transition-all duration-150 cursor-pointer shadow-sm"
              >
                Become a Sponsor
              </button>
              <button 
                onClick={() => onNavigate('pricing')}
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-[#6B7280] hover:text-[#111827] transition-all cursor-pointer hover:underline"
              >
                View Pricing
              </button>
            </div>
          </div>

        
          <div className="lg:col-span-5">
            <div className="relative p-8 bg-white border border-[#E5E7EB] shadow-xl rounded-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Rocket className="w-40 h-40 text-[#dc2626]" />
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-[#111827] tracking-wider uppercase">Live Delivery Stream</span>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Core Verified
                </span>
              </div>

             
              <div className="space-y-4">
                <div className="p-4 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
                  <div className="flex justify-between items-center text-xs text-[#6B7280] mb-2">
                    <span>E-Rupai Coin Pool Conversion</span>
                    <span className="font-semibold text-emerald-600">+4.8% CTR</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#dc2626] to-[#ef4444] rounded-full w-[78%]"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 border border-dashed border-gray-200 rounded-lg text-left">
                    <p className="text-xs text-[#6B7280]">Token Burn Return</p>
                    <p className="text-lg font-bold text-[#111827]">14,250 ERC</p>
                  </div>
                  <div className="p-3 border border-dashed border-gray-200 rounded-lg text-left">
                    <p className="text-xs text-[#6B7280]">Active Placements</p>
                    <p className="text-lg font-bold text-[#111827]">389 Blocks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {statsData.map((stat) => (
            <Card key={stat.id} className="text-left relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#dc2626] opacity-0 group-hover:opacity-100 transition-all duration-200" />
              <p className="text-sm font-medium text-[#6B7280]">{stat.label}</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-extrabold text-[#111827] tracking-tight">{stat.value}</span>
                <span className="text-xs font-semibold text-emerald-600">{stat.change}</span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
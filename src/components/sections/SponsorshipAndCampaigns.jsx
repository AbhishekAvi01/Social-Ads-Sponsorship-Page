// src/components/sections/SponsorshipAndCampaigns.jsx
import React, { useState } from 'react';
import { Calendar, Users, Award, Check, TrendingUp, Sparkles, Target, Zap } from 'lucide-react';
import { campaignTypes } from '../../data/mockData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const SponsorshipAndCampaigns = () => {
  // Navigation tab state for dynamic sponsorship tracking
  const [activeTab, setActiveTab] = useState('events');
  // State tracking targeted campaign type selection configuration
  const [selectedCampaign, setSelectedCampaign] = useState('camp-awareness');

  const structuralEvents = [
    { id: 'ev-1', title: 'E-Rupai Ultimate Gaming Cup', cat: 'Gaming Tournaments', cost: '12,500 Coins', reach: '450k+ Live Viewers', slots: '2 / 5 Slots Left', variant: 'danger' },
    { id: 'ev-2', title: 'National Web3 Developer Summit', cat: 'Community Events', cost: '8,000 Coins', reach: '120k Developers', slots: 'Fully Allocated', variant: 'gray' },
    { id: 'ev-3', title: 'Ecosystem Loyalty Reward Drop', cat: 'Reward Challenges', cost: '25,000 Coins', reach: '1.2M Wallet Addrs', slots: '1 Slot Open', variant: 'premium' }
  ];

  const structuralCreators = [
    { id: 'cr-1', name: 'Alpha Streamer (Gaming Core)', followers: '340k Vods', engagement: '8.4%', rate: '3,200 Coins / Hr' },
    { id: 'cr-2', name: 'TechFinance Insights Hub', followers: '190k Sub', engagement: '12.1%', rate: '5,500 Coins / Collab' },
    { id: 'cr-3', name: 'Crypto Kestrel (Ecosystem Dev)', followers: '85k Devs', engagement: '6.8%', rate: '2,100 Coins / Space' }
  ];

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* SECTION A: SPONSORSHIP HUB */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">
                Premium Sponsorship Ecosystem
              </h2>
              <p className="text-base text-[#6B7280] max-w-2xl">
                Secure high-impact direct ecosystem integrations or align your brand values directly with certified platform content creators.
              </p>
            </div>
            
            {/* Custom Action Segment Controls */}
            <div className="flex bg-[#F9FAFB] border border-[#E5E7EB] p-1.5 rounded-xl self-start md:self-auto">
              <button 
                onClick={() => setActiveTab('events')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'events' ? 'bg-white text-[#111827] shadow-sm' : 'text-[#6B7280] hover:text-[#111827]'}`}
              >
                Ecosystem Events
              </button>
              <button 
                onClick={() => setActiveTab('creators')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'creators' ? 'bg-white text-[#111827] shadow-sm' : 'text-[#6B7280] hover:text-[#111827]'}`}
              >
                Creator Network
              </button>
            </div>
          </div>

          {/* Dynamic Tab Panel Switching Render Output */}
          {activeTab === 'events' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {structuralEvents.map((event) => (
                <Card key={event.id} className="relative flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant={event.variant}>{event.cat}</Badge>
                      <span className="text-xs font-semibold text-[#6B7280] font-mono">{event.slots}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#dc2626] transition-colors">
                      {event.title}
                    </h3>
                    <div className="pt-2 space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-[#6B7280]">Expected Reach:</span><span className="font-bold text-[#111827]">{event.reach}</span></div>
                      <div className="flex justify-between"><span className="text-[#6B7280]">Allocation Commitment:</span><span className="font-bold text-[#dc2626] font-mono">{event.cost}</span></div>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-2.5 px-4 bg-[#F9FAFB] hover:bg-[#fef2f2] text-[#111827] hover:text-[#dc2626] border border-[#E5E7EB] rounded-xl text-sm font-semibold transition-all">
                    Apply For Slot
                  </button>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {structuralCreators.map((creator) => (
                <Card key={creator.id} className="relative flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-[#dc2626]">
                        {creator.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-sm">{creator.name}</h4>
                        <span className="text-xs text-[#6B7280]">{creator.followers} Network</span>
                      </div>
                    </div>
                    <div className="pt-2 space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-[#6B7280]">Verified Engagement:</span><span className="font-bold text-emerald-600 font-mono">{creator.engagement}</span></div>
                      <div className="flex justify-between"><span className="text-[#6B7280]">Sponsorship Rate:</span><span className="font-bold text-[#111827] font-mono">{creator.rate}</span></div>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-2.5 px-4 bg-[#F9FAFB] hover:bg-[#fef2f2] text-[#111827] hover:text-[#dc2626] border border-[#E5E7EB] rounded-xl text-sm font-semibold transition-all">
                    Initiate Contract Offer
                  </button>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* SECTION B: INTERACTIVE CAMPAIGN SELECTION GRID */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">
              Select Strategic Campaign Matrix
            </h2>
            <p className="text-base text-[#6B7280]">
              Pick your primary distribution target matrix model setup. Every campaign type scales natively relative to actual real-world analytics goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {campaignTypes.map((type) => {
              const isSelected = selectedCampaign === type.id;
              return (
                <div
                  key={type.id}
                  onClick={() => setSelectedCampaign(type.id)}
                  className={`cursor-pointer rounded-2xl p-5 border text-left transition-all relative flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-gradient-to-b from-white to-[#fef2f2] border-[#dc2626] shadow-md ring-1 ring-[#dc2626]' 
                      : 'bg-white border-[#E5E7EB] hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#dc2626] text-white' : 'bg-[#F9FAFB] text-[#6B7280]'}`}>
                        <Target className="w-4 h-4" />
                      </div>
                      {isSelected && (
                        <span className="p-0.5 rounded-full bg-[#dc2626] text-white">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#111827]">{type.title}</h4>
                      <p className="text-xs text-[#6B7280] mt-1 leading-relaxed line-clamp-3">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-100 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider block">Est. Yield Profile</span>
                    <span className="text-xs font-bold text-[#111827] font-mono">{type.estReach}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Meta-Detail Block */}
          <div className="p-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
            <div className="flex gap-3 items-start">
              <div className="p-3 bg-white border border-[#E5E7EB] rounded-xl text-amber-500 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-[#111827] text-sm">Deployment Best Use Case Advice</h5>
                <p className="text-xs text-[#6B7280] mt-0.5 max-w-3xl">
                  {campaignTypes.find(c => c.id === selectedCampaign)?.bestFor}
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap px-5 py-2.5 bg-[#111827] hover:bg-gray-800 text-white text-xs font-bold rounded-xl shadow transition-all">
              Initialize Blueprint
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
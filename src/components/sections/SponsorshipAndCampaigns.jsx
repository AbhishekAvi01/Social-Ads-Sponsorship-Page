import React, { useState } from 'react';
import { Calendar, Users, Award, Check, TrendingUp, Sparkles, Target, Zap, X, ShieldAlert, Coins, Plus, Settings } from 'lucide-react';
import { campaignTypes } from '../../data/mockData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const SponsorshipAndCampaigns = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [selectedCampaign, setSelectedCampaign] = useState('camp-awareness');


  const [eventsData, setEventsData] = useState([
    { id: 'ev-1', title: 'E-Rupai Ultimate Gaming Cup', cat: 'Gaming Tournaments', cost: 12500, reach: '450k+ Live Viewers', maxSlots: 5, allocatedSlots: 3, variant: 'danger' },
    { id: 'ev-2', title: 'National Web3 Developer Summit', cat: 'Community Events', cost: 8000, reach: '120k Developers', maxSlots: 4, allocatedSlots: 4, variant: 'gray' },
    { id: 'ev-3', title: 'Ecosystem Loyalty Reward Drop', cat: 'Reward Challenges', cost: 25000, reach: '1.2M Wallet Addrs', maxSlots: 3, allocatedSlots: 2, variant: 'premium' }
  ]);

  const [creatorsData, setCreatorsData] = useState([
    { id: 'cr-1', name: 'Alpha Streamer (Gaming Core)', followers: '340k Vods', engagement: '8.4%', rate: '3,200 Coins / Hr', requested: false },
    { id: 'cr-2', name: 'TechFinance Insights Hub', followers: '190k Sub', engagement: '12.1%', rate: '5,500 Coins / Collab', requested: false },
    { id: 'cr-3', name: 'Crypto Kestrel (Ecosystem Dev)', followers: '85k Devs', engagement: '6.8%', rate: '2,100 Coins / Space', requested: false }
  ]);

  const [selectedApplicationItem, setSelectedApplicationItem] = useState(null);
  const [isSubmittingApp, setIsSubmittingApp] = useState(false);
  const [appSubmissionSuccess, setAppSubmissionSuccess] = useState(false);

  const [activeCampaignWizard, setActiveCampaignWizard] = useState(null);
  const [wizardBudget, setWizardBudget] = useState(5000);
  const [wizardAssetUrl, setWizardAssetUrl] = useState('');
  const [isDeployingBlueprint, setIsDeployingBlueprint] = useState(false);
  const [blueprintSuccessMessage, setBlueprintSuccessMessage] = useState('');

  const handleOpenApplicationModal = (item, type) => {
    setSelectedApplicationItem({ ...item, appType: type });
    setAppSubmissionSuccess(false);
    setIsSubmittingApp(false);
  };

  const executeApplicationWorkflow = () => {
    setIsSubmittingApp(true);
    setTimeout(() => {
      setIsSubmittingApp(false);
      setAppSubmissionSuccess(true);

      if (selectedApplicationItem.appType === 'event') {
        setEventsData(prev => prev.map(ev => 
          ev.id === selectedApplicationItem.id ? { ...ev, allocatedSlots: ev.allocatedSlots + 1 } : ev
        ));
      } else if (selectedApplicationItem.appType === 'creator') {
        setCreatorsData(prev => prev.map(cr =>
          cr.id === selectedApplicationItem.id ? { ...cr, requested: true } : cr
        ));
      }
    }, 1200);
  };


  const handleOpenCampaignWizard = () => {
    const currentActiveBlueprint = campaignTypes.find(c => c.id === selectedCampaign);
    if (currentActiveBlueprint) {
      setActiveCampaignWizard(currentActiveBlueprint);
      setWizardBudget(5000);
      setWizardAssetUrl('');
      setBlueprintSuccessMessage('');
      setIsDeployingBlueprint(false);
    }
  };

  const handleDeployCampaignBlueprint = (e) => {
    e.preventDefault();
    setIsDeployingBlueprint(true);
    setTimeout(() => {
      setIsDeployingBlueprint(false);
      setBlueprintSuccessMessage(`Successfully deployed ${activeCampaignWizard.title} engine into the ledger configuration pipelines!`);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto space-y-24">
        
  
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
            
            <div className="flex bg-[#F9FAFB] border border-[#E5E7EB] p-1.5 rounded-xl self-start md:self-auto">
              <button 
                onClick={() => setActiveTab('events')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${activeTab === 'events' ? 'bg-white text-[#111827] shadow-sm' : 'text-[#6B7280] hover:text-[#111827]'}`}
              >
                Ecosystem Events
              </button>
              <button 
                onClick={() => setActiveTab('creators')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${activeTab === 'creators' ? 'bg-white text-[#111827] shadow-sm' : 'text-[#6B7280] hover:text-[#111827]'}`}
              >
                Creator Network
              </button>
            </div>
          </div>

          {activeTab === 'events' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {eventsData.map((event) => {
                const slotsRemaining = event.maxSlots - event.allocatedSlots;
                const isFullyAllocated = slotsRemaining <= 0;
                
                return (
                  <Card key={event.id} className="relative flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant={event.variant}>{event.cat}</Badge>
                        <span className="text-xs font-bold text-[#6B7280] font-mono">
                          {isFullyAllocated ? 'Fully Allocated' : `${slotsRemaining} / ${event.maxSlots} Slots Left`}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#dc2626] transition-colors">
                        {event.title}
                      </h3>
                      <div className="pt-2 space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-[#6B7280]">Expected Reach:</span><span className="font-bold text-[#111827]">{event.reach}</span></div>
                        <div className="flex justify-between"><span className="text-[#6B7280]">Allocation Commitment:</span><span className="font-bold text-[#dc2626] font-mono">{event.cost.toLocaleString()} Coins</span></div>
                      </div>
                    </div>
                    <button 
                      disabled={isFullyAllocated}
                      onClick={() => handleOpenApplicationModal(event, 'event')}
                      className={`mt-6 w-full py-2.5 px-4 text-sm font-bold border rounded-xl transition-all cursor-pointer text-center ${
                        isFullyAllocated 
                          ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                          : 'bg-[#F9FAFB] hover:bg-[#fef2f2] text-[#111827] hover:text-[#dc2626] border-[#E5E7EB]'
                      }`}
                    >
                      {isFullyAllocated ? 'Allocation Closed' : 'Apply For Slot'}
                    </button>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {creatorsData.map((creator) => (
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
                  <button 
                    disabled={creator.requested}
                    onClick={() => handleOpenApplicationModal(creator, 'creator')}
                    className={`mt-6 w-full py-2.5 px-4 text-sm font-bold border rounded-xl transition-all cursor-pointer text-center ${
                      creator.requested
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100 cursor-not-allowed flex items-center justify-center gap-1.5'
                        : 'bg-[#F9FAFB] hover:bg-[#fef2f2] text-[#111827] hover:text-[#dc2626] border-[#E5E7EB]'
                    }`}
                  >
                    {creator.requested ? (
                      <>
                        <Check className="w-4 h-4" /> Contract Initiated
                      </>
                    ) : (
                      'Initiate Contract Offer'
                    )}
                  </button>
                </Card>
              ))}
            </div>
          )}
        </div>

       
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">
              Select Strategic Campaign Matrix
            </h2>
            <p className="text-base text-[#6B7280]">
              Pick your primary distribution target matrix model setup. Every campaign type scales natively relative to actual real-world analytics goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                        <span className="p-0.5 rounded-full bg-[#dc2626] text-white flex items-center justify-center">
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

          
          <div className="p-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
            <div className="flex gap-3 items-start">
              <div className="p-3 bg-white border border-[#E5E7EB] rounded-xl text-amber-500 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-[#111827]">Deployment Best Use Case Advice</h5>
                <p className="text-xs text-[#6B7280] mt-0.5 max-w-3xl">
                  {campaignTypes.find(c => c.id === selectedCampaign)?.bestFor}
                </p>
              </div>
            </div>
            <button 
              onClick={handleOpenCampaignWizard}
              className="whitespace-nowrap px-6 py-2.5 bg-[#111827] hover:bg-gray-800 text-white text-xs font-bold rounded-xl shadow transition-all cursor-pointer"
            >
              Initialize Blueprint
            </button>
          </div>
        </div>

      </div>

      {selectedApplicationItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white border border-[#E5E7EB] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative text-left p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="text-lg font-bold text-[#111827]">
                {selectedApplicationItem.appType === 'event' ? 'Request Slot Reservation' : 'Submit Sponsorship Deal'}
              </h3>
              <button onClick={() => setSelectedApplicationItem(null)} className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            {!appSubmissionSuccess ? (
              <>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Target Integration Node</span>
                  <h4 className="text-lg font-black text-[#111827]">{selectedApplicationItem.title || selectedApplicationItem.name}</h4>
                </div>
                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl space-y-2.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6B7280]">Ecosystem Reach Weight:</span>
                    <span className="font-bold text-[#111827]">{selectedApplicationItem.reach || selectedApplicationItem.followers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#6B7280]">Required Escrow Stakes:</span>
                    <span className="font-mono font-bold text-amber-600 flex items-center gap-1">
                      <Coins className="w-3.5 h-3.5" />
                      {selectedApplicationItem.cost ? `${selectedApplicationItem.cost.toLocaleString()} ERC` : selectedApplicationItem.rate}
                    </span>
                  </div>
                </div>
                <button onClick={executeApplicationWorkflow} disabled={isSubmittingApp} className="w-full py-3 bg-[#dc2626] hover:bg-[#ef4444] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:bg-gray-400">
                  {isSubmittingApp ? 'Broadcasting Governance Request...' : 'Settle Escrow & Submit'}
                </button>
              </>
            ) : (
              <div className="text-center py-4 space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-xl shadow-sm"><Check className="w-5 h-5" /></div>
                <h4 className="text-base font-bold text-[#111827]">Application Vault Locked!</h4>
                <button onClick={() => setSelectedApplicationItem(null)} className="px-6 py-2 bg-[#111827] text-white text-xs font-bold rounded-xl cursor-pointer">Dismiss Console</button>
              </div>
            )}
          </div>
        </div>
      )}

     
      {activeCampaignWizard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white border border-[#E5E7EB] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative text-left p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#dc2626]" />
                <h3 className="text-lg font-bold text-[#111827]">Campaign Builder Wizard</h3>
              </div>
              <button 
                onClick={() => setActiveCampaignWizard(null)}
                className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!blueprintSuccessMessage ? (
              <form onSubmit={handleDeployCampaignBlueprint} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Selected Core Objective</span>
                  <h4 className="text-xl font-black text-[#111827] mt-0.5">{activeCampaignWizard.title}</h4>
                  <p className="text-xs text-[#6B7280] mt-1">{activeCampaignWizard.description}</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Target Destination URL / dApp URI</label>
                    <input 
                      type="url" 
                      required
                      placeholder="https://e-rupai.coin/marketplace/utility"
                      value={wizardAssetUrl}
                      onChange={(e) => setWizardAssetUrl(e.target.value)}
                      className="w-full text-xs text-[#111827] bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none focus:border-[#dc2626] transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Maximum Allocation Limit</label>
                      <span className="text-xs font-mono font-bold text-[#dc2626]">{wizardBudget.toLocaleString()} ERC</span>
                    </div>
                    <input 
                      type="range"
                      min="500"
                      max="50000"
                      step="500"
                      value={wizardBudget}
                      onChange={(e) => setWizardBudget(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#dc2626]"
                    />
                    <div className="flex justify-between text-[10px] font-semibold text-gray-400 font-mono">
                      <span>500 ERC</span>
                      <span>25,000 ERC</span>
                      <span>50,000 ERC</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-gray-50 border border-[#E5E7EB] rounded-xl flex justify-between items-center text-xs">
                  <span className="text-[#6B7280]">Est. Conversion Metric Weight:</span>
                  <span className="font-bold text-emerald-600 font-mono">
                    ~{Math.floor(wizardBudget * 14.5).toLocaleString()} Impressions
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isDeployingBlueprint}
                  className="w-full py-3 bg-[#111827] hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 disabled:bg-gray-400"
                >
                  {isDeployingBlueprint ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Compiling Distribution Blueprint...
                    </>
                  ) : (
                    'Deploy Blueprint Network'
                  )}
                </button>
              </form>
            ) : (
             
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-black text-[#111827]">Engine Optimization Online</h4>
                  <p className="text-xs text-[#6B7280] max-w-sm mx-auto leading-relaxed">
                    {blueprintSuccessMessage} Check the **Campaign Performance Analytics Table Desk** below to audit dynamic conversion graphs live.
                  </p>
                </div>
                <button
                  onClick={() => setActiveCampaignWizard(null)}
                  className="px-6 py-2.5 bg-[#111827] text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
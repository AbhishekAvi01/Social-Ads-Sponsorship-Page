import React, { useState, useMemo } from 'react';
import { Check, Search, ArrowRight, Coins, Calendar, HelpCircle, ShieldCheck, X } from 'lucide-react';
import { pricingPlans } from '../../data/mockData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const PricingAndMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedCheckoutPlan, setSelectedCheckoutPlan] = useState(null);
  const [checkoutCurrency, setCheckoutCurrency] = useState('fiat');
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const structuralMarketplaceOpportunities = [
    { id: 'opp-1', title: 'Metaverse eSports Championship 2026', cat: 'Gaming', cost: '14,000 Coins', reach: '500k+ Reach', duration: '30 Days', roi: '+165% Est ROI' },
    { id: 'opp-2', title: 'DeFi Summer Liquidity Gala Promo', cat: 'Finance', cost: '9,500 Coins', reach: '180k+ Investors', duration: '14 Days', roi: '+120% Est ROI' },
    { id: 'opp-3', title: 'Global Web3 Retail Voucher Distribution', cat: 'E-Commerce', cost: '22,000 Coins', reach: '1.5M Buyers', duration: '45 Days', roi: '+210% Est ROI' },
    { id: 'opp-4', title: 'Tech Edu Stream Hackathon Bundle', cat: 'Education', cost: '4,200 Coins', reach: '45k Engineers', duration: '7 Days', roi: '+95% Est ROI' },
    { id: 'opp-5', title: 'Decentralized Film Festival Stream', cat: 'Entertainment', cost: '11,000 Coins', reach: '300k+ Audience', duration: '21 Days', roi: '+140% Est ROI' }
  ];

  const categoriesList = ['All', 'Gaming', 'Finance', 'E-Commerce', 'Education', 'Entertainment'];

  const filteredOpportunities = useMemo(() => {
    return structuralMarketplaceOpportunities.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.cat === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenCheckout = (plan) => {
    setSelectedCheckoutPlan(plan);
    setCheckoutCurrency(plan.computedFiat === 'Custom Node' ? 'coin' : 'fiat');
    setTransactionSuccess(false);
    setIsProcessingCheckout(false);
  };

  const executeSimulatedTransaction = () => {
    setIsProcessingCheckout(true);
    setTimeout(() => {
      setIsProcessingCheckout(false);
      setTransactionSuccess(true);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto space-y-28">
        
   
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">Ecosystem Subscription Plans</h2>
            <p className="text-sm text-[#6B7280]">
              Unlock higher-tier targeting heuristics, lower clearing gas overheads, and prioritized placement arrays across our network. Settle natively using E-Rupai Coins for maximum discount value.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] p-1 rounded-xl mt-4">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${billingCycle === 'monthly' ? 'bg-white text-[#111827] shadow-sm' : 'text-[#6B7280] hover:text-[#111827]'}`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer relative ${billingCycle === 'yearly' ? 'bg-white text-[#111827] shadow-sm' : 'text-[#6B7280] hover:text-[#111827]'}`}
              >
                Yearly Plan
                <span className="absolute -top-3 -right-3 bg-emerald-500 text-white font-black text-[8px] px-1.5 py-0.5 rounded-md scale-90">
                  -20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => {
              const rawFiat = parseInt(plan.priceFiat.replace('$', ''));
              const rawCoin = parseInt(plan.priceCoin.replace(',', ''));
              
              const computedFiat = billingCycle === 'yearly' ? Math.floor(rawFiat * 0.8 * 12) : rawFiat;
              const computedCoin = billingCycle === 'yearly' ? Math.floor(rawCoin * 0.8 * 12) : rawCoin;

              return (
                <div 
                  key={index}
                  className={`bg-white border rounded-2xl p-8 flex flex-col justify-between relative transition-all text-left ${
                    plan.isPopular 
                      ? 'border-[#dc2626] shadow-xl ring-2 ring-[#dc2626]/10 scale-105 z-10' 
                      : 'border-[#E5E7EB] shadow-sm hover:border-gray-300'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#dc2626] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                      Most Popular Setup
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#111827]">{plan.name}</h3>
                      <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">{plan.description}</p>
                    </div>

                    <div className="pb-6 border-b border-gray-100 space-y-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-[#111827] tracking-tight">
                          ${computedFiat.toLocaleString()}
                        </span>
                        <span className="text-xs font-semibold text-[#6B7280]">
                          / {billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-amber-600 font-medium">
                        <Coins className="w-3.5 h-3.5" />
                        <span>Or settle via <span className="font-bold font-mono">{computedCoin.toLocaleString()} ERC</span></span>
                      </div>
                    </div>

                    <ul className="space-y-3.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-tight">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleOpenCheckout({ ...plan, computedFiat, computedCoin })}
                    className={`mt-8 w-full py-3 px-4 rounded-xl text-xs font-bold transition-all text-center tracking-wide cursor-pointer ${
                      plan.isPopular 
                        ? 'bg-[#dc2626] hover:bg-[#ef4444] text-white shadow-md shadow-[#dc2626]/20' 
                        : 'bg-[#F9FAFB] hover:bg-gray-100 text-[#111827] border border-[#E5E7EB]'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">Active Sponsorship Placement Boards</h2>
              <p className="text-sm text-[#6B7280]">Browse and purchase algorithmic campaign placements offered across distributed ecosystem channels.</p>
            </div>

            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search active slots..." 
                className="w-full bg-[#F9FAFB] text-sm text-[#111827] pl-10 pr-4 py-2.5 border border-[#E5E7EB] rounded-xl focus:bg-white focus:border-[#dc2626] outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pb-2">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-[#dc2626] text-white border-transparent shadow-sm' 
                    : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredOpportunities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {filteredOpportunities.map((opp) => (
                <Card key={opp.id} className="relative group bg-white border border-[#E5E7EB] flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="gray">{opp.cat}</Badge>
                      <span className="flex items-center gap-1 text-xs text-[#6B7280] font-mono">
                        <Calendar className="w-3.5 h-3.5" /> {opp.duration}
                      </span>
                    </div>

                    <h4 className="font-bold text-[#111827] text-base group-hover:text-[#dc2626] transition-colors leading-snug">
                      {opp.title}
                    </h4>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-50">
                      <div className="p-2 bg-[#F9FAFB] rounded-lg">
                        <span className="text-[10px] uppercase font-bold text-[#6B7280] block">Gross Reach</span>
                        <span className="text-xs font-bold text-[#111827]">{opp.reach}</span>
                      </div>
                      <div className="p-2 bg-emerald-50/50 rounded-lg">
                        <span className="text-[10px] uppercase font-bold text-emerald-700 block">Performance Scale</span>
                        <span className="text-xs font-bold text-emerald-700 font-mono">{opp.roi}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-medium text-[#6B7280] block">Required Clearance</span>
                      <span className="text-sm font-bold font-mono text-[#dc2626]">{opp.cost}</span>
                    </div>
                    <button 
                      onClick={() => handleOpenCheckout({ name: opp.title, computedFiat: 'Custom Node', computedCoin: parseInt(opp.cost.replace(/[^0-9]/g, '')) })}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#111827] group-hover:text-[#dc2626] transition-colors cursor-pointer"
                    >
                      Acquire Slot <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center border border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
              <HelpCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-sm font-medium text-[#111827]">No active marketplace entries match criteria</p>
              <p className="text-xs text-[#6B7280] mt-1">Refine your active search parameters or change taxonomy category toggles.</p>
            </div>
          )}
        </div>

      </div>

     
      {selectedCheckoutPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white border border-[#E5E7EB] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative text-left p-6 space-y-6">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="text-lg font-bold text-[#111827]">Settle Allocation Ledger</h3>
              <button 
                onClick={() => setSelectedCheckoutPlan(null)}
                className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!transactionSuccess ? (
              <>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Selected Blueprint Matrix</span>
                  <h4 className="text-xl font-black text-[#111827] mt-0.5">{selectedCheckoutPlan.name}</h4>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Settlement Channel</span>
                  <div className="grid grid-cols-2 bg-[#F9FAFB] border border-[#E5E7EB] p-1 rounded-xl">
                    <button
                      disabled={selectedCheckoutPlan.computedFiat === 'Custom Node'}
                      onClick={() => setCheckoutCurrency('fiat')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${checkoutCurrency === 'fiat' && selectedCheckoutPlan.computedFiat !== 'Custom Node' ? 'bg-white text-[#111827] shadow-sm' : 'text-gray-400'}`}
                    >
                      Fiat ($ USD)
                    </button>
                    <button
                      onClick={() => setCheckoutCurrency('coin')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${checkoutCurrency === 'coin' ? 'bg-white text-amber-600 shadow-sm' : 'text-[#6B7280]'}`}
                    >
                      <Coins className="w-3.5 h-3.5" /> E-Rupai Coin
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#6B7280]">Total Commitment Price:</span>
                  <span className="text-xl font-black text-[#111827] font-mono">
                    {checkoutCurrency === 'fiat' && selectedCheckoutPlan.computedFiat !== 'Custom Node' ? (
                      `$${selectedCheckoutPlan.computedFiat.toLocaleString()}`
                    ) : (
                      `${selectedCheckoutPlan.computedCoin.toLocaleString()} ERC`
                    )}
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={executeSimulatedTransaction}
                    disabled={isProcessingCheckout}
                    className="w-full py-3 bg-[#dc2626] hover:bg-[#ef4444] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:bg-gray-400"
                  >
                    {isProcessingCheckout ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Verifying Block Allocation...
                      </>
                    ) : (
                      'Confirm and Open Stream'
                    )}
                  </button>
                </div>
              </>
            ) : (
              
              <div className="py-2 space-y-6">
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm animate-pulse">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-[#111827]">Ledger Settlement Executed!</h4>
                    <p className="text-xs text-[#6B7280]">
                      Cryptographic asset allocation has been confirmed globally on the core node layer.
                    </p>
                  </div>
                </div>

                <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 space-y-3.5 text-xs">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                    <span className="text-[#6B7280] font-medium">Settled Asset Blueprint:</span>
                    <span className="font-bold text-[#111827]">{selectedCheckoutPlan.name} Tier Bundle</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                    <span className="text-[#6B7280] font-medium">Settlement Method:</span>
                    <span className="font-semibold text-gray-700 uppercase flex items-center gap-1">
                      {checkoutCurrency === 'fiat' ? 'Credit Ledger Clearing ($)' : 'E-Rupai Native Core Protocol'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                    <span className="text-[#6B7280] font-medium">Amount Captured:</span>
                    <span className="font-mono font-bold text-emerald-700 text-sm">
                      {checkoutCurrency === 'fiat' && selectedCheckoutPlan.computedFiat !== 'Custom Node' ? (
                        `$${selectedCheckoutPlan.computedFiat.toLocaleString()}.00`
                      ) : (
                        `${selectedCheckoutPlan.computedCoin.toLocaleString()} ERC`
                      )}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[#6B7280] font-medium block">Generated Transaction Node Hash:</span>
                    <div className="bg-white border border-[#E5E7EB] p-2.5 rounded-lg text-[10px] font-mono font-semibold text-gray-600 select-all break-all relative group">
                      tx_erupai_0x{Math.random().toString(16).substr(2, 8).toUpperCase()}E3C9A9FD2F_v2
                      <span className="absolute right-2 top-2 px-1.5 py-0.5 bg-gray-100 text-[8px] font-sans font-bold rounded uppercase pointer-events-none">Live Node</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-gray-400 pt-1">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Block Speed: 420ms
                    </span>
                    <span>Gas Clearing: Exempt (Ecosystem Boost)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={() => {
                      const receiptContent = `E-RUPAI ADS MANAGER RECEIPT\nPlan: ${selectedCheckoutPlan.name}\nAmount: ${checkoutCurrency === 'fiat' ? '$' + selectedCheckoutPlan.computedFiat : selectedCheckoutPlan.computedCoin + ' ERC'}\nStatus: Cleared\nTimestamp: 2026-06-20`;
                      const blob = new Blob([receiptContent], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      const link = document.createElement('a');
                      link.href = url;
                      link.download = `Invoice_ERUPAI_${selectedCheckoutPlan.name.replace(/\s+/g, '_')}.txt`;
                      link.click();
                    }}
                    className="w-full py-2.5 border border-[#E5E7EB] hover:bg-gray-50 text-xs font-bold text-[#111827] rounded-xl transition-all text-center cursor-pointer shadow-xs"
                  >
                    Download Certified Audit Statement
                  </button>
                  <button
                    onClick={() => setSelectedCheckoutPlan(null)}
                    className="w-full py-2.5 bg-[#111827] hover:bg-gray-800 text-white text-xs font-bold rounded-xl transition-all text-center cursor-pointer shadow-sm"
                  >
                    Return to Analytics Console
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
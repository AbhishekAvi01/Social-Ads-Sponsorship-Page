import React, { useState } from 'react';
import { ShieldCheck, Award, Wallet, Coins, ArrowUpRight, MessageSquareCode, X, Check, FileText } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const CreatorAndWalletHub = () => {

  const [kycStep, setKycStep] = useState(0); 
  const [businessName, setBusinessName] = useState('');
  const [businessTaxId, setBusinessTaxId] = useState('');

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

  const handleStartVerification = () => {
    setKycStep(1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setKycStep(2);
    setTimeout(() => {
      setKycStep(3);
    }, 2000); 
  };

  return (
    <section className="py-20 bg-[#F9FAFB] px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      
    
      {kycStep === 3 && (
        <div className="fixed top-20 right-5 z-50 bg-emerald-600 border border-emerald-500 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-right-5 duration-200">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-bold tracking-wide">Verified Sponsor Protocol Active</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-28">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          
          <div className="lg:col-span-5 bg-gradient-to-br from-[#111827] to-gray-900 rounded-2xl p-8 text-white flex flex-col justify-between text-left shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04]"></div>
            
            <div className="space-y-6 relative z-10 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {kycStep === 3 ? 'Node Clearance Confirmed' : 'Verified Sponsor Badge Flow'}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-white tracking-tight">Ecosystem Trust Matrix</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Complete our tier-one authentication protocols to secure exclusive real estate slots, direct smart contract access, and highlighted status placement hooks.
              </p>

              
              {kycStep === 0 && (
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
                  <button 
                    onClick={handleStartVerification}
                    className="mt-6 w-full py-2.5 bg-[#dc2626] hover:bg-[#ef4444] text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer text-center"
                  >
                    Initiate Corporate Authentication
                  </button>
                </div>
              )}

              {kycStep === 1 && (
                <form onSubmit={handleFormSubmit} className="space-y-3 pt-2 text-left w-full">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Registered Corporate Title</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="E-Rupai Labs International"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full text-xs text-white bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 outline-none focus:border-[#dc2626] transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Governance Tax Ledger Reference ID</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="TXN-9023-F8"
                      value={businessTaxId}
                      onChange={(e) => setBusinessTaxId(e.target.value)}
                      className="w-full text-xs text-white bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 outline-none focus:border-[#dc2626] transition-all"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="mt-4 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all cursor-pointer text-center"
                  >
                    Submit Verification Payload
                  </button>
                </form>
              )}

              {kycStep === 2 && (
                <div className="py-12 flex flex-col items-center justify-center space-y-4 w-full text-center">
                  <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-xs text-amber-400 font-mono font-bold tracking-wider">Syncing Corporate Block Credentials...</p>
                </div>
              )}

              {kycStep === 3 && (
                <div className="p-4 bg-emerald-900/30 border border-emerald-500/40 rounded-xl space-y-4 text-left animate-in fade-in duration-300 w-full">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Identity Cryptography Cleared</span>
                  </div>
                  <div className="text-xs space-y-1.5 text-gray-300">
                    <div><span className="text-gray-500">Node Anchor ID:</span> <span className="font-mono font-semibold text-white">{businessName}</span></div>
                    <div><span className="text-gray-500">Tax Registry Matrix:</span> <span className="font-mono text-white">{businessTaxId}</span></div>
                    <div><span className="text-gray-500">Network Perks:</span> Priority Placement Enabled (-5% Gas Clearances)</div>
                  </div>
                  <button 
                    onClick={() => setKycStep(0)}
                    className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold rounded-lg transition-all cursor-pointer text-center"
                  >
                    Reset System Simulation
                  </button>
                </div>
              )}
            </div>
          </div>

         
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
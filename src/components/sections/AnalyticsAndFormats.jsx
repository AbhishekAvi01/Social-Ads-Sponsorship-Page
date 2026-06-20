import React, { useState } from 'react';
import { BarChart3, RefreshCw, Wallet, ArrowUpRight, Monitor, Smartphone, LayoutGrid, Sparkles } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const AnalyticsAndFormats = () => {
  const [previewDevice, setPreviewDevice] = useState('mobile');
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  
  const [selectedFormat, setSelectedFormat] = useState('standard'); 
  const [sandboxActionLog, setSandboxActionLog] = useState('');

  const mockCampaigns = [
    { id: 'c-001', name: 'Q2 Sovereign Token Launch Boost', status: 'Active', budget: '15,000 Coins', spent: '9,240 Coins', clicks: '24.2k', ctr: '4.8%', roi: '+142%' },
    { id: 'c-002', name: 'E-Rupai Marketplace Flash Sale', status: 'Active', budget: '8,500 Coins', spent: '8,500 Coins', clicks: '18.9k', ctr: '3.9%', roi: '+118%' },
    { id: 'c-003', name: 'Web3 Flappy RPG App Installs', status: 'Paused', budget: '5,000 Coins', spent: '1,200 Coins', clicks: '3.1k', ctr: '2.1%', roi: '--' },
    { id: 'c-004', name: 'Sponsor Championship Banner Ext', status: 'Completed', budget: '12,000 Coins', spent: '12,000 Coins', clicks: '34.5k', ctr: '5.2%', roi: '+189%' }
  ];

  const creativeSpecs = {
    standard: {
      title: 'Accelerate Yield Rewards Instantly!',
      desc: 'Connect an authorized verification ledger, settle network stakes via native asset pipelines, and lock 15% optimization credits.',
      dimensions: '1:1 Square Frame Matrix',
      badge: 'Interactive Post'
    },
    banner: {
      title: 'E-Rupai Distributed Ledger Gateway v2',
      desc: 'Institutional scale micro-transaction pipelines live. Trade, pool, and liquidate instantly.',
      dimensions: '728x90 Billboard Node',
      badge: 'Wide Header Banner'
    }
  };

  const handleRefreshSimulation = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const handleInteractTrigger = () => {
    setSandboxActionLog('Simulation Dispatch: Direct URI Callback Initialized');
    setTimeout(() => setSandboxActionLog(''), 2500);
  };

  return (
    <section className="py-20 bg-[#F9FAFB] px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      
      
      {sandboxActionLog && (
        <div className="fixed bottom-5 left-5 z-50 bg-emerald-600 border border-emerald-500 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs font-bold font-mono tracking-wide animate-bounce">
          {sandboxActionLog}
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-24">

        
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            <div className="space-y-1">
              <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">Campaign Performance Analytics</h2>
              <p className="text-sm text-[#6B7280]">Live analytics performance pipeline from the localized E-Rupai Distributed Ledger.</p>
            </div>
            <button 
              onClick={handleRefreshSimulation}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-xl bg-white text-xs font-bold text-[#111827] hover:bg-gray-50 active:bg-gray-100 transition-all cursor-pointer self-start sm:self-auto"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#6B7280] ${isRefreshing ? 'animate-spin' : ''}`} />
              Sync Ledger Data
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <Card className="bg-white border border-[#E5E7EB]">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Accumulated CTR</span>
                <span className="p-1 bg-emerald-50 rounded text-emerald-600"><ArrowUpRight className="w-4 h-4" /></span>
              </div>
              <p className="text-2xl font-black text-[#111827] mt-2 font-mono">4.12%</p>
              <p className="text-xs text-[#6B7280] mt-1">Global benchmark: 2.80%</p>
            </Card>
            <Card className="bg-white border border-[#E5E7EB]">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Ecosystem Conversion</span>
                <span className="p-1 bg-emerald-50 rounded text-emerald-600"><ArrowUpRight className="w-4 h-4" /></span>
              </div>
              <p className="text-2xl font-black text-[#111827] mt-2 font-mono">14.85%</p>
              <p className="text-xs text-[#6B7280] mt-1">Cross-platform app tracking</p>
            </Card>
            <Card className="bg-white border border-[#E5E7EB]">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Coins Spent Pool</span>
                <span className="p-1 bg-gray-50 rounded text-gray-400"><Wallet className="w-4 h-4" /></span>
              </div>
              <p className="text-2xl font-black text-[#dc2626] mt-2 font-mono">30,940 ERC</p>
              <p className="text-xs text-[#6B7280] mt-1">Current quarter consumption</p>
            </Card>
            <Card className="bg-white border border-[#E5E7EB]">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Aggregated ROI Scale</span>
                <span className="p-1 bg-emerald-50 rounded text-emerald-600"><ArrowUpRight className="w-4 h-4" /></span>
              </div>
              <p className="text-2xl font-black text-emerald-600 mt-2 font-mono">+149.7%</p>
              <p className="text-xs text-[#6B7280] mt-1">Net positive yield architecture</p>
            </Card>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB] text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                    <th className="px-6 py-4">Campaign Blueprint Matrix</th>
                    <th className="px-6 py-4">Delivery State</th>
                    <th className="px-6 py-4">Allocated Budget</th>
                    <th className="px-6 py-4">Ledger Spent</th>
                    <th className="px-6 py-4">Gross Actions</th>
                    <th className="px-6 py-4">CTR Metric</th>
                    <th className="px-6 py-4 text-right">Yield ROI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] text-sm text-[#111827]">
                  {mockCampaigns.map((camp) => (
                    <tr key={camp.id} className="hover:bg-gray-50/70 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#111827]">{camp.name}</td>
                      <td className="px-6 py-4">
                        <Badge variant={camp.status === 'Active' ? 'active' : camp.status === 'Completed' ? 'premium' : 'gray'}>
                          {camp.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 font-mono text-xs">{camp.budget}</td>
                      <td className="px-6 py-4 font-mono text-xs text-gray-600">{camp.spent}</td>
                      <td className="px-6 py-4 font-mono text-xs">{camp.clicks}</td>
                      <td className="px-6 py-4 font-mono text-xs text-emerald-600">{camp.ctr}</td>
                      <td className={`px-6 py-4 text-right font-bold font-mono text-xs ${camp.roi.startsWith('+') ? 'text-emerald-600' : 'text-[#6B7280]'}`}>
                        {camp.roi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
       
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight">Adaptive Native Creative Layouts</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Review automated mockups rendering structural placement constraints across responsive container nodes dynamically.
              </p>
            </div>

            <div className="space-y-3">
             
              <div 
                onClick={() => setSelectedFormat('standard')}
                className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                  selectedFormat === 'standard' 
                    ? 'border-[#dc2626] bg-gradient-to-r from-white to-[#fef2f2]' 
                    : 'border-[#E5E7EB] bg-white hover:border-gray-300'
                }`}
              >
                <div>
                  <h4 className="font-bold text-sm text-[#111827]">Standard Core Interactive Post</h4>
                  <p className="text-xs text-[#6B7280] mt-0.5">Asset specs: High-resolution PNG/JPG ratio 1:1</p>
                </div>
                <LayoutGrid className={`w-5 h-5 ${selectedFormat === 'standard' ? 'text-[#dc2626]' : 'text-gray-400'}`} />
              </div>

            
              <div 
                onClick={() => setSelectedFormat('banner')}
                className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                  selectedFormat === 'banner' 
                    ? 'border-[#dc2626] bg-gradient-to-r from-white to-[#fef2f2]' 
                    : 'border-[#E5E7EB] bg-white hover:border-gray-300'
                }`}
              >
                <div>
                  <h4 className="font-bold text-sm text-[#111827]">Wide Ecosystem Board Banner</h4>
                  <p className="text-xs text-[#6B7280] mt-0.5">Asset specs: Horizontal vector canvas 728x90px</p>
                </div>
                <Monitor className={`w-5 h-5 ${selectedFormat === 'banner' ? 'text-[#dc2626]' : 'text-gray-400'}`} />
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <span className="text-xs font-bold text-[#111827] uppercase tracking-widest">Active Mock Sandbox View</span>
              
              
              <div className="flex bg-gray-100 p-1 rounded-lg border border-gray-200">
                <button 
                  onClick={() => setPreviewDevice('mobile')}
                  className={`p-1.5 rounded-md transition-all cursor-pointer ${previewDevice === 'mobile' ? 'bg-white shadow text-[#dc2626]' : 'text-gray-500 hover:text-[#111827]'}`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setPreviewDevice('desktop')}
                  className={`p-1.5 rounded-md transition-all cursor-pointer ${previewDevice === 'desktop' ? 'bg-white shadow text-[#dc2626]' : 'text-gray-500 hover:text-[#111827]'}`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
              </div>
            </div>

        
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-8 flex justify-center items-center min-h-[360px] transition-all">
              <div className={`bg-white border border-[#E5E7EB] rounded-xl shadow-md overflow-hidden transition-all duration-300 text-left ${
                previewDevice === 'mobile' ? 'w-64' : 'w-full max-w-xl'
              }`}>
               
                <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#dc2626]/20 flex items-center justify-center text-[8px] font-bold text-[#dc2626]">eR</div>
                    <span className="text-[10px] font-bold text-gray-700">E-Rupai Hub Platform</span>
                  </div>
                  <Badge variant="danger">Sponsored</Badge>
                </div>
                
                
                <div className={`bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center p-4 text-center border-b border-gray-100 relative transition-all ${
                  selectedFormat === 'standard' ? 'aspect-video' : 'h-16'
                }`}>
                  <span className="text-xs font-bold text-gray-600 font-mono">
                    {creativeSpecs[selectedFormat].badge}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-1 font-mono">
                    {creativeSpecs[selectedFormat].dimensions}
                  </span>
                </div>
                
                
                <div className="p-4 space-y-3">
                  <h5 className="font-bold text-xs text-[#111827] leading-tight">
                    {creativeSpecs[selectedFormat].title}
                  </h5>
                  <p className="text-[10px] text-[#6B7280] leading-relaxed">
                    {creativeSpecs[selectedFormat].desc}
                  </p>
                  <button 
                    onClick={handleInteractTrigger}
                    className="w-full py-2 bg-[#dc2626] hover:bg-[#ef4444] text-white text-[10px] font-bold rounded-lg text-center tracking-wide block transition-all cursor-pointer shadow-xs active:scale-[0.99]"
                  >
                    Interact & Open App
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
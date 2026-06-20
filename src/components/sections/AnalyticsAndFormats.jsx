// src/components/sections/AnalyticsAndFormats.jsx
import React, { useState } from 'react';
import { BarChart3, PieChart, RefreshCw, Eye, MousePointer, Wallet, ArrowUpRight, Monitor, Smartphone, LayoutGrid } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const AnalyticsAndFormats = () => {
  // Local state to simulate custom format preview orientation switches
  const [previewDevice, setPreviewDevice] = useState('mobile');
  // State to simulate a live UI data reloading trigger
  const [isRefreshing, setIsRefreshing] = useState(false);

  const mockCampaigns = [
    { id: 'c-001', name: 'Q2 Sovereign Token Launch Boost', status: 'Active', budget: '15,000 Coins', spent: '9,240 Coins', clicks: '24.2k', ctr: '4.8%', roi: '+142%' },
    { id: 'c-002', name: 'E-Rupai Marketplace Flash Sale', status: 'Active', budget: '8,500 Coins', spent: '8,500 Coins', clicks: '18.9k', ctr: '3.9%', roi: '+118%' },
    { id: 'c-003', name: 'Web3 Flappy RPG App Installs', status: 'Paused', budget: '5,000 Coins', spent: '1,200 Coins', clicks: '3.1k', ctr: '2.1%', roi: '--' },
    { id: 'c-004', name: 'Sponsor Championship Banner Ext', status: 'Completed', budget: '12,000 Coins', spent: '12,000 Coins', clicks: '34.5k', ctr: '5.2%', roi: '+189%' }
  ];

  const handleRefreshSimulation = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <section className="py-20 bg-[#F9FAFB] px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* SECTION A: CAMPAIGN DASHBOARD */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            <div className="space-y-1">
              <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">Campaign Performance Analytics</h2>
              <p className="text-sm text-[#6B7280]">Live analytics performance pipeline from the localized E-Rupai Distributed Ledger.</p>
            </div>
            <button 
              onClick={handleRefreshSimulation}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-xl bg-white text-xs font-bold text-[#111827] hover:bg-gray-50 active:bg-gray-100 transition-all self-start sm:self-auto"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#6B7280] ${isRefreshing ? 'animate-spin' : ''}`} />
              Sync Ledger Data
            </button>
          </div>

          {/* Quick Real-time High-level Metrics Row */}
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

          {/* Main Campaign Grid Table Wrapper */}
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

        {/* SECTION B: AD FORMAT PREVIEWS HUB */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Formats Selection Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight">Adaptive Native Creative Layouts</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Review automated mockups rendering structural placement constraints across responsive container nodes dynamically.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 border border-[#dc2626] bg-gradient-to-r from-white to-[#fef2f2] rounded-xl flex items-center justify-between cursor-pointer">
                <div>
                  <h4 className="font-bold text-sm text-[#111827]">Standard Core Interactive Post</h4>
                  <p className="text-xs text-[#6B7280] mt-0.5">Asset specs: High-resolution PNG/JPG ratio 1:1</p>
                </div>
                <LayoutGrid className="w-5 h-5 text-[#dc2626]" />
              </div>
              <div className="p-4 border border-[#E5E7EB] bg-white hover:border-gray-300 rounded-xl flex items-center justify-between cursor-pointer transition-all">
                <div>
                  <h4 className="font-bold text-sm text-[#111827]">Wide Ecosystem Board Banner</h4>
                  <p className="text-xs text-[#6B7280] mt-0.5">Asset specs: Horizontal vector canvas 728x90px</p>
                </div>
                <Monitor className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Interactive Live Device Canvas Container Screen */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <span className="text-xs font-bold text-[#111827] uppercase tracking-widest">Active Mock Sandbox View</span>
              
              {/* Responsive Frame Toggle Switch Toggles */}
              <div className="flex bg-gray-100 p-1 rounded-lg border border-gray-200">
                <button 
                  onClick={() => setPreviewDevice('mobile')}
                  className={`p-1.5 rounded-md transition-all ${previewDevice === 'mobile' ? 'bg-white shadow text-[#dc2626]' : 'text-gray-500 hover:text-[#111827]'}`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setPreviewDevice('desktop')}
                  className={`p-1.5 rounded-md transition-all ${previewDevice === 'desktop' ? 'bg-white shadow text-[#dc2626]' : 'text-gray-500 hover:text-[#111827]'}`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated Live Viewport Container Layout Frame */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-8 flex justify-center items-center min-h-[340px] transition-all">
              <div className={`bg-white border border-[#E5E7EB] rounded-xl shadow-md overflow-hidden transition-all duration-300 text-left ${previewDevice === 'mobile' ? 'w-64' : 'w-full max-w-lg'}`}>
                {/* Simulated Header Wrapper inside application sandbox mock */}
                <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#dc2626]/20"></div>
                    <span className="text-[10px] font-bold text-gray-700">E-Rupai Hub Post</span>
                  </div>
                  <Badge variant="danger">Sponsored</Badge>
                </div>
                {/* Simulated Visual Creative Elements Frame Area */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-video flex flex-col justify-center items-center p-4 text-center border-b border-gray-100 relative">
                  <span className="text-xs font-bold text-gray-500 font-mono">Creative Banner Mockup Node</span>
                  <span className="text-[10px] text-gray-400 mt-1">16:9 Display Frame Matrix</span>
                </div>
                <div className="p-4 space-y-3">
                  <h5 className="font-bold text-xs text-[#111827]">Accelerate Yield Rewards Instantly!</h5>
                  <p className="text-[10px] text-[#6B7280] leading-relaxed">
                    Connect an authorized verification ledger, settle network stakes via native asset pipelines, and lock 15% optimization credits.
                  </p>
                  <button className="w-full py-2 bg-[#dc2626] text-white text-[10px] font-bold rounded-lg text-center tracking-wide block hover:bg-[#ef4444] transition-all">
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
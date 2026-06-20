// src/App.jsx
import React, { useState } from 'react';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { HeroSection } from './components/sections/HeroSection';
import { SolutionsAndTargeting } from './components/sections/SolutionsAndTargeting';
import { SponsorshipAndCampaigns } from './components/sections/SponsorshipAndCampaigns';
import { AnalyticsAndFormats } from './components/sections/AnalyticsAndFormats';
import { PricingAndMarketplace } from './components/sections/PricingAndMarketplace';
import { CreatorAndWalletHub } from './components/sections/CreatorAndWalletHub';

function App() {
  // Navigation state manager to orchestrate smooth contextual targeting scroll bindings
  const handleSectionScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans antialiased selection:bg-[#dc2626]/10 selection:text-[#dc2626]">
      
      {/* ENTERPRISE APPLICATION CORE NAVBAR SHELL */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-xl shadow-md flex items-center justify-center text-white font-black text-sm tracking-tighter">
              eR
            </div>
            <span className="font-extrabold text-base tracking-tight text-[#111827]">
              E-Rupai <span className="text-xs font-semibold text-[#6B7280] ml-0.5">Ads Manager</span>
            </span>
          </div>

          {/* Clean Manual Internal Anchor Bindings */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-[#6B7280] uppercase tracking-wider">
            <button onClick={() => handleSectionScroll('solutions')} className="hover:text-[#dc2626] transition-colors">Media Formats</button>
            <button onClick={() => handleSectionScroll('campaigns')} className="hover:text-[#dc2626] transition-colors">Campaign Framework</button>
            <button onClick={() => handleSectionScroll('analytics')} className="hover:text-[#dc2626] transition-colors">Analytics Desk</button>
            <button onClick={() => handleSectionScroll('pricing')} className="hover:text-[#dc2626] transition-colors">Pricing Matrix</button>
          </nav>

          <button 
            onClick={() => handleSectionScroll('pricing')}
            className="px-4 py-2 border border-[#E5E7EB] bg-white hover:bg-gray-50 text-xs font-bold text-[#111827] rounded-xl transition-all shadow-sm"
          >
            Access Dashboard
          </button>
        </div>
      </header>

      {/* RENDER DOM STACK STITCH SECTIONS WITH ID BINDINGS */}
      <main>
        <div id="hero"><HeroSection onNavigate={(section) => {
          if (section === 'create') handleSectionScroll('campaigns');
          if (section === 'marketplace') handleSectionScroll('pricing');
          if (section === 'pricing') handleSectionScroll('pricing');
        }} /></div>
        
        <div id="solutions"><SolutionsAndTargeting /></div>
        
        <div id="campaigns"><SponsorshipAndCampaigns /></div>
        
        <div id="analytics"><AnalyticsAndFormats /></div>
        
        <div id="pricing"><PricingAndMarketplace /></div>
        
        <div id="creators"><CreatorAndWalletHub /></div>

        {/* SECTION 10: PRODUCTION CONVERSION CLOSING CTA SECTION ELEMENT */}
        <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB] text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black text-[#111827] tracking-tight leading-none">
              Start Growing With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#ef4444]">
                E-Rupai Advertising Today
              </span>
            </h2>
            
            <p className="text-base text-[#6B7280] max-w-xl mx-auto leading-relaxed">
              Provision instant targeting spaces across high-frequency interfaces. Settle stakes securely with immediate cryptographic audit rails.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button 
                onClick={() => handleSectionScroll('campaigns')}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-[#dc2626] hover:bg-[#ef4444] shadow-md transition-all"
              >
                Create Campaign Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button 
                onClick={() => handleSectionScroll('creators')}
                className="inline-flex items-center justify-center px-6 py-3 border border-[#E5E7EB] text-sm font-bold rounded-xl text-[#111827] bg-[#F9FAFB] hover:bg-gray-100 transition-all"
              >
                Become Verified Sponsor
              </button>
            </div>

            {/* Premium Trust Footing Indicator Framework elements */}
            <div className="pt-12 border-t border-gray-100 flex flex-wrap justify-center items-center gap-8 text-xs font-semibold text-gray-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> AML/KYC Network Compliant</span>
              <span>•</span>
              <span>Over 1.8k Active Verified Advertisers Cleared</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-500" /> Real-time Performance Allocation</span>
            </div>
          </div>
        </section>
      </main>

      {/* DEEP FOOTER STRUCTURE */}
      <footer className="bg-[#111827] text-gray-400 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 E-Rupai Coin Ecosystem. All computational advertising governance reserved.</p>
          <div className="flex gap-6 font-semibold">
            <a href="#hero" className="hover:text-white transition-colors">Core Network</a>
            <a href="#solutions" className="hover:text-white transition-colors">Ledger Protocols</a>
            <a href="#pricing" className="hover:text-white transition-colors">Clearing Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;



// // src/App.jsx
// import React, { useState } from 'react';
// import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
// import { HeroSection } from './components/sections/HeroSection';
// import { SolutionsAndTargeting } from './components/sections/SolutionsAndTargeting';
// import { SponsorshipAndCampaigns } from './components/sections/SponsorshipAndCampaigns';
// import { AnalyticsAndFormats } from './components/sections/AnalyticsAndFormats';
// import { PricingAndMarketplace } from './components/sections/PricingAndMarketplace';
// import { CreatorAndWalletHub } from './components/sections/CreatorAndWalletHub';

// function App() {
//   // Navigation state manager to orchestrate smooth contextual targeting scroll bindings
//   const handleSectionScroll = (targetId) => {
//     const element = document.getElementById(targetId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#F9FAFB] text-[#111827] font-sans antialiased selection:bg-[#dc2626]/10 selection:text-[#dc2626]">
      
//       {/* ENTERPRISE APPLICATION CORE NAVBAR SHELL (STRETCHED TO FULL VIEWPORT WIDTH) */}
//       <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#E5E7EB] px-4 sm:px-6 lg:px-8">
//         <div className="w-full max-w-7xl mx-auto h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//             <div className="w-8 h-8 bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-xl shadow-md flex items-center justify-center text-white font-black text-sm tracking-tighter">
//               eR
//             </div>
//             <span className="font-extrabold text-base tracking-tight text-[#111827]">
//               E-Rupai <span className="text-xs font-semibold text-[#6B7280] ml-0.5">Ads Manager</span>
//             </span>
//           </div>

//           {/* Clean Manual Internal Anchor Bindings */}
//           <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-[#6B7280] uppercase tracking-wider">
//             <button onClick={() => handleSectionScroll('solutions')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Media Formats</button>
//             <button onClick={() => handleSectionScroll('campaigns')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Campaign Framework</button>
//             <button onClick={() => handleSectionScroll('analytics')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Analytics Desk</button>
//             <button onClick={() => handleSectionScroll('pricing')} className="hover:text-[#dc2626] transition-colors cursor-pointer">Pricing Matrix</button>
//           </nav>

//           <button 
//             onClick={() => handleSectionScroll('pricing')}
//             className="px-4 py-2 border border-[#E5E7EB] bg-white hover:bg-gray-50 text-xs font-bold text-[#111827] rounded-xl transition-all shadow-sm cursor-pointer"
//           >
//             Access Dashboard
//           </button>
//         </div>
//       </header>

//       {/* RENDER DOM STACK STITCH SECTIONS WITH ID BINDINGS */}
//       <main className="w-full">
//         <div id="hero"><HeroSection onNavigate={(section) => {
//           if (section === 'create') handleSectionScroll('campaigns');
//           if (section === 'marketplace') handleSectionScroll('pricing');
//           if (section === 'pricing') handleSectionScroll('pricing');
//         }} /></div>
        
//         <div id="solutions"><SolutionsAndTargeting /></div>
        
//         <div id="campaigns"><SponsorshipAndCampaigns /></div>
        
//         <div id="analytics"><AnalyticsAndFormats /></div>
        
//         <div id="pricing"><PricingAndMarketplace /></div>
        
//         <div id="creators"><CreatorAndWalletHub /></div>

//         {/* SECTION 10: PRODUCTION CONVERSION CLOSING CTA SECTION ELEMENT */}
//         <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB] text-center relative overflow-hidden">
//           <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
//           <div className="max-w-4xl mx-auto space-y-8 relative z-10">
//             <h2 className="text-4xl sm:text-5xl font-black text-[#111827] tracking-tight leading-none">
//               Start Growing With <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#ef4444]">
//                 E-Rupai Advertising Today
//               </span>
//             </h2>
            
//             <p className="text-base text-[#6B7280] max-w-xl mx-auto leading-relaxed">
//               Provision instant targeting spaces across high-frequency interfaces. Settle stakes securely with immediate cryptographic audit rails.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4 pt-4">
//               <button 
//                 onClick={() => handleSectionScroll('campaigns')}
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-[#dc2626] hover:bg-[#ef4444] shadow-md transition-all cursor-pointer"
//               >
//                 Create Campaign Now
//                 <ArrowRight className="ml-2 w-4 h-4" />
//               </button>
//               <button 
//                 onClick={() => handleSectionScroll('creators')}
//                 className="inline-flex items-center justify-center px-6 py-3 border border-[#E5E7EB] text-sm font-bold rounded-xl text-[#111827] bg-[#F9FAFB] hover:bg-gray-100 transition-all cursor-pointer"
//               >
//                 Become Verified Sponsor
//               </button>
//             </div>

//             {/* Premium Trust Footing Indicator Framework elements */}
//             <div className="pt-12 border-t border-gray-100 flex flex-wrap justify-center items-center gap-8 text-xs font-semibold text-gray-400">
//               <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> AML/KYC Network Compliant</span>
//               <span>•</span>
//               <span>Over 1.8k Active Verified Advertisers Cleared</span>
//               <span>•</span>
//               <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-500" /> Real-time Performance Allocation</span>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* DEEP FOOTER STRUCTURE */}
//       <footer className="bg-[#111827] text-gray-400 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800 text-xs font-medium w-full">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p>© 2026 E-Rupai Coin Ecosystem. All computational advertising governance reserved.</p>
//           <div className="flex gap-6 font-semibold">
//             <a href="#hero" className="hover:text-white transition-colors">Core Network</a>
//             <a href="#solutions" className="hover:text-white transition-colors">Ledger Protocols</a>
//             <a href="#pricing" className="hover:text-white transition-colors">Clearing Terms</a>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }

// export default App;
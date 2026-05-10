import { ArrowUpRight, Search, CreditCard, ChevronDown, CheckCircle2, Lock, ArrowRight, MoreVertical, X } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div 
      className="relative w-full max-w-[1000px] mx-auto mt-8 rounded-[40px] bg-white/30 backdrop-blur-xl border border-white/50 p-4 soft-shadow-lg"
    >
      <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col gap-6">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* VISA Card Widget */}
          <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <strong className="text-[var(--color-text-dark)] text-lg">VISA</strong>
              <div className="text-xs bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 flex items-center gap-1">
                Direct Debits <ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>
            <div className="mb-6">
              <div className="text-xs text-gray-500 mb-1">Linked to main account</div>
              <div className="font-mono text-sm">****2829</div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-[var(--color-text-dark)] text-white text-xs py-2.5 rounded-full font-medium">Receive</button>
              <button className="flex-1 bg-white border border-gray-200 text-[var(--color-text-dark)] text-xs py-2.5 rounded-full font-medium">Send</button>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
               <div className="text-xs text-gray-500">Linked to main account<br/><span className="text-[var(--color-text-dark)] font-bold">$ 50.00</span></div>
               <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] opacity-80" />
                 <div className="w-8 h-8 rounded-full bg-[var(--color-bg-tint)] border-2 border-white flex items-center justify-center text-[10px] text-gray-600 font-medium">+</div>
               </div>
            </div>
          </div>

          {/* Income Widget */}
          <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100 relative">
            <div className="flex justify-between items-start mb-8">
              <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                <ArrowUpRight size={14} className="text-[var(--color-primary)]" />
              </div>
              <div className="text-xs bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 flex items-center gap-1">
                Weekly <ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>
            
            {/* Fake Dot Matrix Chart */}
            <div className="flex gap-[3px] mb-6 h-12 items-end">
               {[...Array(15)].map((_, i) => (
                 <div key={i} className="flex flex-col gap-[3px]">
                   {[...Array(6)].map((_, j) => (
                     <div key={j} className={`w-1.5 h-1.5 rounded-full ${j > (i % 4) + 1 ? 'bg-gray-200' : 'bg-[var(--color-purple-soft)] opacity-80'}`} />
                   ))}
                 </div>
               ))}
            </div>

            <div>
              <div className="text-xs text-gray-500 mb-1">Total income</div>
              <div className="text-xl font-bold text-[var(--color-text-dark)]">$ 12100.50</div>
            </div>
          </div>

          {/* Paid Widget */}
          <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">
            <div className="flex justify-between items-start mb-8">
              <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                <ArrowUpRight size={14} className="text-[var(--color-text-dark)] rotate-180" />
              </div>
              <div className="text-xs bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 flex items-center gap-1">
                Weekly <ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>
            
            {/* Fake Dot Matrix Chart Green */}
            <div className="flex gap-[3px] mb-6 h-12 items-end">
               {[...Array(15)].map((_, i) => (
                 <div key={i} className="flex flex-col gap-[3px]">
                   {[...Array(6)].map((_, j) => (
                     <div key={j} className={`w-1.5 h-1.5 rounded-full ${j > (i % 3) + 2 ? 'bg-gray-200' : 'bg-[var(--color-primary)] border border-white'}`} />
                   ))}
                 </div>
               ))}
            </div>

            <div>
              <div className="text-xs text-gray-500 mb-1">Total paid</div>
              <div className="text-xl font-bold text-[var(--color-text-dark)]">$ 7150.80</div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
           
           {/* Left Small Widgets Column */}
           <div className="md:col-span-4 flex flex-col gap-6">
              
              {/* Top row in left col */}
              <div className="grid grid-cols-2 gap-4">
                {/* 15 Days */}
                <div className="bg-[var(--color-background-soft)] rounded-3xl p-5 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                    <div className="w-3 h-3 border-2 border-[var(--color-primary)] rounded-full"></div>
                  </div>
                  <div className="font-bold text-[var(--color-text-dark)]">15 Days</div>
                  <div className="text-[10px] text-gray-500 mb-3">12 hrs. 23 minutes</div>
                  <div className="flex gap-1 flex-wrap w-full">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i < 8 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                </div>

                {/* 2023 / 2024 Chart */}
                <div className="bg-[var(--color-background-soft)] rounded-3xl p-4 border border-gray-100 flex flex-col justify-between">
                  <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center mb-2 self-start">
                    <div className="w-2 h-2 bg-purple-300 rounded-sm"></div>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-16 pt-2 border-b border-gray-200">
                     <div className="w-full bg-gray-200 rounded-t-md h-1/2 relative">
                        <span className="absolute -bottom-5 text-[9px] text-gray-400 left-1/2 -translate-x-1/2">2023</span>
                     </div>
                     <div className="w-full bg-[var(--color-primary)] rounded-t-md h-full relative">
                        <span className="absolute -bottom-5 text-[9px] text-[var(--color-primary-dark)] left-1/2 -translate-x-1/2 font-medium">2024</span>
                     </div>
                  </div>
                  <div className="h-4"></div>
                </div>
              </div>

              {/* Main Stocks Chart */}
              <div className="bg-[var(--color-background-soft)] rounded-3xl p-5 border border-gray-100">
                 <div className="flex justify-between items-start mb-6">
                   <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                     <MoreVertical size={14} className="text-gray-400" />
                   </div>
                   <div className="font-bold text-[var(--color-text-dark)]">$ 7150.80</div>
                 </div>
                 
                 {/* Line chart svg mockup */}
                 <div className="w-full h-12 mb-4 relative">
                   <svg viewBox="0 0 200 40" preserveAspectRatio="none" className="w-full h-full text-[var(--color-primary)]">
                     <path d="M0,30 Q20,20 40,25 T80,15 T120,20 T160,5 T200,10" fill="none" stroke="currentColor" strokeWidth="2" />
                     <circle cx="160" cy="5" r="3" fill="white" stroke="currentColor" strokeWidth="2" />
                   </svg>
                 </div>

                 <div className="flex justify-between items-end">
                   <div>
                     <div className="font-bold text-[var(--color-text-dark)] text-sm">Main Stocks</div>
                     <div className="text-[10px] text-gray-500">Extended and Limited</div>
                   </div>
                   <div className="text-[10px] font-medium text-[var(--color-primary-dark)] bg-green-50 px-2 py-1 rounded">+ 9.1%</div>
                 </div>
              </div>

           </div>

           {/* Right Large Activity Manager */}
           <div className="md:col-span-8 bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-[var(--color-text-dark)]">Activity manager</h3>
                <div className="flex items-center gap-2">
                  <button className="text-xs text-gray-500 flex items-center gap-1 hover:text-[var(--color-text-dark)]"><Search size={14}/> Filters</button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 flex-1">
                 
                 {/* List Panel */}
                 <div className="flex-1 flex flex-col gap-4">
                    <div className="relative">
                      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="text" placeholder="Search in activities..." className="w-full bg-[var(--color-background-soft)] rounded-full py-2 pl-9 pr-4 text-xs outline-none focus:ring-1 ring-gray-200" />
                    </div>

                    <div className="bg-[var(--color-background-soft)] rounded-2xl p-4 flex flex-col items-center justify-center flex-1 min-h-[140px]">
                      <div className="text-sm font-bold text-[var(--color-text-dark)] mb-1">$ 41.30 <span className="text-xs font-normal text-gray-500">USD</span></div>
                      
                      <div className="flex items-end gap-2 h-16 w-full justify-center opacity-80 mt-2">
                        {[40, 20, 60, 30, 80, 50, 20].map((h, i) => (
                          <div key={i} className={`w-2 rounded-full ${i === 4 ? 'bg-[var(--color-primary)]' : 'bg-gray-300'}`} style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 mt-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                 </div>

                 {/* Detail Panel */}
                 <div className="w-[280px] border border-gray-100 rounded-3xl p-5 flex flex-col relative shadow-sm">
                   
                   <div className="flex flex-wrap gap-2 mb-4">
                     <span className="text-[10px] border border-gray-200 rounded-full px-2 py-0.5 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> Team <X size={10} className="ml-1"/></span>
                     <span className="text-[10px] border border-gray-200 rounded-full px-2 py-0.5 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> Insights <X size={10} className="ml-1"/></span>
                     <span className="text-[10px] bg-gray-100 rounded-full px-2 py-0.5 flex items-center gap-1">Today <X size={10} className="ml-1"/></span>
                   </div>

                   <div className="flex justify-between items-center mb-4">
                     <div className="font-bold text-sm text-[var(--color-text-dark)]">Business plans</div>
                     <MoreVertical size={14} className="text-gray-400" />
                   </div>

                   <div className="flex flex-col gap-3 mb-6">
                     <div className="flex items-center gap-3 w-full bg-[var(--color-background-soft)] p-2 rounded-xl">
                       <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] ml-1"></div>
                       <div className="text-xs font-medium text-[var(--color-text-dark)] flex-1">Bank loans</div>
                       <ChevronDown size={14} className="text-gray-400" />
                     </div>
                     <div className="flex items-center gap-3 w-full px-2">
                       <div className="w-2 h-2 rounded-full bg-purple-300 ml-1"></div>
                       <div className="text-xs font-medium text-gray-500 flex-1">Accounting</div>
                     </div>
                     <div className="flex items-center gap-3 w-full px-2">
                       <div className="w-2 h-2 rounded-full bg-[#D211D5] ml-1"></div>
                       <div className="text-xs font-medium text-gray-500 flex-1">HR Management</div>
                     </div>
                   </div>

                   <div className="mt-auto bg-[#F8FAFC] border divide-gray-100 border-[#E2E8F0] p-4 rounded-2xl relative shadow-sm">
                      <div className="w-6 h-6 bg-white shadow-sm rounded-full flex items-center justify-center absolute -top-3 left-4">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                      </div>
                      <div className="font-bold text-xs text-[var(--color-text-dark)] mb-1">Business plans</div>
                      <p className="text-[10px] text-gray-500 mb-3 leading-snug">Enable 2-step verification to secure your wallet</p>
                      <button className="w-full bg-[var(--color-primary)] text-white text-[10px] font-bold py-2 rounded-full">Enable</button>
                   </div>
                 </div>

              </div>
           </div>

        </div>

      </div>
    </div>
  );
}

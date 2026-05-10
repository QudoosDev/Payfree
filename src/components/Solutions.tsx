import { useRef } from 'react';
import { ArrowUpRight, MoreVertical } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left UI Preview */}
        <div className="flex-1 w-full relative">
          <div className="bg-[var(--color-primary)] rounded-[40px] p-8 md:p-12 soft-shadow-lg grid grid-cols-2 gap-4 relative overflow-hidden">
             
             {/* 15 Days Widget */}
             <div className="bg-white rounded-3xl p-6 border border-gray-100 soft-shadow-sm col-span-2 sm:col-span-1 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-full border border-gray-100 shadow-sm flex items-center justify-center mb-6">
                  <div className="w-3 h-3 border-2 border-[var(--color-primary)] rounded-full"></div>
                </div>
                <div>
                  <div className="font-bold text-lg text-[var(--color-text-dark)]">15 Days</div>
                  <div className="text-xs text-gray-400 mb-4">12 hrs. 23 minutes</div>
                  <div className="flex gap-1 flex-wrap w-full">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className={`w-2.5 h-2.5 rounded-full ${i < 8 ? 'bg-[var(--color-primary)] opacity-80' : 'bg-gray-100'}`}></div>
                    ))}
                  </div>
                </div>
             </div>

             {/* Smaller 2023 2024 Chart */}
             <div className="bg-white rounded-3xl p-4 border border-gray-100 soft-shadow-sm col-span-2 sm:col-span-1 flex flex-col">
                <div className="w-8 h-8 rounded-full border border-gray-100 shadow-sm flex items-center justify-center mb-auto">
                  <div className="w-3 h-3 bg-purple-300 rounded-sm"></div>
                </div>
                <div className="flex items-end justify-center gap-3 h-24 pt-4 border-b border-gray-100 pb-1 mt-6">
                   <div className="w-10 bg-gray-100 rounded-t-lg h-1/2 relative">
                      <span className="absolute -bottom-6 text-[10px] text-gray-400 left-1/2 -translate-x-1/2">2023</span>
                   </div>
                   <div className="w-10 bg-[var(--color-primary)] rounded-t-lg h-[90%] relative">
                      <span className="absolute -bottom-6 text-[10px] text-[var(--color-primary-dark)] left-1/2 -translate-x-1/2 font-medium">2024</span>
                   </div>
                </div>
             </div>

             {/* Main Stocks Chart Full Width */}
             <div className="bg-white rounded-3xl p-6 border border-gray-100 soft-shadow-sm col-span-2 mt-2">
                 <div className="flex justify-between items-start mb-6">
                   <div className="w-10 h-10 rounded-full border border-gray-100 shadow-sm flex items-center justify-center">
                     <MoreVertical size={16} className="text-gray-400" />
                   </div>
                   <div className="font-bold text-[var(--color-text-dark)] text-xl">$ 7150.80</div>
                 </div>
                 
                 {/* Line chart svg mockup */}
                 <div className="w-full h-16 mb-4 relative flex items-end">
                   <svg viewBox="0 0 300 50" preserveAspectRatio="none" className="w-full h-full text-[var(--color-primary)]">
                     <path d="M0,40 Q30,30 60,35 T120,20 T180,30 T240,10 T300,15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                     <circle cx="240" cy="10" r="4" fill="white" stroke="currentColor" strokeWidth="2.5" />
                   </svg>
                 </div>

                 <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                   <div>
                     <div className="font-bold text-[var(--color-text-dark)]">Main Stocks</div>
                     <div className="text-xs text-gray-400">Extended and Limited</div>
                   </div>
                   <div className="text-xs font-semibold text-[var(--color-primary-dark)] bg-green-50 px-2.5 py-1 rounded-md">+ 9.1%</div>
                 </div>
             </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-medium mb-6">
            Our Service
          </div>
          <h2 className="text-[40px] md:text-[52px] leading-tight font-bold text-[var(--color-text-dark)] tracking-tight text-balance mb-6">
            Solutions Designed<br className="hidden lg:block"/> for Every <span className="text-[var(--color-primary)]">Financial Need</span>
          </h2>
          <p className="text-gray-500 mb-10 max-w-lg leading-relaxed text-lg">
            From personal wealth management to business growth solutions, we
            offer services designed to simplify, secure and strengthen your
            financial journey.
          </p>

          <button className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple-soft)] text-white px-8 py-3.5 rounded-full font-medium hover:-translate-y-0.5 transition-transform shadow-[0_8px_20px_-8px_rgba(17,213,144,0.4)]">
            Explore Services <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

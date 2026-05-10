import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

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

    gsap.to(pillRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-medium mb-6">
          Our Features
        </div>
        <h2 className="text-[40px] md:text-[52px] leading-tight font-bold text-[var(--color-text-dark)] tracking-tight text-balance mb-4">
          Smart Features Designed for<br className="hidden md:block" /> <span className="text-[var(--color-primary)]">Smarter</span> Finance
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Everything you need to plan, track and grow your financial journey
          simple, secure and always in your control.
        </p>
      </div>

      {/* Main Feature Container */}
      <div className="bg-[var(--color-background-soft)] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
        
        {/* Left Content */}
        <div className="flex-1">
          <h3 className="text-[32px] md:text-[40px] leading-[1.1] font-bold text-[var(--color-text-dark)] mb-4">
            Personalized Financial<br /> <span className="text-[var(--color-primary)]">Dashboards</span>
          </h3>
          <p className="text-gray-500 mb-10 max-w-[400px]">
            Visualize income, expenses and investments in one place with dynamic
            dashboards tailored to your goals, habits and lifestyle.
          </p>

          <ul className="space-y-6">
            {[
              "All-in-One Money View",
              "Data That Adapts to You",
              "Smarter Decision-Making",
              "Time-Saving Simplicity"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-lg font-medium text-[var(--color-text-dark)]">
                <div className="w-4 h-4 rounded-full bg-[var(--color-primary)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right UI Preview */}
        <div className="flex-1 w-full max-w-[500px] relative mt-12 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent rounded-[32px] transform rotate-3" />
          
          <div className="relative bg-white rounded-[32px] p-8 soft-shadow-lg border border-gray-100">
            {/* Top Bar inside UI */}
            <div className="flex justify-between items-center mb-10 relative">
               
               {/* Floating CSAT Target Pill */}
               <div 
                 ref={pillRef}
                 className="absolute -top-12 -left-6 bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col items-center rotate-[-10deg] z-10"
               >
                 <div className="text-[10px] font-medium text-gray-500 self-start mb-2 uppercase tracking-wide">CSAT</div>
                 <div className="relative w-16 h-16 flex items-center justify-center">
                   <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                     <circle cx="18" cy="18" r="16" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                     <circle cx="18" cy="18" r="16" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeDasharray="100" strokeDashoffset="38" strokeLinecap="round" />
                   </svg>
                   <div className="absolute text-[11px] font-bold text-[var(--color-text-dark)]">62%</div>
                 </div>
                 <div className="text-[9px] text-gray-400 mt-2">Target: <span className="text-[var(--color-primary)] font-medium">80%</span></div>
               </div>

               {/* Right Filter Pill */}
               <div className="text-sm border border-gray-200 rounded-full px-4 py-1.5 flex items-center gap-2 ml-auto">
                 Weekly <ChevronDown size={14} className="text-gray-400" />
               </div>
            </div>

            {/* Fake Dot Matrix Data */}
            <div className="flex gap-1.5 mb-8 h-20 items-end">
               {[...Array(24)].map((_, i) => (
                 <div key={i} className="flex flex-col gap-1.5">
                   {[...Array(7)].map((_, j) => (
                     <div key={j} className={`w-2.5 h-2.5 rounded-full ${j > Math.sin(i * 0.5) * 2 + 3 ? 'bg-gray-100' : 'bg-[var(--color-primary)] opacity-90'}`} />
                   ))}
                 </div>
               ))}
            </div>

            <div className="border-t border-gray-100 pt-6">
              <div className="text-sm font-medium text-gray-400 mb-1">Total income</div>
              <div className="text-[32px] font-bold text-[var(--color-text-dark)] tracking-tight">
                <span className="text-[var(--color-primary)]">$</span> 12100.50
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

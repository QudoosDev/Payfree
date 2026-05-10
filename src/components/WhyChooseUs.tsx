import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
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
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-medium mb-6">
          Our Purpose
        </div>
        <h2 className="text-[40px] md:text-[52px] leading-tight font-bold text-[var(--color-text-dark)] tracking-tight text-balance mb-4">
          Why Choose Us for Your<br className="hidden md:block" /> <span className="text-[var(--color-primary)]">Financial Journey</span>
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          We combine technology, expertise and trust to deliver smarter, safer
          and simpler financial solutions tailored to your goals.
        </p>
      </div>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-[var(--color-background-soft)] rounded-[32px] p-8 flex flex-col items-start transition-all hover:-translate-y-1 hover:shadow-md border border-gray-100">
          
          {/* Card Graphic */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-8 relative">
            <div className="text-[10px] text-gray-400 font-medium mb-1 uppercase tracking-wider">Total Spent</div>
            <div className="text-lg font-bold text-[var(--color-text-dark)] mb-6">$682.5</div>
             {/* Simple Bar Chart */}
             <div className="flex items-end gap-2 h-20 w-full justify-between mt-2 border-b border-gray-100 pb-2">
                 {[40, 70, 40, 90, 50, 70, 30].map((h, i) => (
                   <div key={i} className="flex flex-col items-center gap-1 w-full relative group">
                      <div className={`w-full rounded-t-sm transition-all ${i === 3 ? 'bg-[var(--color-primary)] opacity-100' : 'bg-[#D1ECEA] opacity-80 group-hover:bg-[#b0e8e0]'}`} style={{ height: `${h}%` }}></div>
                      <div className="text-[8px] text-gray-300">{'JanFebMarAprMayJunJul'[i * 3]}{'JanFebMarAprMayJunJul'[i * 3 + 1]}{'JanFebMarAprMayJunJul'[i * 3 + 2]}</div>
                   </div>
                 ))}
             </div>
          </div>

          <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-3">Personalized Solutions</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            From saving for your future to scaling your business, our tailored
            approach ensures you get the right strategy.
          </p>
        </div>

        {/* Card 2 (Solid Green) */}
        <div className="bg-[var(--color-primary)] rounded-[32px] p-8 flex flex-col items-start transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(17,213,144,0.3)] text-white relative overflow-hidden">
          
          <div className="w-full mb-8 relative z-10">
            <div className="text-[10px] text-white/70 font-medium mb-1 uppercase tracking-wider">Total Spent</div>
            <div className="text-lg font-bold text-white mb-6">$682.5</div>
             {/* White Bar Chart */}
             <div className="flex items-end gap-2 h-20 w-full justify-between mt-2 border-b border-white/20 pb-2">
                 {[50, 40, 80, 50, 90, 60, 40, 40].map((h, i) => (
                   <div key={i} className="flex flex-col items-center gap-1 w-full relative">
                      <div className={`w-full rounded-t-sm transition-all ${i === 4 ? 'bg-white' : 'bg-white/40'}`} style={{ height: `${h}%` }}></div>
                      <div className="text-[8px] text-white/60">{'JanFebMarAprMayJunJulAug'[i * 3]}{'JanFebMarAprMayJunJulAug'[i * 3 + 1]}{'JanFebMarAprMayJunJulAug'[i * 3 + 2]}</div>
                   </div>
                 ))}
             </div>
          </div>

          <h3 className="text-2xl font-bold mb-3 relative z-10">Trusted by 50,000 Clients</h3>
          <p className="text-white/80 text-sm leading-relaxed relative z-10">
            With certified advisors and years of industry experience, we provide
            guidance rely on for long-term success.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[var(--color-background-soft)] rounded-[32px] p-8 flex flex-col items-start transition-all hover:-translate-y-1 hover:shadow-md border border-gray-100">
          
          {/* Card Graphic */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-8 relative">
            <div className="flex justify-between items-center mb-4">
               <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div> <span className="text-[10px] font-bold">Balance</span> <span className="text-[8px] text-[var(--color-primary)] bg-green-50 px-1 rounded">On track</span></div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <span className="text-xs font-bold block">43.50%</span>
                <span className="text-[8px] text-gray-400">-3.40%</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold block">$52,422</span>
                <span className="text-[8px] text-[var(--color-primary)] bg-green-50 px-1">+4.70%</span>
              </div>
            </div>

            {/* Simple SVG Line Chart */}
            <div className="w-full h-12 relative flex items-end overflow-hidden">
               {/* Background gradient area under line */}
               <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full opacity-20">
                 <path d="M0,20 Q10,10 20,25 T40,15 T60,5 T80,25 T100,10 L100,30 L0,30 Z" fill="var(--color-primary)" />
               </svg>
               {/* The Line */}
               <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full text-[var(--color-primary)] drop-shadow-sm absolute bottom-0 z-10">
                 <path d="M0,20 Q10,10 20,25 T40,15 T60,5 T80,25 T100,10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-3">AI-Powered Insights</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Monitor your campaigns in real time AI to ensure maximum effectiveness
            and identify areas for improvement.
          </p>
        </div>

      </div>
    </section>
  );
}

import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
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
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="relative bg-[var(--color-bg-tint)] rounded-[40px] px-8 py-24 overflow-hidden text-center flex flex-col items-center">
        
        {/* Floating UI Mocks */}
        {/* Left Side Cutoff */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 bg-white/60 backdrop-blur-sm p-4 rounded-3xl border border-white rotate-[-5deg] opacity-70 blur-[1px]">
          <div className="text-[10px] text-gray-400 mb-2">2024</div>
          <div className="h-6 bg-gray-100 rounded-md w-full mb-2"></div>
          <div className="h-6 bg-gray-100 rounded-md w-2/3"></div>
        </div>

        {/* Right Side Cutoff */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white rotate-[10deg] opacity-80 blur-[0.5px]">
          <div className="font-bold text-gray-700 text-sm mb-1">15 Days</div>
          <div className="text-[10px] text-gray-400 mb-3">12 hrs. 23 minutes</div>
          <div className="flex gap-1 flex-wrap">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`w-3 h-3 rounded-full ${i < 5 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'}`}></div>
            ))}
          </div>
        </div>

        {/* Bottom Chart Cutoff */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] h-48 bg-white/80 backdrop-blur-md rounded-[40px] p-8 border border-white shadow-sm flex flex-col justify-between">
           <div className="flex justify-between items-center w-full">
              <div className="w-8 h-8 rounded-full bg-gray-100"></div>
              <div className="font-bold text-lg">$ 7150.80</div>
           </div>
           <svg viewBox="0 0 300 50" preserveAspectRatio="none" className="w-full h-12 text-[var(--color-primary)] mt-auto">
             <path d="M0,40 Q30,30 60,35 T120,20 T180,30 T240,10 T300,15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
           </svg>
        </div>


        {/* Content */}
        <h2 className="relative z-10 text-[40px] md:text-[56px] leading-[1.1] font-bold text-[var(--color-text-dark)] tracking-tight text-balance mb-6 max-w-2xl mx-auto">
          Take control of your Financial Future
        </h2>
        
        <p className="relative z-10 text-gray-600 mb-10 max-w-md mx-auto text-lg">
          Join thousands of individuals and businesses already making smarter
          financial decisions with us.
        </p>

        <button className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple-soft)] text-white px-8 py-3.5 rounded-full font-medium shadow-[0_8px_20px_-8px_rgba(17,213,144,0.4)] hover:-translate-y-0.5 transition-transform">
          Get Started Today <ArrowUpRight size={18} />
        </button>
        
      </div>
    </section>
  );
}

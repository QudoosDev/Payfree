import { useRef } from 'react';
import { Lock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Reporting() {
  const containerRef = useRef<HTMLElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    gsap.fromTo(barsRef.current, {
      height: 0
    }, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      },
      height: (i, target) => target.dataset.h + "%",
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="bg-[var(--color-background-soft)] rounded-[40px] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
        
        {/* Left UI Preview */}
        <div className="flex-1 w-full max-w-[450px] relative">
          <div className="bg-white rounded-[40px] p-10 soft-shadow border border-gray-100 flex flex-col items-center">
             
             {/* System Lock Mock */}
             <div className="bg-gray-50 rounded-2xl p-6 w-full max-w-[200px] flex flex-col items-center justify-center border border-gray-100 mb-8 soft-shadow-sm">
                <Lock size={20} className="text-[var(--color-text-dark)] mb-3" />
                <div className="text-sm font-medium text-gray-600">System Lock</div>
             </div>

             <div className="flex flex-col items-center w-full mb-10">
               <div className="text-[56px] leading-none font-bold text-[var(--color-text-dark)] flex items-end tracking-tight">37<span className="text-[32px] text-[var(--color-primary)] ml-1 mb-1">%</span></div>
               <div className="text-gray-400 mt-2 font-medium">Growth rate</div>
             </div>

             {/* Animated Bar Chart */}
             <div className="flex items-end gap-[6px] h-[120px] w-full justify-center">
                {[30, 40, 50, 45, 60, 40, 55, 70, 50, 40, 45, 80, 40, 30].map((h, i) => (
                   <div 
                     key={i} 
                     ref={el => barsRef.current[i] = el}
                     data-h={h}
                     className={`w-3.5 rounded-full ${i === 11 ? 'bg-[var(--color-primary)]' : 'bg-[#E7ECE9]'}`} 
                   />
                ))}
             </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-[40px] md:text-[52px] leading-tight font-bold text-[var(--color-text-dark)] tracking-tight text-balance mb-6">
            Instant, One-<br className="hidden lg:block"/>Click <span className="text-[var(--color-primary)]">Reporting</span>
          </h2>
          <p className="text-gray-500 mb-10 max-w-md leading-relaxed text-lg">
            Generate detailed financial and tax reports in seconds, giving you
            clarity, accuracy and peace of mind without the complexity.
          </p>

          <ul className="space-y-6">
            {[
              "Faster Financial Clarity",
              "Error-Free Accuracy",
              "Decision-Ready Data",
              "Effortless Compliance"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-lg font-medium text-[var(--color-text-dark)]">
                <div className="w-4 h-4 rounded-full bg-[var(--color-primary)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

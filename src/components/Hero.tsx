import { ArrowUpRight } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

export default function Hero() {
  return (
    <section className="relative w-full pt-[100px] pb-10 flex flex-col items-center overflow-hidden">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#F8F8F8]">
        <img 
          src="/hero section background gradient.png" 
          alt="Background Gradient" 
          className="w-full h-[150%] md:h-full object-cover md:object-fill object-top pointer-events-none"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center mt-6">
        <h1 
          className="gsap-hero-h1 text-[56px] leading-[1.05] md:text-[72px] font-bold text-[var(--color-text-dark)] tracking-tight text-balance mb-6"
        >
          <span className="text-[var(--color-primary)]">Finance</span> Solutions Built<br className="hidden md:block"/> for Real Life
        </h1>

        <p 
          className="gsap-hero-sub text-base md:text-[18px] text-gray-500 max-w-[560px] mx-auto text-balance leading-relaxed mb-6"
        >
          We combine expert knowledge with smart tools to simplify your money
          journey. So you can focus on building the life you deserve.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20 mt-4"
        >
          <button className="gsap-hero-btn flex items-center gap-2 btn-custom-gradient text-[#1a1c1b] px-8 py-3.5 rounded-full font-medium">
            Get Started <ArrowUpRight size={18} className="opacity-40" />
          </button>
          <button className="gsap-hero-btn flex items-center btn-white-3d text-[#3E4441] px-8 py-3.5 rounded-full font-medium">
            Book a Call
          </button>
        </div>
      </div>

      <div 
        className="gsap-hero-dashboard relative z-10 w-full px-4"
      >
        <DashboardPreview />
      </div>
    </section>
  );
}

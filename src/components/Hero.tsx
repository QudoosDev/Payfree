import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

export default function Hero() {
  return (
    <section className="relative w-full pt-[100px] pb-10 flex flex-col items-center overflow-hidden">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#F8F8F8]">
        <img 
          src="/hero_section_background_gradient.png" 
          alt="Background Gradient" 
          className="w-full h-[150%] md:h-full object-cover md:object-fill object-top pointer-events-none"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center mt-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="gsap-hero-h1 text-[42px] leading-[1.05] sm:text-[56px] md:text-[72px] font-bold text-[var(--color-text-dark)] tracking-tight text-balance mb-5 mx-auto max-w-[320px] sm:max-w-none"
        >
          <span className="text-[var(--color-primary)]">Finance</span> Solutions Built<br className="hidden sm:block"/> for Real Life
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="gsap-hero-sub text-[15px] sm:text-base md:text-[18px] text-gray-500 max-w-[560px] mx-auto text-balance leading-relaxed mb-6 px-2"
        >
          We combine expert knowledge with smart tools to simplify your money
          journey. So you can focus on building the life you deserve.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 relative z-20 mt-4 px-4 sm:px-0"
        >
          <button className="gsap-hero-btn shrink-0 flex items-center justify-center gap-2 btn-custom-gradient text-[#1a1c1b] px-6 sm:px-8 py-3.5 rounded-full font-medium">
            Get Started <ArrowUpRight size={18} className="opacity-40" />
          </button>
          <button className="gsap-hero-btn shrink-0 flex items-center justify-center btn-white-3d text-[#3E4441] px-6 sm:px-8 py-3.5 rounded-full font-medium">
            Book a Call
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="gsap-hero-dashboard relative z-10 w-full px-4"
      >
        <DashboardPreview />
      </motion.div>
    </section>
  );
}

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-12 md:py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#EEF4F1] rounded-[48px] px-6 py-16 md:py-20 overflow-hidden text-center flex flex-col items-center"
      >
        
        {/* Floating UI Mocks */}
        {/* Left Side Cutoff */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block absolute top-[50%] left-0 -translate-y-1/2 -translate-x-[15%] w-[320px] opacity-100 z-0"
        >
          <img src="/final_CTA_left.png" alt="Decoration left" className="w-full h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)]" />
        </motion.div>

        {/* Right Side Cutoff */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block absolute top-[50%] right-0 -translate-y-1/2 translate-x-[15%] w-[340px] opacity-100 z-0"
        >
          <img src="/final_CTA_right.png" alt="Decoration right" className="w-full h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)]" />
        </motion.div>

        {/* Bottom Chart Cutoff - Positioned to be overlapped by button */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] w-[350px] md:w-[600px] lg:w-[680px] z-0"
        >
           <img src="/Last_CTA_center.png" alt="Decoration center" className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] mt-[45px]" />
        </motion.div>


        {/* Content */}
        <h2 className="relative z-10 text-[32px] md:text-[52px] leading-[1.1] font-[900] text-[#1a1c1b] tracking-[-0.03em] text-balance mb-5 max-w-3xl mx-auto">
          Take control of your Financial Future
        </h2>
        
        <p className="relative z-10 text-gray-500 mb-9 max-w-lg mx-auto text-sm md:text-md leading-relaxed font-medium">
          Join thousands of individuals and businesses already making smarter
          financial decisions with us.
        </p>

        <button className="relative z-20 flex items-center gap-2 btn-custom-gradient text-[#1a1c1b] px-9 py-3.5 rounded-full font-bold shadow-md transition-all active:scale-95 group">
          Get Started Today <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
        
        {/* Spacer to allow the bottom image to be visible and partially under the button */}
        <div className="h-24 md:h-32"></div>

      </motion.div>
    </section>
  );
}

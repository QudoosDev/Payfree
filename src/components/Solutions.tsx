import { ArrowUpRight, MoreVertical } from 'lucide-react';
import { motion } from 'motion/react';

export default function Solutions() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left UI Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full relative flex justify-center"
        >
          <img src="/solutions_designed.webp" alt="Solutions Designed for Every Financial Need" className="w-full h-auto max-w-[500px] object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.4)]" />
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
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

          <button className="flex items-center gap-2 btn-custom-gradient text-[#1a1c1b] px-8 py-3.5 rounded-full font-bold shadow-md transition-all active:scale-95 group">
            Explore Services <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

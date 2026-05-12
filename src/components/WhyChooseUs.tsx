import { motion } from 'motion/react';

export default function WhyChooseUs() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
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
      </motion.div>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[var(--color-background-soft)] rounded-[32px] p-8 flex flex-col items-start transition-all border border-gray-100 h-[486.625px]"
        >
          
          {/* Card Graphic */}
          <div className="w-full mb-8 flex justify-center">
            <img src="/Personilized_Solutions.webp" alt="Personalized Solutions" className="w-full h-auto object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)]" />
          </div>

          <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-3">Personalized Solutions</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            From saving for your future to scaling your business, our tailored
            approach ensures you get the right strategy.
          </p>
        </motion.div>

        {/* Card 2 (Solid Green) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--color-primary)] rounded-[32px] p-8 flex flex-col items-start transition-all text-white relative overflow-hidden"
        >
          
          <div className="w-full mb-8 relative z-10 flex justify-center">
            <img src="/Trusted_by_50000.webp" alt="Trusted by 50,000 Clients" className="w-full h-auto object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)]" />
          </div>

          <h3 className="text-2xl font-bold mb-3 relative z-10">Trusted by 50,000 Clients</h3>
          <p className="text-white/80 text-sm leading-relaxed relative z-10">
            With certified advisors and years of industry experience, we provide
            guidance rely on for long-term success.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[var(--color-background-soft)] rounded-[32px] p-8 flex flex-col items-start transition-all border border-gray-100"
        >
          
          {/* Card Graphic */}
          <div className="w-full mb-8 flex justify-center">
            <img src="/Ai_Powered.webp" alt="AI-Powered Insights" className="w-full h-auto object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)]" />
          </div>

          <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-3">AI-Powered Insights</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Monitor your campaigns in real time AI to ensure maximum effectiveness
            and identify areas for improvement.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

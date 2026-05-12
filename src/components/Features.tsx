import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
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
          Our Features
        </div>
        <h2 className="text-[40px] md:text-[52px] leading-tight font-bold text-[var(--color-text-dark)] tracking-tight text-balance mb-4">
          Smart Features Designed for<br className="hidden md:block" /> <span className="text-[var(--color-primary)]">Smarter</span> Finance
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Everything you need to plan, track and grow your financial journey
          simple, secure and always in your control.
        </p>
      </motion.div>

      {/* Main Feature Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[var(--color-background-soft)] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 overflow-hidden"
      >
        
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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full relative mt-12 lg:mt-0 flex justify-center items-center"
        >
          <img 
             src="/smart_feature_section.png" 
             alt="Smart features dashboard" 
             className="w-full max-w-[560px] h-auto object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.4)]" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

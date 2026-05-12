import { Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Reporting() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[var(--color-background-soft)] rounded-[40px] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16 overflow-hidden"
      >
        
        {/* Left UI Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-[450px] relative flex justify-center"
        >
          <img src="/instant_one.webp" alt="Instant Reporting" referrerPolicy="no-referrer" className="w-full h-auto object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.4)]" />
        </motion.div>

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

      </motion.div>
    </section>
  );
}

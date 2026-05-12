import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 pt-16 pb-8 border-t border-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
      >
        
        {/* Brand Column */}
        <div className="lg:col-span-4 pl-2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Payfree" className="h-8 object-contain" />
          </div>
          <p className="text-gray-500 text-sm max-w-[260px] leading-relaxed mb-8">
            Helping individuals and business simplify money management through
            smart tools and expert advice.
          </p>
          <div className="flex items-center gap-3">
             <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors">
               <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             </button>
             <button className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-transparent flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors">
               <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
             </button>
             <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors">
               <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
             </button>
          </div>
        </div>

        {/* Links Column */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-[var(--color-text-dark)] mb-6">Links</h4>
          <ul className="space-y-4">
            <li><a href="#hero" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">Home</a></li>
            <li><a href="#solutions" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">Solutions</a></li>
            <li><a href="#reporting" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">Analytics</a></li>
            <li><a href="#features" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">Features</a></li>
            <li><a href="#about" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Service Column */}
        <div className="lg:col-span-3">
          <h4 className="font-bold text-[var(--color-text-dark)] mb-6">Service</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">Wealth Management</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">Investment Planning</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">Business Finance and Loans</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">Tax & Accounting Solutions</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">Retirement & Insurance</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-3">
          <h4 className="font-bold text-[var(--color-text-dark)] mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="text-gray-500 text-sm">123 Finance Street, New York, USA</li>
            <li><a href="#" className="text-[var(--color-text-dark)] text-sm font-medium hover:text-[var(--color-primary)] transition-colors">Terms of Use</a></li>
            <li><a href="#" className="text-[var(--color-text-dark)] text-sm font-medium hover:text-[var(--color-primary)] transition-colors">Cookies Setting</a></li>
            <li><a href="#" className="text-[var(--color-text-dark)] text-sm font-medium hover:text-[var(--color-primary)] transition-colors">Legal</a></li>
          </ul>
        </div>

      </motion.div>

      <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-500">
          © 2026 Payfree Finance. All rights reserved.
        </div>
        <div className="flex gap-8 text-xs text-gray-500">
          <a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

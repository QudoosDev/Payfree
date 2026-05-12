import { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onAuth: (type: 'login' | 'signup') => void;
}

export default function Navbar({ onAuth }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-6 md:px-10 mt-2"
    >
      <div className="w-full max-w-[1440px] flex items-center justify-between relative z-50">
        
        {/* Logo */}
        <div className="flex items-center flex-1">
          <img src="/logo.webp" alt="Payfree" referrerPolicy="no-referrer" className="h-8 md:h-10 object-contain w-auto md:ml-[-140px]" />
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex flex-none items-center bg-white border border-[#E8EAE9] shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] rounded-full p-1.5 mx-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-white shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-1px_3px_rgba(0,0,0,0.02)] rounded-full pointer-events-none" />
          <a href="#hero" className="relative z-10 text-[14px] font-medium tracking-wide btn-custom-gradient text-[#1a1c1b] px-6 py-2 rounded-full">Home</a>
          <a href="#features" className="relative z-10 text-[14px] font-medium tracking-wide text-[#3E4441] px-5 py-2 hover:bg-[#F4F5F4] rounded-full transition-colors cursor-pointer">Features</a>
          <a href="#about" className="relative z-10 text-[14px] font-medium tracking-wide text-[#3E4441] px-5 py-2 hover:bg-[#F4F5F4] rounded-full transition-colors cursor-pointer">About</a>
          <a href="#reporting" className="relative z-10 text-[14px] font-medium tracking-wide text-[#3E4441] px-5 py-2 hover:bg-[#F4F5F4] rounded-full transition-colors cursor-pointer">Analytics</a>
          <a href="#solutions" className="relative z-10 text-[14px] font-medium tracking-wide text-[#3E4441] px-5 py-2 hover:bg-[#F4F5F4] rounded-full transition-colors cursor-pointer">Solutions</a>
        </div>

        {/* Right CTA (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end">
          <div className="flex items-center gap-1 bg-white border border-[#E8EAE9] shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] rounded-full p-1.5 relative overflow-hidden md:mr-[-160px]">
            <div className="absolute inset-0 bg-white shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-1px_3px_rgba(0,0,0,0.02)] rounded-full pointer-events-none" />
            <button 
              onClick={() => onAuth('login')}
              className="relative z-10 text-[14px] font-medium tracking-wide bg-transparent text-[#3E4441] px-5 py-2 rounded-full hover:bg-[#F4F5F4] transition-colors cursor-pointer"
            >
              Log in
            </button>
            <button 
              onClick={() => onAuth('signup')}
              className="relative z-10 text-[14px] font-medium tracking-wide btn-custom-gradient text-[#1a1c1b] px-6 py-2 rounded-full"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex flex-1 justify-end md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#3E4441] bg-white/70 backdrop-blur-md rounded-full border border-[#E8EAE9] cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <AlignJustify size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-[1440px] mt-4 md:hidden z-40"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col gap-2">
              <a href="#hero" onClick={() => setIsOpen(false)} className="text-[15px] font-medium text-[#1a1c1b] px-4 py-3 rounded-xl bg-gray-50">Home</a>
              <a href="#features" onClick={() => setIsOpen(false)} className="text-[15px] font-medium text-[#3E4441] px-4 py-3 rounded-xl hover:bg-gray-50">Features</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-[15px] font-medium text-[#3E4441] px-4 py-3 rounded-xl hover:bg-gray-50">About</a>
              <a href="#reporting" onClick={() => setIsOpen(false)} className="text-[15px] font-medium text-[#3E4441] px-4 py-3 rounded-xl hover:bg-gray-50">Analytics</a>
              <a href="#solutions" onClick={() => setIsOpen(false)} className="text-[15px] font-medium text-[#3E4441] px-4 py-3 rounded-xl hover:bg-gray-50">Solutions</a>
              <div className="h-px bg-gray-100 my-2" />
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onAuth('login');
                }}
                className="text-[15px] font-medium text-[#3E4441] px-4 py-3 w-full text-center cursor-pointer"
              >
                Log in
              </button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onAuth('signup');
                }}
                className="text-[15px] font-medium btn-custom-gradient text-[#1a1c1b] px-4 py-3 text-center rounded-xl my-1 cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

import { AlignJustify } from 'lucide-react';

export default function Navbar() {
  return (
    <nav 
      className="gsap-nav fixed top-6 left-0 right-0 z-50 flex justify-center px-6 md:px-10 mt-2"
    >
      <div className="w-full max-w-[1440px] flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center flex-1">
          <img src="/logo.png" alt="Payfree" className="h-8 md:h-10 object-contain w-auto md:ml-[-140px]" />
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex flex-none items-center bg-white border border-[#E8EAE9] shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] rounded-full p-1.5 mx-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-white shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-1px_3px_rgba(0,0,0,0.02)] rounded-full pointer-events-none" />
          <a href="#" className="relative z-10 text-[14px] font-medium tracking-wide btn-custom-gradient text-[#1a1c1b] px-6 py-2 rounded-full">Home</a>
          <a href="#" className="relative z-10 text-[14px] font-medium tracking-wide text-[#3E4441] px-5 py-2 hover:bg-[#F4F5F4] rounded-full transition-colors cursor-pointer">Dashboard</a>
          <a href="#" className="relative z-10 text-[14px] font-medium tracking-wide text-[#3E4441] px-5 py-2 hover:bg-[#F4F5F4] rounded-full transition-colors cursor-pointer">Analytics</a>
          <a href="#" className="relative z-10 text-[14px] font-medium tracking-wide text-[#3E4441] px-5 py-2 hover:bg-[#F4F5F4] rounded-full transition-colors cursor-pointer">Teams</a>
          <a href="#" className="relative z-10 text-[14px] font-medium tracking-wide text-[#3E4441] px-5 py-2 hover:bg-[#F4F5F4] rounded-full transition-colors cursor-pointer">Reports</a>
        </div>

        {/* Right CTA (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end">
          <div className="flex items-center gap-1 bg-white border border-[#E8EAE9] shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] rounded-full p-1.5 relative overflow-hidden md:mr-[-160px]">
            <div className="absolute inset-0 bg-white shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-1px_3px_rgba(0,0,0,0.02)] rounded-full pointer-events-none" />
            <button className="relative z-10 text-[14px] font-medium tracking-wide bg-transparent text-[#3E4441] px-5 py-2 rounded-full hover:bg-[#F4F5F4] transition-colors cursor-pointer">
              Log in
            </button>
            <button className="relative z-10 text-[14px] font-medium tracking-wide btn-custom-gradient text-[#1a1c1b] px-6 py-2 rounded-full">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex flex-1 justify-end md:hidden">
          <button className="p-2 text-[#3E4441] bg-white/70 backdrop-blur-md rounded-full border border-[#E8EAE9] cursor-pointer">
            <AlignJustify size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github, Chrome, CheckCircle2 } from 'lucide-react';

interface AuthProps {
  onBack: () => void;
  onSuccess: (type: 'Login' | 'Signup') => void;
  initialType?: 'login' | 'signup';
}

export default function Auth({ onBack, onSuccess, initialType = 'login' }: AuthProps) {
  const [type, setType] = useState<'login' | 'signup'>(initialType);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    onSuccess(type === 'login' ? 'Login' : 'Signup');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      </div>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-8 left-8 md:top-12 md:left-12 text-sm font-medium text-gray-500 hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 cursor-pointer z-10"
      >
        <span className="text-lg">←</span> Back to home
      </motion.button>

      <div className="w-full max-w-[480px] relative z-10">
        {/* Logo/Header */}
        <div className="text-center mb-10">
          <motion.img 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            src="/logo.webp" 
            alt="Payfree" 
            className="h-10 mx-auto mb-6 object-contain" 
          />
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-[var(--color-text-dark)] tracking-tight mb-2"
          >
            {type === 'login' ? 'Welcome back' : 'Create an account'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500"
          >
            {type === 'login' 
              ? 'Enter your credentials to access your dashboard' 
              : 'Join over 50,000 users managing their finances smarter'}
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8 relative">
          <motion.div 
            className="absolute top-1.5 bottom-1.5 left-1.5 right-1.5 w-[calc(50%-3px)] bg-white rounded-xl shadow-sm z-0"
            animate={{ x: type === 'login' ? '0%' : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <button 
            onClick={() => setType('login')}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-xl relative z-10 transition-colors ${type === 'login' ? 'text-[var(--color-primary)]' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Log In
          </button>
          <button 
            onClick={() => setType('signup')}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-xl relative z-10 transition-colors ${type === 'signup' ? 'text-[var(--color-primary)]' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence mode="wait">
            {type === 'signup' && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[var(--color-primary)] transition-colors" />
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:bg-white focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/5 outline-none transition-all"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[var(--color-primary)] transition-colors" />
            <input 
              required
              type="email" 
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:bg-white focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/5 outline-none transition-all"
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[var(--color-primary)] transition-colors" />
            <input 
              required
              type="password" 
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:bg-white focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/5 outline-none transition-all"
            />
          </div>

          {type === 'login' && (
            <div className="flex justify-end">
              <button type="button" className="text-xs font-semibold text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                Forgot password?
              </button>
            </div>
          )}

          <button 
            disabled={isLoading}
            className="w-full btn-custom-gradient py-4 rounded-2xl text-[var(--color-text-dark)] font-bold text-base flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            {isLoading ? (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-[var(--color-text-dark)]/20 border-t-[var(--color-text-dark)] rounded-full"
              />
            ) : (
              <>
                {type === 'login' ? 'Sign In' : 'Create Account'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest text-gray-400 font-bold">
            <span className="bg-white px-4">Or continue with</span>
          </div>
        </div>

        {/* Social buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3.5 hover:bg-gray-50 transition-colors cursor-pointer group">
            <Chrome className="w-5 h-5 text-gray-600 group-hover:text-[#4285F4] transition-colors" />
            <span className="text-sm font-bold text-gray-700">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3.5 hover:bg-gray-50 transition-colors cursor-pointer group">
            <Github className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
            <span className="text-sm font-bold text-gray-700">GitHub</span>
          </button>
        </div>

        {/* Legal */}
        <p className="mt-10 text-center text-xs text-gray-400 leading-relaxed max-w-[320px] mx-auto">
          By continuing, you agree to Payfree's 
          <a href="#" className="font-bold text-gray-600 hover:text-[var(--color-primary)] mx-1 transition-all">Terms of Service</a> 
          and 
          <a href="#" className="font-bold text-gray-600 hover:text-[var(--color-primary)] mx-1 transition-all">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

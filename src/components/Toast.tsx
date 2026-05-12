import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

export default function CustomToast({ isVisible, message, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed top-10 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-4 bg-[var(--color-primary)] text-[var(--color-text-dark)] px-6 py-4 rounded-3xl shadow-[0_20px_50px_rgba(17,213,144,0.3)] min-w-[320px] max-w-md border border-white/20"
        >
          <div className="bg-white/20 p-2 rounded-full">
            <CheckCircle2 className="w-6 h-6 text-[var(--color-text-dark)]" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-base leading-tight">Success!</p>
            <p className="text-sm opacity-80 font-medium">{message}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-black/5 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 opacity-50 hover:opacity-100" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

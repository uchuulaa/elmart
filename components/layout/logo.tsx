"use client";

import { ShoppingBag } from "lucide-react";
import { Montserrat } from 'next/font/google';
import { motion } from "framer-motion";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['700']
});

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        animate={{
          rotateY: 360,
          background: [
            "linear-gradient(to right, #8B5CF6, #6366F1)",
            "linear-gradient(to right, #EC4899, #8B5CF6)",
            "linear-gradient(to right, #6366F1, #EC4899)",
            "linear-gradient(to right, #8B5CF6, #6366F1)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          background: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="relative rounded-md p-1"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <ShoppingBag className="h-6 w-6 text-white" />
        <div className="absolute inset-0 rounded-md blur-lg opacity-30 animate-pulse" 
          style={{
            background: "inherit",
            filter: "blur(8px)",
          }}
        />
      </motion.div>
      <motion.span 
        className={`text-xl font-bold ${montserrat.className}`}
        animate={{ 
          background: [
            "linear-gradient(to right, #8B5CF6, #6366F1)",
            "linear-gradient(to right, #EC4899, #8B5CF6)",
            "linear-gradient(to right, #6366F1, #EC4899)",
            "linear-gradient(to right, #8B5CF6, #6366F1)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent">EL</span>
        <span className="font-serif italic bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Mart</span>
      </motion.span>
    </div>
  );
}
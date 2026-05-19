"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import { MockupCards } from "@/components/MockupCards";
import { FiArrowUpRight } from "react-icons/fi";
import { SiKlarna, SiCoinbase, SiInstacart } from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background diagonal decorative element */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-finpay-slate opacity-40 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 -z-10 w-full h-[600px] transform skew-y-[-12deg] bg-finpay-slate opacity-20 translate-y-1/2" />
      
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Hero Content */}
          <div className="space-y-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold text-[#0F2930] leading-[1.1] tracking-tight"
            >
              Invest smarter<br />
              grow automatically<br />
              all your wealth.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg max-w-md leading-relaxed"
            >
              Empowering investors with intelligent portfolio tracking,
              powerful analytics, and automated growth strategies.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center p-2 bg-white rounded-2xl border border-gray-200 shadow-sm max-w-md"
            >
              <input 
                type="email" 
                placeholder="Your bussiness email" 
                className="flex-1 px-4 py-3 outline-none text-gray-700 bg-transparent placeholder:text-gray-400"
              />
              <Button variant="primary" className="gap-2 px-6 rounded-xl">
                Get Started <FiArrowUpRight size={20} />
              </Button>
            </motion.div>

            {/* Trust Logos */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-10 flex items-center gap-10"
            >
              <div className="flex items-center gap-2 text-xl font-bold text-[#0F2930]">
                <SiKlarna size={28} /> Klarna.
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-[#0F2930]">
                <SiCoinbase size={28} /> coinbase
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-[#0F2930]">
                <SiInstacart size={28} /> instacart
              </div>
            </motion.div>
          </div>

          {/* Right Column - Mockups */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <MockupCards />
          </div>

        </div>
      </div>
    </main>
  );
}

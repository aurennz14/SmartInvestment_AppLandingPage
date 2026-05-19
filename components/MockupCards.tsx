"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineCreditCard, MdAccountBalance } from "react-icons/md";

export function MockupCards() {
  const [selectedMethod, setSelectedMethod] = useState<"card" | "bank">("card");

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-finpay-slate rounded-full blur-3xl opacity-50 transform -translate-x-12 translate-y-12" />

      {/* Main Invoice Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-10 right-10 left-10 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 z-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-finpay-teal text-white p-2 rounded-lg">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Aurentino</h3>
            <p className="text-xs text-gray-500">aurentino@gmail.com</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-500 text-sm mb-1">Invoice</p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">$1,876,580</h2>
          <p className="text-gray-400 text-xs mt-1">April 21, 2024</p>
        </div>

        <div className="space-y-3 mb-6">
          <div 
            onClick={() => setSelectedMethod("card")}
            className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${selectedMethod === "card" ? "border-finpay-teal bg-[#f0f9fa]" : "border-gray-100"}`}
          >
            <div className="flex items-center gap-3">
              <MdOutlineCreditCard className="text-gray-600" size={20} />
              <span className="text-sm font-medium text-gray-800">Credit Card</span>
            </div>
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedMethod === "card" ? "border-finpay-teal" : "border-gray-300"}`}>
              {selectedMethod === "card" && <div className="w-2 h-2 rounded-full bg-finpay-teal" />}
            </div>
          </div>

          <div 
            onClick={() => setSelectedMethod("bank")}
            className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${selectedMethod === "bank" ? "border-finpay-teal bg-[#f0f9fa]" : "border-gray-100"}`}
          >
            <div className="flex items-center gap-3">
              <MdAccountBalance className="text-gray-600" size={20} />
              <span className="text-sm font-medium text-gray-800">Bank Account</span>
            </div>
             <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedMethod === "bank" ? "border-finpay-teal" : "border-gray-300"}`}>
              {selectedMethod === "bank" && <div className="w-2 h-2 rounded-full bg-finpay-teal" />}
            </div>
          </div>
        </div>

        <button className="w-full bg-[#0F2930] text-white rounded-xl py-4 font-medium hover:bg-[#1a3a44] transition-colors">
          Pay
        </button>
      </motion.div>

      {/* Overlapping Credit Card - Floating Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute -top-10 -right-8 w-64 z-20"
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="bg-finpay-teal rounded-2xl p-6 text-white shadow-2xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #2A8E9E 0%, #1e6d7a 100%)",
            boxShadow: "0 25px 50px -12px rgba(42, 142, 158, 0.5)"
          }}
        >
          {/* Decorative shapes on card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-8 -mb-8" />
          
          <p className="text-sm opacity-80 mb-1">Credit Card</p>
          <p className="text-xl font-medium mb-8 tracking-widest">234 **** ****</p>
          
          <div className="flex justify-between items-end">
            <span className="font-bold text-xl italic">VISA</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
              <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

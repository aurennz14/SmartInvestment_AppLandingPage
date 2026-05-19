"use client";

import Link from "next/link";
import { Button } from "./Button";
import { motion } from "framer-motion";

export function Navbar() {
  const links = ["Products", "Customers", "Pricing", "Learn"];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-2">
        <div className="bg-finpay-dark text-white p-1 rounded">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 17L11 9L15 13L21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 5H21V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-bold text-xl text-finpay-dark tracking-tight">SmartInvestment</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link key={link} href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-finpay-dark font-medium transition-colors">
            {link}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" className="rounded-full px-8 py-2 border-gray-200">Login</Button>
        <Button variant="primary" className="rounded-full px-8 py-2">Sign Up</Button>
      </div>
    </motion.nav>
  );
}

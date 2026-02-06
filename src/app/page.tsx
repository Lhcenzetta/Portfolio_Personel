"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import WelcomePage from "@/components/ui/WelcomePage";
import ConstellationBackground from "@/components/ui/ConstellationBackground";
import Sidebar from "@/components/ui/Sidebar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import MobileNav from "@/components/ui/MobileNav";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <AnimatePresence>
        {showWelcome && (
          <WelcomePage onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <ConstellationBackground />

          <div className="lg:pl-80">
            {/* Sidebar Toggle Button (Mobile) */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden fixed top-6 right-6 z-50 p-3.5 rounded-full bg-zinc-900/90 backdrop-blur-xl border border-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-white/20 transition-colors"
            >
              <Menu size={20} />
            </motion.button>

            <div className="hidden lg:block">
              <Sidebar />
            </div>

            {/* Mobile Sidebar (Drawer) */}
            <AnimatePresence>
              {isSidebarOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
                  />
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-y-0 left-0 w-72 z-[70] lg:hidden"
                  >
                    <Sidebar onClose={() => setIsSidebarOpen(false)} isMobile />
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            <MobileNav />

            <div className="px-6 pb-24 pt-4 md:px-12 md:pb-20 md:pt-8 max-w-6xl mx-auto space-y-20 md:space-y-28">
              <Hero />
              <Projects />
              <Experience />
              <Contact />
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}

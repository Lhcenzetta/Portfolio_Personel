"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BottomNav() {
    const categories = [
        { name: "All", active: true },
        { name: "AI/ML", active: false },
        { name: "Web Dev", active: false },
        { name: "Cloud", active: false },
    ];

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 md:px-12"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Categories */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
                ${cat.active
                                    ? "bg-white text-black"
                                    : "bg-transparent text-zinc-400 hover:text-white border border-white/10 hover:border-white/30"}
              `}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* View Experience Action */}
                <a
                    href="#experience"
                    className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors group"
                >
                    View Experience
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>

            </div>
        </motion.div>
    );
}

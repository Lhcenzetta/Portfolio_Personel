"use client";

import { Brain, Code, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileNav() {
    const navItems = [
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto lg:hidden">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-1 p-1.5 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50"
            >
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        {/* <item.icon className="w-4 h-4" /> Icon optional if just text pills */}
                        {item.label}
                    </a>
                ))}
            </motion.div>
        </div>
    );
}

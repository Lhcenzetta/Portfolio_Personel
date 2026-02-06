"use client";

import { motion } from "framer-motion";
import { Code, Layers, Briefcase, ArrowRight, Mail } from "lucide-react";

const coreTech = [
    "Python", "FastAPI", "Next.js",
    "Scikit-learn", "Google Gemini", "Docker",
    "PostgreSQL", "TypeScript"
];

const stats = [
    { label: "Years Exp.", value: "1+" },
    { label: "Projects", value: "15+" },
    { label: "Clients", value: "2+" },
];

interface SidebarProps {
    onClose?: () => void;
    isMobile?: boolean;
}

export default function Sidebar({ onClose, isMobile }: SidebarProps) {
    return (
        <motion.aside
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: isMobile ? 0 : 0.5 }}
            className={`
                ${isMobile ? "h-screen w-full" : "lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-80 border-r"}
                bg-zinc-900/95 lg:bg-zinc-900/50 backdrop-blur-xl lg:backdrop-blur-md border-white/5 p-8 flex flex-col gap-8 overflow-y-auto z-50
            `}
        >
            {/* Mobile Close Button */}
            {isMobile && (
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                >
                    <ArrowRight className="transform rotate-180" size={20} />
                </button>
            )}

            {/* Header / Personal Summary */}
            <div className="space-y-4">
                <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">Lahcen Ait Zetta</h2>
                    <p className="text-sm text-zinc-400">AI Engineer & Full-Stack Dev</p>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                    Available for work
                </div>
            </div>

            <div className="w-full h-px bg-white/10" />

            {/* Core Technologies */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
                    <Code size={16} />
                    <span>Core Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {coreTech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-full h-px bg-white/10" />

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="flex-grow" />

            {/* Experience Link */}
            <div className="space-y-3">
                <a
                    href="#experience"
                    className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-zinc-900 text-white group-hover:bg-black transition-colors">
                            <Briefcase size={18} />
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-medium text-white">Experience</div>
                            <div className="text-xs text-zinc-500">View Career Path</div>
                        </div>
                    </div>
                    <ArrowRight size={16} className="text-zinc-500 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                </a>

                <a
                    href="mailto:lhsenztta65@gmail.com"
                    className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border border-emerald-500/20 hover:border-emerald-500/30 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                            <Mail size={18} />
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-medium text-white">Get in Touch</div>
                            <div className="text-xs text-zinc-500">Contact Me</div>
                        </div>
                    </div>
                    <ArrowRight size={16} className="text-emerald-500/50 group-hover:text-emerald-400 transform group-hover:translate-x-1 transition-all" />
                </a>
            </div>

        </motion.aside>
    );
}

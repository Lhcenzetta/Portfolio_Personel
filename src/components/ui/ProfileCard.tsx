"use client";

import { motion } from "framer-motion";

export default function ProfileCard() {
    const technologies = [
        "React/Next.js",
        "FastAPI",
        "Python",
        "Scikit-learn",
        "Google Gemini AI",
        "TypeScript",
        "Docker",
        "PostgreSQL"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-md ml-auto bg-zinc-900/80 lg:bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[24px] p-6 shadow-lg shadow-black/5 overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -ml-10 -mb-10" />

            {/* Header */}
            <div className="relative flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 shadow-lg shrink-0">
                    <span className="text-2xl font-bold text-white">L</span>
                </div>

                <div className="w-full">
                    <h3 className="text-lg font-bold text-white leading-tight">Lahcen Ait zetta</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm">AI & Machine Learning Developer</p>

                    {/* Desktop Badge */}
                    <div className="hidden lg:inline-flex items-center gap-2 mt-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-emerald-400">Available for work</span>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-white/10 mb-6" />

            {/* Technologies */}
            <div className="mb-6">
                {/* <h4 className="text-sm font-semibold text-white mb-3">Core Technologies</h4> */}
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <div
                            key={tech}
                            className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-zinc-300 hover:bg-white/10 transition-colors cursor-default"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-px w-full bg-white/10 mb-6" />

            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="bg-black/40 lg:bg-transparent rounded-xl p-3 lg:p-0 text-center border border-white/5 lg:border-none">
                    <div className="text-xl lg:text-2xl font-bold text-white mb-0.5">1 <span className="text-sm lg:hidden">Year</span><span className="hidden lg:inline">+</span></div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider"><span className="lg:hidden">Experience</span><span className="hidden lg:inline">Years</span></div>
                </div>
                <div className="bg-black/40 lg:bg-transparent rounded-xl p-3 lg:p-0 text-center border border-white/5 lg:border-none">
                    <div className="text-xl lg:text-2xl font-bold text-white mb-0.5">15 <span className="text-sm lg:hidden">Projects</span><span className="hidden lg:inline">+</span></div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider"><span className="lg:hidden">Completed</span><span className="hidden lg:inline">Projects</span></div>
                </div>
                {/* Desktop Client Stat */}
                <div className="hidden lg:block text-center">
                    <div className="text-2xl font-bold text-white mb-1">2+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Clients</div>
                </div>
            </div>
        </motion.div>
    );
}

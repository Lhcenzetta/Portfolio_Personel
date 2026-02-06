"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Background3D from "@/components/three/Background3D";

export default function WelcomePage({ onComplete }: { onComplete: () => void }) {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const name = "LAHCEN AIT ZETTA";

    useEffect(() => {
        // Progress counter animation
        const duration = 3000; // 3 seconds
        const interval = 50; // Update every 50ms
        const steps = duration / interval;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, interval);

        // Completion timeout
        const completeTimer = setTimeout(() => {
            setLoading(false);
            setTimeout(onComplete, 1000);
        }, duration + 500); // Slight buffer after 100%

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden">
            <Background3D />

            <div className="relative flex flex-col items-center w-full max-w-[90vw] px-4">
                <div className="flex flex-wrap justify-center gap-x-1 md:gap-x-2 text-center leading-none">
                    {name.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                transition: {
                                    duration: 0.8,
                                    delay: index * 0.05,
                                    ease: [0.2, 0, 0.2, 1]
                                }
                            }}
                            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    className="h-px bg-white/20 mt-4 sm:mt-8"
                />

                <div className="mt-6 sm:mt-8 w-full max-w-xs h-1 bg-zinc-800 rounded-full overflow-hidden relative">
                    <motion.div
                        className="h-full bg-emerald-500 relative"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }} // Smooth updates based on progress state
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-emerald-200 to-transparent opacity-50" />
                    </motion.div>
                </div>

                <div className="mt-3 sm:mt-4 flex items-center justify-between w-full max-w-xs text-[10px] sm:text-xs font-mono uppercase tracking-widest">
                    <span className="text-emerald-500 animate-pulse">
                        System_Loading
                    </span>
                    <span className="text-white font-bold">
                        {Math.round(progress).toString().padStart(3, '0')}%
                    </span>
                </div>
            </div>

            <AnimatePresence>
                {!loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black pointer-events-none"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

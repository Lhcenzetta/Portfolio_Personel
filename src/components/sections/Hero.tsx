"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProfileCard from "@/components/ui/ProfileCard";

export default function Hero() {

    return (
        <section className="relative min-h-[85vh] flex items-center py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">

                    {/* Left Column: Intro & CTAs */}
                    <div className="flex flex-col items-start text-left space-y-8">

                        {/* Main Headings */}
                        <div className="space-y-4 lg:space-y-6 w-full text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] lg:leading-[0.9]">
                                Hi, I&apos;m <br className="lg:hidden" />
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="lg:hidden relative inline-block"
                                >
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-white bg-[length:200%_auto] animate-shimmer">
                                        Lahcen Ait Zetta
                                    </span>
                                    {/* Subtle Glow Backdrop */}
                                    <span className="absolute inset-0 blur-2xl bg-white/5 -z-10" />
                                </motion.span>
                                <span className="hidden lg:inline text-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-white lg:to-zinc-500">Lahcen</span>
                            </h1>

                            {/* Mobile Subheadline */}
                            <h2 className="lg:hidden text-lg sm:text-xl font-medium text-zinc-300 leading-tight">
                                I design and develop intelligent systems using <span className="text-white font-semibold underline decoration-zinc-700 underline-offset-4">data</span>, <span className="text-white font-semibold underline decoration-zinc-700 underline-offset-4">machine learning</span>, and <span className="text-white font-semibold underline decoration-zinc-700 underline-offset-4">software engineering</span>.
                            </h2>

                            {/* Desktop Subheadline */}
                            <h2 className="hidden lg:block text-xl md:text-2xl lg:text-3xl font-semibold text-zinc-300 leading-tight max-w-3xl">
                                I design and develop intelligent systems using <span className="text-white font-semibold">data</span>, <span className="text-white font-semibold">machine learning</span>, and <span className="text-white font-semibold">software engineering</span>.
                            </h2>
                        </div>

                        {/* Mobile Description */}
                        <div className="lg:hidden w-full text-center">
                            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed font-normal mx-auto opacity-80">
                                AI Engineer & Full-Stack Developer specializing in scalable machine learning applications and modern web technologies.
                            </p>
                        </div>

                        {/* Desktop Description */}
                        <p className="hidden lg:block text-base md:text-lg text-zinc-400 max-w-lg leading-relaxed font-normal">
                            AI Engineer & Full-Stack Developer specializing in scalable machine learning applications and modern web technologies.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 w-full">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#projects"
                                className="group relative flex items-center justify-center flex-1 sm:flex-initial px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-white rounded-full transition-transform group-hover:scale-105" />
                                <span className="relative text-black flex items-center gap-2">
                                    View Work
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#contact"
                                className="group relative flex items-center justify-center flex-1 sm:flex-initial px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm transition-colors group-hover:bg-white/10 group-hover:border-white/20" />
                                <span className="relative text-white">Contact</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Right Column: Profile Card */}
                    <div className="flex w-full justify-center lg:justify-end mt-8 lg:mt-0">
                        <ProfileCard />
                    </div>

                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProfileCard from "@/components/ui/ProfileCard";
import NeuralBackground from "@/components/ui/NeuralBackground";
import LocalGreeting from "@/components/ui/LocalGreeting";

export default function Hero() {

    return (
        <section className="relative min-h-screen flex items-center pt-8 pb-20 overflow-hidden">
            {/* 3D Background */}
            <NeuralBackground />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">

                    {/* Left Column: Intro & CTAs */}
                    <div className="flex flex-col items-start text-left space-y-10">

                        {/* Main Headings */}
                        <div className="space-y-6 lg:space-y-8 w-full text-center lg:text-left">
                            {/* Local Greeting added here */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="mb-4" // Added margin-bottom for spacing
                            >
                                <LocalGreeting />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                AI Engineer & Full-Stack Developer
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.9] lg:leading-[0.85] mb-8">
                                AI & Full-Stack <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-600 bg-[length:200%_auto] animate-shimmer">
                                    Engineering.
                                </span>
                            </h1>

                            {/* Refined Subheadline (Impactful Value Prop) */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-lg md:text-xl lg:text-2xl font-medium text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                            >
                                Designing high-performance <span className="text-white font-bold">ML Pipelines</span> and robust <span className="text-white font-bold">Full-Stack Architectures</span> for the era of Generative AI.
                            </motion.p>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-lg text-zinc-400 max-w-lg leading-relaxed font-normal text-center lg:text-left mx-auto lg:mx-0"
                        >
                            Specializing in <span className="text-zinc-200">MLOps</span>, <span className="text-zinc-200">Distributed Systems</span>, and <span className="text-zinc-200">Modern Web Architectures</span> to build the next generation of data-driven products.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 w-full"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="group relative flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 bg-white text-black overflow-hidden"
                            >
                                <span className="relative flex items-center gap-2">
                                    Explore Projects
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="group flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm border border-white/10 text-white backdrop-blur-sm transition-all duration-300"
                            >
                                Contact Me
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Column: Profile Card */}
                    <div className="flex w-full justify-center lg:justify-end mt-12 lg:mt-0">
                        <ProfileCard />
                    </div>

                </div>
            </div>
        </section>
    );
}

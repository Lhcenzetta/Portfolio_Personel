"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Code2, Server, Layout, Binary, Target, Lightbulb } from "lucide-react";
import { useEffect } from "react";

interface ProjectCaseStudyProps {
    project: {
        title: string;
        category: string;
        description: string;
        longDescription: string;
        problem: string;
        solution: string;
        architecture: string;
        technologies: string[];
        metrics: { label: string; value: string }[];
        links: { github: string; demo?: string };
    };
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectCaseStudy({ project, isOpen, onClose }: ProjectCaseStudyProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-5xl max-h-full bg-zinc-900 border border-white/10 rounded-[32px] overflow-hidden flex flex-col shadow-2xl"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-10"
                    >
                        <X size={20} />
                    </button>

                    <div className="overflow-y-auto flex-grow p-8 md:p-12">
                        {/* Header */}
                        <div className="space-y-4 mb-12">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                {project.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                {project.title}
                            </h2>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href={project.links.github} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:scale-105 transition-transform">
                                    <Github size={18} /> Source Code
                                </a>
                                {project.links.demo && (
                                    <a href={project.links.demo} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-colors">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Overview Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div className="space-y-8">
                                <section>
                                    <h3 className="flex items-center gap-3 text-lg font-bold text-white mb-4">
                                        <Target className="text-emerald-500" /> The Problem
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {project.problem}
                                    </p>
                                </section>

                                <section>
                                    <h3 className="flex items-center gap-3 text-lg font-bold text-white mb-4">
                                        <Lightbulb className="text-emerald-500" /> The Solution
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {project.solution}
                                    </p>
                                </section>
                            </div>

                            <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-6">Key Metrics & Results</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {project.metrics.map((metric, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5">
                                            <span className="text-zinc-400 text-sm">{metric.label}</span>
                                            <span className="text-emerald-400 font-bold">{metric.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Architecture & Tech */}
                        <div className="space-y-12">
                            <section>
                                <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                                    <Server className="text-indigo-500" /> Technical Architecture
                                </h3>
                                <div className="p-8 rounded-[24px] bg-zinc-950 border border-white/5 leading-relaxed text-zinc-400 font-mono text-sm">
                                    {project.architecture}
                                </div>
                            </section>

                            <section>
                                <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                                    <Binary className="text-emerald-500" /> Technology Stack
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

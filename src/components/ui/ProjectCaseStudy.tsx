"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Code2, Server, Layout, Binary, Target, Lightbulb, Plus } from "lucide-react";
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
        metrics: { label: string; value: string; trend?: "up" | "down" }[];
        links: { github: string; demo?: string };
        codeSnippets?: { title: string; code: string; language: string }[];
        learnings?: string[];
        futureWork?: string[];
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
                    className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: 30 }}
                    className="relative w-full max-w-6xl max-h-[90vh] bg-zinc-900 border border-white/10 rounded-[40px] overflow-hidden flex flex-col shadow-2xl"
                >
                    {/* Header Controls */}
                    <div className="flex items-center justify-between p-8 border-b border-white/5 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-20">
                        <div className="flex items-center gap-4">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                                {project.category}
                            </span>
                            <h2 className="text-xl md:text-2xl font-black text-white">{project.title}</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                                <Github size={20} />
                            </a>
                            <button onClick={onClose} className="p-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-y-auto flex-grow p-8 md:p-16 space-y-20 scrollbar-hide">
                        {/* Summary & Metrics */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            <div className="lg:col-span-2 space-y-12">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black text-white leading-tight">The Vision</h3>
                                    <p className="text-lg text-zinc-400 leading-relaxed font-medium">{project.longDescription}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <section>
                                        <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest mb-4 opacity-70">
                                            <Target size={14} className="text-emerald-500" /> Challenge
                                        </h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{project.problem}</p>
                                    </section>
                                    <section>
                                        <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest mb-4 opacity-70">
                                            <Lightbulb size={14} className="text-emerald-500" /> Solution
                                        </h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{project.solution}</p>
                                    </section>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Impact Metrics</h3>
                                <div className="space-y-4">
                                    {project.metrics.map((metric, idx) => (
                                        <div key={idx} className="p-6 rounded-[24px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5 relative group">
                                            <div className="absolute top-4 right-4 text-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity">
                                                <Target size={16} />
                                            </div>
                                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">{metric.label}</span>
                                            <span className="text-3xl font-black text-white">{metric.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Technical Deep Dive */}
                        <div className="space-y-12 pt-12 border-t border-white/5">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-4">
                                    <h3 className="text-4xl font-black text-white">System Architecture</h3>
                                    <p className="text-zinc-400 max-w-xl">Deep dive into the distributed systems and AI models powering {project.title}.</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1 text-[10px] font-bold text-zinc-500 border border-white/10 rounded-full uppercase tracking-tighter">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative p-1 rounded-[32px] bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent">
                                <div className="p-8 md:p-12 rounded-[28px] bg-zinc-950/80 backdrop-blur-3xl font-mono text-sm leading-loose border border-white/5 text-zinc-300">
                                    <div className="flex items-center gap-3 mb-8 text-emerald-500/50">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Engine_Architecture.v2</span>
                                    </div>
                                    <pre className="whitespace-pre-wrap">{project.architecture}</pre>
                                </div>
                            </div>
                        </div>

                        {/* Code Snippets (Optional) */}
                        {project.codeSnippets && (
                            <div className="space-y-12 pt-12 border-t border-white/5">
                                <h3 className="text-3xl font-black text-white flex items-center gap-4">
                                    <Code2 className="text-emerald-500" /> Critical Implementations
                                </h3>
                                <div className="grid grid-cols-1 gap-8">
                                    {project.codeSnippets.map((snippet, i) => (
                                        <div key={i} className="rounded-3xl bg-black/40 border border-white/5 overflow-hidden">
                                            <div className="px-6 py-4 bg-white/5 flex items-center justify-between border-b border-white/5">
                                                <span className="text-xs font-mono text-zinc-400">{snippet.title}</span>
                                                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{snippet.language}</span>
                                            </div>
                                            <div className="p-8 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-emerald-400/80">
                                                <code>{snippet.code}</code>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Learnings & Evolution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-white/5">
                            <section className="space-y-8">
                                <h3 className="text-2xl font-black text-white flex items-center gap-3">
                                    <Target className="text-indigo-500" /> Engineering Takeaways
                                </h3>
                                <ul className="space-y-4">
                                    {project.learnings?.map((l, i) => (
                                        <li key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                            <div className="h-6 w-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                                                <span className="text-indigo-500 font-bold text-xs">{i + 1}</span>
                                            </div>
                                            <p className="text-sm text-zinc-400 leading-relaxed">{l}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="space-y-8">
                                <h3 className="text-2xl font-black text-white flex items-center gap-3">
                                    <Plus className="text-teal-500" /> Future Roadmap
                                </h3>
                                <div className="space-y-4">
                                    {project.futureWork?.map((f, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-white/10 group hover:border-teal-500/50 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-teal-500/30 group-hover:bg-teal-500 transition-colors" />
                                            <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">{f}</span>
                                        </div>
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

"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Database, Shield, Zap, Rocket } from "lucide-react";
import { useState } from "react";

const skillGroups = [
    {
        name: "AI & Machine Learning",
        icon: <Cpu className="text-emerald-400" />,
        skills: ["PyTorch", "Scikit-learn", "Hugging Face", "RAG", "LLM Fine-tuning", "Computer Vision"],
        projects: ["RaG-IT-assistant", "pipeline-NLP-avec-MLOps"]
    },
    {
        name: "MLOps & DevOps",
        icon: <Rocket className="text-indigo-400" />,
        skills: ["MLflow", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Evidently AI"],
        projects: ["pipeline-NLP-avec-MLOps", "HR-Pulse-cloud-IA-Devops"]
    },
    {
        name: "Full-Stack Development",
        icon: <Globe className="text-blue-400" />,
        skills: ["Next.js", "TypeScript", "React", "FastAPI", "Node.js", "TailwindCSS"],
        projects: ["HR-Pulse-cloud-IA-Devops"]
    },
    {
        name: "Data & Cloud",
        icon: <Database className="text-amber-400" />,
        skills: ["PostgreSQL", "ChromaDB", "Azure Cloud", "Apache Spark", "Redis", "MongoDB"],
        projects: ["HR-Pulse-cloud-IA-Devops", "RaG-IT-assistant"]
    }
];

export default function SkillMatrix() {
    const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider"
                        >
                            <Zap size={14} />
                            Skill Showcase
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            Technical Matrix
                        </h2>
                        <p className="text-zinc-400 max-w-xl text-lg">
                            An interactive overview of my technical expertise and the projects where they were applied.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onMouseEnter={() => setHoveredGroup(group.name)}
                            onMouseLeave={() => setHoveredGroup(null)}
                            className="p-8 rounded-[32px] bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Hover Highlight Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-zinc-800 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                        {group.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                        {group.name}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {group.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-all duration-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 block">Applied in Projects</span>
                                    <div className="flex flex-wrap gap-4">
                                        {group.projects.map(project => (
                                            <div key={project} className="flex items-center gap-2 text-sm text-white font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                {project}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Database, Shield, Zap, Rocket } from "lucide-react";
import { useState } from "react";

const skillToProjects: Record<string, string[]> = {
    "PyTorch": ["RaG-IT-assistant"],
    "Scikit-learn": ["HR-Pulse-cloud-IA-Devops"],
    "Hugging Face": ["pipeline-NLP-avec-MLOps"],
    "RAG": ["RaG-IT-assistant"],
    "MLflow": ["pipeline-NLP-avec-MLOps"],
    "Docker": ["pipeline-NLP-avec-MLOps", "HR-Pulse-cloud-IA-Devops", "RaG-IT-assistant"],
    "Kubernetes": ["pipeline-NLP-avec-MLOps"],
    "Azure Cloud": ["HR-Pulse-cloud-IA-Devops"],
    "FastAPI": ["HR-Pulse-cloud-IA-Devops", "pipeline-NLP-avec-MLOps", "RaG-IT-assistant"],
    "ChromaDB": ["RaG-IT-assistant"],
    "OpenTelemetry": ["HR-Pulse-cloud-IA-Devops"]
};

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
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    const isProjectHighlighted = (projectName: string) => {
        if (!selectedSkill) return true;
        return skillToProjects[selectedSkill]?.includes(projectName);
    };

    return (
        <section id="skills" className="py-24 relative">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest"
                        >
                            <Zap size={14} />
                            Technical Ecosystem
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Skill Matrix
                        </h2>
                        <p className="text-zinc-400 max-w-xl text-lg font-medium">
                            Click a skill to see where it was applied across my technical architectures.
                        </p>
                    </div>
                    {selectedSkill && (
                        <button
                            onClick={() => setSelectedSkill(null)}
                            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-all text-xs font-bold"
                        >
                            Reset Filter
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="p-10 rounded-[40px] bg-zinc-900/50 backdrop-blur-sm border border-white/5 hover:border-emerald-500/20 transition-all duration-500 group"
                        >
                            <div className="flex items-center gap-5 mb-10">
                                <div className="p-4 rounded-2xl bg-zinc-800 border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500">
                                    {group.icon}
                                </div>
                                <h3 className="text-2xl font-black text-white">
                                    {group.name}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-12">
                                {group.skills.map(skill => (
                                    <button
                                        key={skill}
                                        onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${selectedSkill === skill
                                                ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20 scale-105'
                                                : 'bg-white/5 border-white/10 text-zinc-400 hover:border-emerald-500/50 hover:text-emerald-400'
                                            }`}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6 block">Applied Infrastructure</span>
                                <div className="space-y-4">
                                    {group.projects.map(project => (
                                        <div
                                            key={project}
                                            className={`flex items-center gap-3 text-sm transition-all duration-500 ${isProjectHighlighted(project)
                                                    ? 'text-white opacity-100 translate-x-0'
                                                    : 'text-zinc-700 opacity-30 -translate-x-2'
                                                }`}
                                        >
                                            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isProjectHighlighted(project) && selectedSkill ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : 'bg-emerald-500/20'
                                                }`} />
                                            <span className="font-bold tracking-tight">{project}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

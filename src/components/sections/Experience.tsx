"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        role: "AI & Data Engineering",
        company: "Independent Projects",
        date: "2024 – Present",
        description: [
            "Designed and implemented AI systems with a focus on clean architecture and real-world usage",
            "Built machine learning pipelines including data preprocessing, training, evaluation, and deployment",
            "Tracked experiments, metrics, and models using MLflow",
            "Developed FastAPI backends to expose models and system metrics (latency, performance)",
            "Focused on reliability, monitoring, and maintainability rather than demos"
        ],
        skills: ["Machine Learning", "MLOps", "MLflow", "FastAPI"]
    },
    {
        role: "Full-Stack Web Development",
        company: "Production-Oriented Applications",
        date: "2023 – Present",
        description: [
            "Built full-stack web applications using React (frontend) and Python backends (FastAPI / Flask)",
            "Implemented authentication, APIs, database models, and file uploads",
            "Designed systems intended for daily real usage, not tutorials",
            "Worked with PostgreSQL, SQLAlchemy, and RESTful APIs",
            "Applied Git & GitHub workflows for version control and project organization"
        ],
        skills: ["React", "FastAPI", "PostgreSQL", "Git"]
    },
    {
        role: "Engineering Foundations & Applied Systems",
        company: "Background",
        date: "Engineering Mindset",
        description: [
            "Strong technical foundation in physics, electronics, and IT",
            "Experience analyzing systems, debugging, and optimizing performance",
            "Applied engineering thinking to software and AI projects",
            "Comfortable moving between low-level concepts and high-level system design"
        ],
        skills: ["Systems Thinking", "Debugging", "Optimization", "Engineering Physics"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-white mb-16 flex items-center justify-center lg:justify-start gap-3">
                    <Briefcase className="text-emerald-500" />
                    Experience
                </h2>

                <div className="relative border-l-2 border-zinc-800 ml-3 md:ml-4 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-500 ring-4 ring-black" />

                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-zinc-700 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <div className="text-emerald-400 font-medium">{exp.company}</div>
                                    </div>
                                    <span className="flex items-center text-xs font-bold tracking-wider text-zinc-400 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700 w-fit">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.date}
                                    </span>
                                </div>

                                <ul className="space-y-2 mb-8">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 mt-1.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="text-[10px] font-medium text-zinc-400 bg-black/50 px-2.5 py-1.5 rounded-md border border-zinc-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="/resume.pdf"
                        target="_blank"
                        className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden"
                    >
                        {/* Glass Backdrop */}
                        <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full backdrop-blur-md group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300" />

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                            <motion.div
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="absolute inset-x-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                            />
                        </div>

                        {/* Content */}
                        <span className="relative flex items-center gap-2 text-white">
                            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                            Download Resume
                        </span>

                        {/* Subtle Glow */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-white/10 transition-opacity duration-500 -z-10" />
                    </motion.a>
                </div>

            </motion.div>
        </section>
    );
}

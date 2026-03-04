"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
    {
        title: "HR-Pulse-cloud-IA-Devops: Cloud-Native HR Data Engineering",
        category: "Cloud & AI",
        description: "A comprehensive Data Engineering and AI solution designed to modernize recruitment by transforming raw job data into a structured knowledge base with real-time salary predictions.",
        highlights: [
            "Automated Skill Extraction using Azure AI Text Analytics",
            "Salary Prediction with Scikit-learn on Azure SQL Database",
            "End-to-End Observability with OpenTelemetry and Jaeger"
        ],
        impact: "Automates data extraction and salary estimates in real-time",
        tags: ["FastAPI", "Next.js", "Azure Cloud", "Docker", "OpenTelemetry", "Terraform"],
        link: "https://github.com/Lhcenzetta/HR-Pulse-cloud-IA-Devops",
        github: "https://github.com/Lhcenzetta/HR-Pulse-cloud-IA-Devops"
    },
    {
        title: "pipeline-NLP-avec-MLOps: Automated NLP Pipeline",
        category: "MLOps",
        description: "An MLOps pipeline for classifying support tickets from customer emails, demonstrating robust practices for machine learning operations and model supervision.",
        highlights: [
            "Hugging Face transformer embeddings for NLP preprocessing",
            "MLflow for experiment tracking and model serving via FastAPI",
            "Monitoring with Evidently AI, Prometheus, and Grafana"
        ],
        impact: "Ensures model performance and reliability in production",
        tags: ["Python", "Hugging Face", "MLflow", "Kubernetes", "Prometheus", "Grafana"],
        link: "https://github.com/Lhcenzetta/pipeline-NLP-avec-MLOps",
        github: "https://github.com/Lhcenzetta/pipeline-NLP-avec-MLOps"
    },
    {
        title: "RaG-IT-assistant: Intelligent IT Support RAG Assistant",
        category: "AI/ML",
        description: "An intelligent internal assistant built using a Retrieval-Augmented Generation (RAG) architecture to provide reliable answers to IT technicians' questions.",
        highlights: [
            "RAG architecture with vector indexing into ChromaDB",
            "Data pipeline for PDF text extraction and embedding generation",
            "Semantic search for accurate and context-aware responses"
        ],
        impact: "Provides instant IT support via documentation retrieval",
        tags: ["Python", "FastAPI", "Apache Spark", "ChromaDB", "Docker", "RAG"],
        link: "https://github.com/Lhcenzetta/RaG-IT-assistant",
        github: "https://github.com/Lhcenzetta/RaG-IT-assistant"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Mobile Header */}
                <div className="lg:hidden mb-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-3">Selected Projects</h2>
                    <p className="text-zinc-400 text-base max-w-sm mx-auto">Featured work in AI and development</p>
                </div>

                {/* Desktop Header */}
                <h2 className="hidden lg:flex text-3xl font-bold text-white mb-16 items-center gap-3">
                    <Folder className="text-indigo-500" />
                    Selected Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="group flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300"
                        >
                            {/* Card Header (Desktop Only) */}
                            <div className="hidden lg:flex p-6 pb-4 justify-between items-start border-b border-zinc-800/50 bg-zinc-900/50">
                                <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-emerald-900/20 px-3 py-1 rounded-full border border-emerald-900/50">
                                    {project.category}
                                </span>
                                <div className="flex gap-3 text-zinc-500">
                                    <a href={project.github} className="hover:text-white transition-colors p-1"><Github size={18} /></a>
                                    <a href={project.link} className="hover:text-white transition-colors p-1"><ExternalLink size={18} /></a>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 flex-grow flex flex-col">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                                        {project.title.split(':')[0]}
                                    </h3>
                                </div>
                                <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Highlights (Compact) */}
                                <div className="flex flex-col gap-1.5 mb-4">
                                    {project.highlights.slice(0, 2).map((highlight, i) => (
                                        <div key={i} className="text-[10px] text-zinc-500 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500/30" />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>

                                {/* Impact (Subtle) */}
                                <div className="mt-auto flex items-center gap-2 py-2 px-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                                    <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider">Impact</span>
                                    <span className="text-[10px] text-emerald-400/90 font-medium">{project.impact}</span>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="px-5 pb-5">
                                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/50">
                                    {project.tags.slice(0, 4).map(tag => (
                                        <span key={tag} className="text-[9px] font-medium px-2 py-0.5 rounded-md text-zinc-500 border border-zinc-900 group-hover:border-zinc-800 transition-colors bg-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 4 && (
                                        <span className="text-[9px] font-medium px-2 py-0.5 text-zinc-600">+ {project.tags.length - 4}</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center md:text-left">
                    <a href="https://github.com" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
                        View all projects on GitHub
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

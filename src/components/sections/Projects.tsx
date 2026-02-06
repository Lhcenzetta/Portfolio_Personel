"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
    {
        title: "RetentionAI: Employee Attrition Predictor & HR Assistant",
        category: "Full-Stack AI",
        description: "An AI-powered HR assistant that predicts employee attrition and provides intelligent retention strategies using machine learning and LLM integration.",
        highlights: [
            "Developed ML model using Scikit-learn with high accuracy",
            "Integrated Google Gemini AI for personalized recommendations",
            "Containerized with Docker & Docker Compose"
        ],
        impact: "Reduces employee turnover by up to 30%",
        tags: ["FastAPI", "Next.js", "Scikit-learn", "Google Gemini", "Docker", "PostgreSQL"],
        link: "https://github.com/Lhcenzetta/RetentionAI-Employee-Attrition-Predictor-HR-Assistant",
        github: "https://github.com/Lhcenzetta/RetentionAI-Employee-Attrition-Predictor-HR-Assistant"
    },
    {
        title: "RaG-IT-assistant: Intelligent IT Support Assistant",
        category: "AI/ML",
        description: "An internal assistant powered by Retrieval-Augmented Generation (RAG) that answers IT technicians' questions based on organizational documentation.",
        highlights: [
            "Implemented RAG pipeline for processing PDF support materials",
            "Used K-means clustering & Chroma for document retrieval",
            "Natural Language Processing for complex IT procedures"
        ],
        impact: "Significantly reduces IT support response time",
        tags: ["FastAPI", "Python", "Chroma DB", "LLM", "Docker", "NLP"],
        link: "https://github.com/Lhcenzetta/RaG-IT-assistant",
        github: "https://github.com/Lhcenzetta/RaG-IT-assistant"
    },
    {
        title: "Delivery-Time-Prediction: Predictive Analytics",
        category: "Machine Learning",
        description: "A machine learning project that predicts delivery times based on distance, traffic, and weather using regression analysis and hyperparameter tuning.",
        highlights: [
            "Compared RandomForestRegressor and SVR models",
            "Implemented GridSearchCV with 5-fold cross-validation",
            "Automated performance validation with GitHub Actions"
        ],
        impact: "Improves customer satisfaction via accurate estimates",
        tags: ["Python", "Scikit-learn", "Pandas", "GridSearchCV", "RandomForest"],
        link: "https://github.com/Lhcenzetta/Delivery-Time-Prediction",
        github: "https://github.com/Lhcenzetta/Delivery-Time-Prediction"
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

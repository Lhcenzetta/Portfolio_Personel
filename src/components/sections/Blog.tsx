"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, Tag } from "lucide-react";

const posts = [
    {
        title: "Scaling MLOps: From Experiment to Production",
        excerpt: "Lessons learned from deploying large-scale neural networks on Kubernetes and Azure.",
        date: "March 2024",
        category: "MLOps",
        readTime: "8 min read",
        link: "#"
    },
    {
        title: "The Power of RAG in Modern AI Assistants",
        excerpt: "Why Retrieval-Augmented Generation is the key to building reliable, context-aware LLM applications.",
        date: "Feb 2024",
        category: "Generative AI",
        readTime: "12 min read",
        link: "#"
    },
    {
        title: "Building Observable Data Pipelines",
        excerpt: "How to integrate OpenTelemetry and Jaeger for full visibility into your distributed data architectures.",
        date: "Jan 2024",
        category: "Data Engineering",
        readTime: "10 min read",
        link: "#"
    }
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider"
                        >
                            <BookOpen size={14} />
                            Insights & Articles
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            Technical Writing
                        </h2>
                        <p className="text-zinc-400 max-w-xl text-lg">
                            Sharing my journey and deep dives into AI engineering, MLOps, and scalable software systems.
                        </p>
                    </div>

                    <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                        View all articles
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative flex flex-col p-8 rounded-[32px] bg-zinc-900 border border-white/5 hover:border-indigo-500/50 transition-all duration-300 h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/10">
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                                    <Calendar size={12} />
                                    {post.date}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors leading-tight">
                                {post.title}
                            </h3>

                            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <span className="text-xs text-zinc-500 font-medium">
                                    {post.readTime}
                                </span>
                                <span className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                                    Read Article <ArrowRight size={14} />
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

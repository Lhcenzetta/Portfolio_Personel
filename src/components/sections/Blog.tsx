"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BookOpen, Calendar, ArrowRight, Tag } from "lucide-react";

const posts = [
    {
        title: "Scaling MLOps: From Experiment to Production",
        excerpt: "Lessons learned from deploying large-scale neural networks on Kubernetes and Azure.",
        fullContent: "The transition from a Jupyter notebook to a production-grade Kubernetes cluster is the 'valley of death' for many ML models. In this article, I break down the core components of a scalable MLOps architecture: \n\n1. **Reproducibility**: Why DVC and MLflow are non-negotiable.\n2. **Inference Optimization**: Using ONNX and TensorRT to slash latency.\n3. **Monitoring**: Implementing concept drift detection with Prometheus.\n\nScaling isn't just about more compute; it's about shifting from code-centric to data-centric workflows...",
        date: "March 2024",
        category: "MLOps",
        readTime: "8 min read"
    },
    {
        title: "The Power of RAG in Modern AI Assistants",
        excerpt: "Why Retrieval-Augmented Generation is the key to building reliable, context-aware LLM applications.",
        fullContent: "LLMs are powerful but they hallucinate. Retrieval-Augmented Generation (RAG) fixes this by grounding the model in a private knowledge base. In my recent experiments, I found that hierarchical character splitting for document chunking yields 20% better recall than simple recursive splitting. We'll explore vector databases (ChromaDB vs Qdrant) and why re-ranking is the secret sauce for high-precision retrieval.",
        date: "Feb 2024",
        category: "Generative AI",
        readTime: "12 min read"
    },
    {
        title: "Building Observable Data Pipelines",
        excerpt: "How to integrate OpenTelemetry and Jaeger for full visibility into your distributed data architectures.",
        fullContent: "You can't fix what you can't see. Distributed tracing with OpenTelemetry has transformed how we debug complex data pipelines. By propagating trace headers across service boundaries, we can visualize exactly where bottlenecks occur in asynchronous ETL jobs. This deep dive covers auto-instrumentation VS manual instrumentation in FastAPI and how to export traces to Jaeger for real-time analysis.",
        date: "Jan 2024",
        category: "Data Engineering",
        readTime: "10 min read"
    }
];

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

    return (
        <section id="blog" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest"
                        >
                            <BookOpen size={14} />
                            Insights & Articles
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Technical Writing
                        </h2>
                        <p className="text-zinc-400 max-w-xl text-lg lg:text-xl font-medium">
                            Sharing journey and deep dives into AI engineering, MLOps, and scalable software systems.
                        </p>
                    </div>

                    <a href="https://linkedin.com/in/laitzetta" target="_blank" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group px-6 py-3 rounded-2xl bg-white/5 border border-white/5 font-bold">
                        Follow Updates
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            onClick={() => setSelectedPost(post)}
                            className="group relative flex flex-col p-10 rounded-[40px] bg-zinc-900 border border-white/5 hover:border-indigo-500/50 transition-all duration-500 h-full cursor-pointer shadow-xl hover:shadow-indigo-500/5"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/10">
                                    {post.category}
                                </span>
                                <div className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
                                    {post.readTime}
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-white mb-6 group-hover:text-indigo-400 transition-colors leading-tight">
                                {post.title}
                            </h3>

                            <p className="text-zinc-400 text-base leading-relaxed mb-10 flex-grow font-normal">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-8 border-t border-white/5 group-hover:border-indigo-500/20 transition-colors">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs">
                                    <Calendar size={14} />
                                    {post.date}
                                </div>
                                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-500">
                                    <ArrowRight size={18} className="group-hover:text-white text-zinc-500" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Article Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 40 }}
                            className="relative w-full max-w-4xl max-h-full bg-zinc-900 border border-white/10 rounded-[48px] overflow-hidden flex flex-col shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all z-10"
                            >
                                <ArrowRight className="-rotate-180" size={20} />
                            </button>

                            <div className="overflow-y-auto p-12 md:p-20 space-y-12">
                                <div className="space-y-6">
                                    <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">{selectedPost.category}</span>
                                    <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">{selectedPost.title}</h2>
                                    <div className="flex items-center gap-6 text-zinc-500 text-sm font-medium pt-4">
                                        <div className="flex items-center gap-2"><Calendar size={16} /> {selectedPost.date}</div>
                                        <div className="flex items-center gap-2"><BookOpen size={16} /> {selectedPost.readTime}</div>
                                    </div>
                                </div>
                                <div className="h-px w-full bg-white/5" />
                                <div className="text-zinc-400 text-lg md:text-xl leading-[1.8] font-medium whitespace-pre-wrap selection:bg-emerald-500/30">
                                    {selectedPost.fullContent}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

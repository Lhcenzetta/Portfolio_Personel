"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Yassine B.",
        role: "Lead ML Engineer @ TechScale",
        content: "Lahcen's ability to bridge the gap between AI research and production-ready software is exceptional. He delivered our RAG architecture ahead of schedule with 95% accuracy.",
        avatar: "Y",
        rating: 5
    },
    {
        name: "Sarah M.",
        role: "CTO @ DataFirst",
        content: "A brilliant developer who understands the nuances of MLOps. His work on our automated NLP pipelines saved us hundreds of hours in manual data processing.",
        avatar: "S",
        rating: 5
    },
    {
        name: "Karim A.",
        role: "Senior Full-Stack Dev",
        content: "Collaborating with Lahcen was a pleasure. His technical depth in both backend scaling and machine learning is a rare and valuable asset to any team.",
        avatar: "K",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-zinc-950/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center space-y-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider"
                    >
                        <Quote size={14} />
                        Testimonials
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Trusted by Professionals
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-zinc-900 border border-white/5 p-8 rounded-[32px] relative group hover:border-emerald-500/30 transition-all duration-300"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-emerald-500 text-emerald-500" />
                                ))}
                            </div>

                            <p className="text-zinc-300 leading-relaxed italic mb-8">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                                    <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

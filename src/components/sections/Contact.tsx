"use client";

import { motion } from "framer-motion";
import { Terminal, Send, Github, Linkedin, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "limited">("idle");
    const [submissions, setSubmissions] = useState(0);

    useEffect(() => {
        const count = localStorage.getItem("contact_submissions");
        if (count) setSubmissions(parseInt(count));
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Honeypot check
        const formData = new FormData(e.currentTarget);
        if (formData.get("botcheck")) return;

        // Rate limit check
        if (submissions >= 2) {
            setStatus("limited");
            return;
        }

        setStatus("loading");

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "32b36da2-f4fb-43a8-bc76-6ce7d5fd7f00";
        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                const newCount = submissions + 1;
                setSubmissions(newCount);
                localStorage.setItem("contact_submissions", newCount.toString());
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 pb-40">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Form (7/12) */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                <Terminal size={24} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">Initialize Communication</h2>
                                <p className="text-sm text-zinc-500 mt-1">Ready to collaborate on intelligent systems</p>
                            </div>
                        </div>

                        <div className="group relative">
                            {/* Background Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-6 sm:p-8 rounded-[32px] overflow-hidden">
                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 flex flex-col items-center text-center space-y-4"
                                    >
                                        <div className="h-20 w-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Transmission Successful</h3>
                                        <p className="text-zinc-400 max-w-xs">Thank you for reaching out. I&apos;ll get back to you through the coordinates provided.</p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-4 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <input type="hidden" name="to" value="lhsenztta65@gmail.com" />
                                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Name</label>
                                                <input
                                                    name="name"
                                                    required
                                                    type="text"
                                                    placeholder="Lahcen Ait Zetta"
                                                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 focus:border-emerald-500/50 outline-none text-white transition-all placeholder:text-zinc-700"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Email Coordinates</label>
                                                <input
                                                    name="email"
                                                    required
                                                    type="email"
                                                    placeholder="lahcen@example.com"
                                                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 focus:border-emerald-500/50 outline-none text-white transition-all placeholder:text-zinc-700"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={4}
                                                placeholder="Hello, I'm interested in working together on a new system..."
                                                className="w-full bg-white/5 border border-white/5 rounded-[24px] px-5 py-4 focus:border-emerald-500/50 outline-none text-white transition-all placeholder:text-zinc-700 resize-none"
                                            />
                                        </div>

                                        <button
                                            disabled={status === "loading"}
                                            type="submit"
                                            className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-[24px] font-bold text-sm transition-all duration-300 overflow-hidden disabled:opacity-50"
                                        >
                                            <div className="absolute inset-0 bg-white rounded-[24px] group-hover:bg-emerald-50 transition-colors" />
                                            <span className="relative text-black flex items-center gap-2">
                                                {status === "loading" ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Processing Transmission...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        Send Transmission
                                                    </>
                                                )}
                                            </span>
                                        </button>

                                        {status === "error" && (
                                            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 space-y-2">
                                                <p className="text-center text-red-400 text-xs font-medium">A transmission error occurred.</p>
                                                <p className="text-center text-zinc-500 text-[10px] leading-relaxed">
                                                    Ensure you have replaced the <code className="text-emerald-400">access_key</code> in <code className="text-white">Contact.tsx</code> with a real one from <a href="https://web3forms.com" target="_blank" className="underline hover:text-white transition-colors">Web3Forms</a>.
                                                </p>
                                            </div>
                                        )}

                                        {status === "limited" && (
                                            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 space-y-2">
                                                <p className="text-center text-amber-400 text-xs font-medium">Transmission Limit Reached</p>
                                                <p className="text-center text-zinc-500 text-[10px] leading-relaxed">
                                                    To prevent spam, transmissions are limited to two per session. Please use direct email for further communication.
                                                </p>
                                            </div>
                                        )}
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Info & Socials (5/12) */}
                    <div className="lg:col-span-5 lg:pt-20 space-y-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Direct Coordinates</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    I&apos;m currently available for worldwide projects and technical collaborations in AI, ML, and Full-Stack Engineering.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 group cursor-default">
                                        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-all">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email</p>
                                            <p className="text-white text-sm">lhsenztta65@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group cursor-default">
                                        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-all">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Availability</p>
                                            <p className="text-emerald-400 text-sm font-medium">Open for Collaboration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px w-full bg-white/5" />

                            <div>
                                <h3 className="text-lg font-bold text-white mb-6">Connect across platforms</h3>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/Lhcenzetta" },
                                        { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/ait-zetta-lahcen-2810a4361/" }
                                    ].map((soul) => (
                                        <a
                                            key={soul.label}
                                            href={soul.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="text-zinc-500 group-hover:text-white transition-colors">
                                                    {soul.icon}
                                                </div>
                                                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{soul.label}</span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-emerald-500/30 transition-all">
                                                <Terminal size={14} />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                            <p className="text-xs text-zinc-400 leading-relaxed italic">
                                &quot;Systems are most effective when they facilitate clear, meaningful interaction. Let&apos;s build something intelligent.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

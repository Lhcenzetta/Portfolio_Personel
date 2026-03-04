import { motion } from "framer-motion";
import { Terminal, Send, Github, Linkedin, Mail, Loader2, CheckCircle2, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "limited">("idle");
    const [submissions, setSubmissions] = useState(0);

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const count = localStorage.getItem("contact_submissions");
        if (count) setSubmissions(parseInt(count));

        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const isAvailable = true; // Could be dynamic based on time/status

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (formData.get("botcheck")) return;

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
        <section id="contact" className="py-24 pb-40 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Form (7/12) */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-col gap-6 mb-12">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-900 border border-white/10 w-fit"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isAvailable ? 'bg-emerald-400' : 'bg-zinc-400'} opacity-75`}></span>
                                    <span className={`relative inline-flex rounded-full h-3 w-3 ${isAvailable ? 'bg-emerald-500' : 'bg-zinc-500'}`}></span>
                                </span>
                                <span className="text-sm font-bold text-white">
                                    {isAvailable ? "Available for new transmissions" : "Currently occupied"}
                                </span>
                                <span className="text-zinc-500 text-xs px-2 border-l border-white/10 uppercase tracking-widest">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT</span>
                            </motion.div>

                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                    Let&apos;s Build the <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Next Intelligent System.</span>
                                </h2>
                                <p className="text-zinc-500 text-lg mt-4 max-w-xl">
                                    Have a vision? Let&apos;s connect and explore how we can turn your data and ideas into scalable, production-grade AI solutions.
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-zinc-900 border border-white/5 p-8 md:p-10 rounded-[40px] shadow-2xl">
                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 flex flex-col items-center text-center space-y-6"
                                    >
                                        <div className="h-24 w-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-bold text-white">Handshake Complete</h3>
                                            <p className="text-zinc-400 max-w-sm">Your message has been encrypted and sent. I&apos;ll be in touch shortly.</p>
                                        </div>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <input type="hidden" name="to" value="lhsenztta65@gmail.com" />
                                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Identify Yourself</label>
                                                <input
                                                    name="name"
                                                    required
                                                    type="text"
                                                    placeholder="Your Name"
                                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 focus:border-emerald-500/50 focus:bg-white/[0.05] outline-none text-white transition-all placeholder:text-zinc-600"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Return Coordinates</label>
                                                <input
                                                    name="email"
                                                    required
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 focus:border-emerald-500/50 focus:bg-white/[0.05] outline-none text-white transition-all placeholder:text-zinc-600"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">The Mission</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={5}
                                                placeholder="Tell me about your project, goals, or just say hello..."
                                                className="w-full bg-white/[0.03] border border-white/5 rounded-[32px] px-6 py-5 focus:border-emerald-500/50 focus:bg-white/[0.05] outline-none text-white transition-all placeholder:text-zinc-600 resize-none"
                                            />
                                        </div>

                                        <button
                                            disabled={status === "loading"}
                                            type="submit"
                                            className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-[24px] font-bold text-lg transition-all duration-300 overflow-hidden disabled:opacity-50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                                        >
                                            <div className="absolute inset-0 bg-white group-hover:bg-emerald-50 transition-colors" />
                                            <span className="relative text-black flex items-center gap-3">
                                                {status === "loading" ? (
                                                    <>
                                                        <Loader2 className="w-6 h-6 animate-spin" />
                                                        Initiating Transmission...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                                        Send Transmission
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Info & Socials (5/12) */}
                    <div className="lg:col-span-5 lg:pt-32 space-y-16">
                        <section className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">Connect Locally & Globally</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-5 group">
                                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500/50 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-500">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-[0.2em] mb-1">Direct Secure Line</p>
                                            <p className="text-white font-bold">lhsenztta65@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500/50 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-500">
                                            <Linkedin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-[0.2em] mb-1">Professional Network</p>
                                            <a href="https://www.linkedin.com/in/ait-zetta-lahcen-2810a4361/" target="_blank" className="text-white font-bold hover:text-emerald-400 transition-colors">Lahcen Ait Zetta</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500/50 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-500">
                                            <Github size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-[0.2em] mb-1">Open Source Hub</p>
                                            <a href="https://github.com/Lhcenzetta" target="_blank" className="text-white font-bold hover:text-emerald-400 transition-colors">@Lhcenzetta</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="p-8 rounded-[32px] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/10 relative overflow-hidden">
                            <Quote className="absolute -top-4 -right-4 text-emerald-500/10 w-32 h-32 rotate-12" />
                            <p className="text-zinc-400 leading-relaxed font-medium relative z-10">
                                &quot;In the world of AI, complexity is easy. Simplicity and scalability are the real challenges. Let&apos;s solve them together.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

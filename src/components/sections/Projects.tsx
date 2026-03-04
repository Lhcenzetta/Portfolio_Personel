import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, Plus } from "lucide-react";
import ProjectCaseStudy from "@/components/ui/ProjectCaseStudy";

const projects = [
    {
        title: "HR-Pulse-cloud-IA-Devops",
        category: "Cloud & AI",
        description: "Transforming recruitment with automated skill extraction and salary predictions using Azure AI and Data Engineering.",
        longDescription: "A comprehensive Data Engineering and AI solution designed to modernize recruitment by transforming raw job data into a structured knowledge base with real-time salary predictions.",
        problem: "Recruiters struggle with high volumes of unstructured job descriptions and market-aligned salary estimations, leading to inefficiencies and mismatched expectations.",
        solution: "Implemented an automated pipeline that extracts skills using Azure AI Text Analytics and predicts salaries using a Scikit-learn model deployed on Azure SQL, all monitored with OpenTelemetry.",
        architecture: "Python (FastAPI) -> Azure Data Factory -> Azure SQL -> Scikit-learn \nInfrastructure: Terraform, GitHub Actions (CI/CD)\nObservability: OpenTelemetry, Jaeger, Prometheus",
        technologies: ["FastAPI", "Next.js", "Azure Cloud", "Docker", "OpenTelemetry", "Terraform", "Azure SQL"],
        metrics: [
            { label: "Extraction Accuracy", value: "92%" },
            { label: "Prediction Latency", value: "<100ms" },
            { label: "Pipeline Reliability", value: "99.9%" }
        ],
        impact: "Automates data extraction and salary estimates in real-time",
        tags: ["FastAPI", "Azure", "MLOps"],
        links: {
            github: "https://github.com/Lhcenzetta/HR-Pulse-cloud-IA-Devops",
            demo: "https://github.com/Lhcenzetta/HR-Pulse-cloud-IA-Devops"
        }
    },
    {
        title: "pipeline-NLP-avec-MLOps",
        category: "MLOps",
        description: "Automated support ticket classification pipeline with Hugging Face transformers and production-grade monitoring.",
        longDescription: "An MLOps pipeline for classifying support tickets from customer emails, demonstrating robust practices for machine learning operations and model supervision.",
        problem: "Manual ticket sorting is slow and error-prone. Without proper MLOps, models in production suffer from drift and degradation without detection.",
        solution: "Built a fully automated NLP pipeline using Hugging Face transformers for embedding, MLflow for tracking, and Evidently AI for monitoring model drift in a Kubernetes environment.",
        architecture: "Hugging Face (Transformers) -> MLflow (Tracking) -> FastAPI (Serving)\nInfrastructure: Kubernetes (K8s), Prometheus, Grafana\nMonitoring: Evidently AI",
        technologies: ["Python", "Hugging Face", "MLflow", "Kubernetes", "Prometheus", "Grafana", "Evidently AI"],
        metrics: [
            { label: "Model F1-Score", value: "0.89" },
            { label: "Deployment Time", value: "-75%" },
            { label: "Monitoring Coverage", value: "100%" }
        ],
        impact: "Ensures model performance and reliability in production",
        tags: ["Hugging Face", "K8s", "MLflow"],
        links: {
            github: "https://github.com/Lhcenzetta/pipeline-NLP-avec-MLOps"
        }
    },
    {
        title: "RaG-IT-assistant",
        category: "AI/ML",
        description: "Intelligent IT Support assistant using Retrieval-Augmented Generation for reliable documentation search.",
        longDescription: "An intelligent internal assistant built using a Retrieval-Augmented Generation (RAG) architecture to provide reliable answers to IT technicians' questions.",
        problem: "IT technicians spend significant time searching through fragmented PDF documentation and internal wikis for specific technical resolutions.",
        solution: "Developed a RAG-based assistant that indexes documentation into ChromaDB and uses semantic search to provide context-aware, cited answers to queries.",
        architecture: "Apache Spark (Preprocessing) -> ChromaDB (Vector Store) -> OpenAI/Llama -> FastAPI\nIndexing: PDF Processing Pipeline\nRetrieval: Hierarchical Navigable Small World (HNSW)",
        technologies: ["Python", "FastAPI", "Apache Spark", "ChromaDB", "Docker", "RAG", "LangChain"],
        metrics: [
            { label: "Retrieval Recall", value: "95%" },
            { label: "Query Time", value: "1.2s" },
            { label: "Doc Processing", value: "500+ pages" }
        ],
        impact: "Provides instant IT support via documentation retrieval",
        tags: ["Python", "ChromaDB", "RAG"],
        links: {
            github: "https://github.com/Lhcenzetta/RaG-IT-assistant"
        }
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
                    <h2 className="text-3xl font-bold text-white mb-3">Featured Case Studies</h2>
                    <p className="text-zinc-400 text-base max-w-sm mx-auto">Deep dives into my engineering solutions</p>
                </div>

                {/* Desktop Header */}
                <h2 className="hidden lg:flex text-3xl font-bold text-white mb-16 items-center gap-3">
                    <Folder className="text-emerald-500" />
                    Featured Case Studies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProject(project)}
                            className="group flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 cursor-pointer"
                        >
                            {/* Card Body */}
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                        {project.category}
                                    </span>
                                    <Plus className="text-zinc-600 group-hover:text-emerald-400 group-hover:rotate-90 transition-all duration-300" size={20} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-emerald-400 transition-colors leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Preview Metrics */}
                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    {project.metrics.slice(0, 2).map((metric, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{metric.label}</span>
                                            <span className="text-sm font-bold text-emerald-400">{metric.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="px-8 py-6 bg-zinc-950/50 border-t border-zinc-800/50 flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                                    Detailed Project <Folder size={14} />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a href="https://github.com/Lhcenzetta" className="inline-flex items-center gap-3 text-base font-semibold text-zinc-400 hover:text-white transition-all group">
                        <Github size={20} />
                        Explore more on GitHub
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                </div>
            </motion.div>

            {/* Case Study Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectCaseStudy
                        project={selectedProject}
                        isOpen={!!selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, Plus } from "lucide-react";
import ProjectCaseStudy from "@/components/ui/ProjectCaseStudy";

const projects = [
    {
        title: "HR-Pulse-cloud-IA-Devops",
        category: "Cloud & AI",
        description: "Transforming recruitment with automated skill extraction and salary predictions using Azure AI and Data Engineering.",
        longDescription: "A massive-scale Data Engineering solution designed to bridge the gap between unstructured recruiter data and actionable market insights. Built on Azure, it automates the end-to-end flow from raw CV ingestion to live salary estimation.",
        problem: "Recruiters faced extreme latency when manually processing thousands of unstructured job descriptions, often resulting in inaccurate market-aligned salary offers and missed talent.",
        solution: "Engineered an automated data pipeline using Azure Data Factory for ETL, leveraged Azure Text Analytics for AI-driven skill parsing, and deployed a robust Scikit-learn model for high-accuracy salary prediction.",
        architecture: "Python (FastAPI) -> Azure Data Factory (ETL) -> Azure SQL (Gold Layer)\nML Core: Scikit-learn (Random Forest Regressor)\nInfra: Terraform-defined Cloud Resources\nObservability: OpenTelemetry Distributed Tracing",
        technologies: ["FastAPI", "Azure Cloud", "Docker", "OpenTelemetry", "Terraform", "Azure SQL"],
        metrics: [
            { label: "Extraction Accuracy", value: "92%" },
            { label: "Prediction Latency", value: "<100ms" },
            { label: "Data Quality Score", value: "99.9%" }
        ],
        codeSnippets: [
            {
                title: "Salary Prediction Logic",
                language: "python",
                code: "def predict_salary(features):\n    # Load ensemble model\n    model = mlflow.sklearn.load_model('models:/salary_regressor/latest')\n    prediction = model.predict(features)\n    return float(prediction[0])"
            }
        ],
        learnings: [
            "Azure Data Factory triggers require careful retry logic for transient network failures.",
            "Normalizing non-standard job titles significantly improved model R2 score by 15%."
        ],
        futureWork: [
            "Integrating LLM-based entity linking for niche technical domains.",
            "Implementing real-time dashboarding with PowerBI integration."
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
        longDescription: "A production-grade NLP ecosystem that handles support ticket classification at scale. This project focuses on the 'Ops' in MLOps, ensuring model reliability via drift detection and automated re-deployment.",
        problem: "Support teams were overwhelmed by manual ticket triage. Existing models failed frequently due to concept drift without any alerting system in place.",
        solution: "Implemented a CI/CD pipeline for ML models. Integrated Hugging Face 'DistilBERT' for high-throughput classification and 'Evidently AI' for real-time drift monitoring on Kubernetes.",
        architecture: "Transformers (BERT) -> MLflow (Model Registry) -> FastAPI (K8s Service)\nDetection: Evidently AI (Data Drift Monitoring)\nStack: Prometheus/Grafana for Metric Visualization",
        technologies: ["Python", "Hugging Face", "MLflow", "Kubernetes", "Prometheus", "Evidently AI"],
        metrics: [
            { label: "Model F1-Score", value: "0.89" },
            { label: "Deployment Speed", value: "4x Faster" },
            { label: "Drift Detection", value: "Real-time" }
        ],
        codeSnippets: [
            {
                title: "Drift Monitoring Setup",
                language: "python",
                code: "report = Report(metrics=[DataDriftPreset()])\nreport.run(reference_data=ref, current_data=cur)\nif report.as_dict()['metrics'][0]['result']['dataset_drift']:\n    trigger_retaining_workflow()"
            }
        ],
        learnings: [
            "Kubernetes resource limits are critical for BERT-based inference to prevent OOM kills.",
            "Pre-calculating embeddings in batch saved 40% on compute costs."
        ],
        futureWork: [
            "Implementing A/B testing canary deployments via Istio service mesh.",
            "Expanding classification to 50+ languages using mBERT."
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
        longDescription: "A sophisticated RAG implementation that allows IT technicians to query thousands of pages of internal documentation using natural language, receiving contextual and cited answers.",
        problem: "Internal knowledge silos and fragmented PDF documentation meant IT support spent 30% of their day just searching for existing technical resolutions.",
        solution: "Built a vector-search system using ChromaDB. Leveraged LangChain for orchestration and Spark for processing large-scale technical manuals into semantic chunks.",
        architecture: "Spark (Data Ingestion) -> LangChain (Orchestrator) -> ChromaDB (Vector Store)\nLLM: GPT-4o / Llama 3 (via Ollama)\nFront: Reactive UI with real-time feedback",
        technologies: ["Python", "FastAPI", "Apache Spark", "ChromaDB", "LangChain", "RAG"],
        metrics: [
            { label: "Search Recall", value: "95%" },
            { label: "Mean Time to Answer", value: "-60%" },
            { label: "Indexing Load", value: "10k+ pages" }
        ],
        codeSnippets: [
            {
                title: "Context Retrieval Pipeline",
                language: "python",
                code: "vector_db = Chroma(...) \nretriever = vector_db.as_retriever(search_kwargs={'k': 3})\nchain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)\nanswer = chain.invoke(query)"
            }
        ],
        learnings: [
            "Metadata filtering at the vector level is essential for multi-tenant documentation security.",
            "Recursive character splitting outperformed simple chunking for technical tables."
        ],
        futureWork: [
            "Implementing 'GraphRAG' for better relationship mapping across wikis.",
            "Low-latency voice interface for hands-free tech support."
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

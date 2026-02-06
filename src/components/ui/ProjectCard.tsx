"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
}

export default function ProjectCard({ title, description, tags, link, github }: ProjectCardProps) {
    return (
        <div
            className="relative group h-full bg-white border border-gray-100 p-8 rounded-3xl soft-shadow transition-all duration-300 hover:border-black/10 hover:shadow-xl hover:-translate-y-1"
        >
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-gray-400 border border-gray-100 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {github && <a href={github} target="_blank" rel="noopener noreferrer"><Github size={18} className="text-gray-400 hover:text-black transition-colors" /></a>}
                        {link && <a href={link} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} className="text-gray-400 hover:text-black transition-colors" /></a>}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <div className="h-px bg-gray-50 w-full mb-6" />

                <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-black flex items-center group-hover:translate-x-1 transition-transform">
                    Case Study <span className="ml-2">→</span>
                </button>
            </div>
        </div>
    );
}

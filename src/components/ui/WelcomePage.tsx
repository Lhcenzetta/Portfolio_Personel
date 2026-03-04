"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function DataFlowParticles() {
    const count = 1000;
    const points = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            velocities[i] = 0.01 + Math.random() * 0.02;
        }
        return { positions, velocities };
    }, []);

    useFrame((state) => {
        if (!points.current) return;
        const positions = points.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
            positions[i * 3 + 1] -= particles.velocities[i]; // Move down
            if (positions[i * 3 + 1] < -5) {
                positions[i * 3 + 1] = 5; // Reset to top
            }
        }
        points.current.geometry.attributes.position.needsUpdate = true;
        points.current.rotation.y += 0.001;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particles.positions}
                    itemSize={3}
                    args={[particles.positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#10b981"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export default function WelcomePage({ onComplete }: { onComplete: () => void }) {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const name = "LAHCEN AIT ZETTA";

    useEffect(() => {
        const duration = 2500;
        const interval = 50;
        const steps = duration / interval;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, interval);

        const completeTimer = setTimeout(() => {
            setLoading(false);
            setTimeout(onComplete, 800);
        }, duration + 300);

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 opacity-40">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <DataFlowParticles />
                </Canvas>
            </div>

            <div className="relative flex flex-col items-center w-full max-w-[90vw] px-4 z-10">
                <div className="flex flex-wrap justify-center gap-x-1 md:gap-x-2 text-center leading-none">
                    {name.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)",
                                transition: {
                                    duration: 0.8,
                                    delay: index * 0.04,
                                    ease: [0.23, 1, 0.32, 1]
                                }
                            }}
                            className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="h-[2px] w-48 bg-emerald-500/50 mt-12 mb-8 origin-center"
                />

                <div className="w-full max-w-xs h-[1px] bg-zinc-800/50 rounded-full overflow-hidden relative">
                    <motion.div
                        className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                    />
                </div>

                <div className="mt-4 flex items-center justify-between w-full max-w-xs text-[9px] font-mono tracking-[0.3em] uppercase">
                    <span className="text-emerald-500/80 animate-pulse">Initializing_Engine</span>
                    <span className="text-white font-black">{Math.round(progress)}%</span>
                </div>
            </div>

            <AnimatePresence>
                {!loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black pointer-events-none"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

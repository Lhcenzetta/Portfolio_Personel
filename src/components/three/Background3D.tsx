"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

function SubtleSphere({ scale = 1.5 }: { scale?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[1, 100, 100]} scale={scale}>
                <MeshDistortMaterial
                    color="#f0f0f0"
                    speed={1.5}
                    distort={0.3}
                    radius={1}
                />
            </Sphere>
        </Float>
    );
}

export default function Background3D() {
    const [scale, setScale] = useState(1.5);

    useEffect(() => {
        const handleResize = () => {
            // Mobile (sm) breakpoint is usually around 640px or 768px.
            // Setting scale to 1.0 for screens smaller than 768px (md)
            if (window.innerWidth < 768) {
                setScale(1.0);
            } else {
                setScale(1.5);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} />
                <SubtleSphere scale={scale} />
            </Canvas>
        </div>
    );
}

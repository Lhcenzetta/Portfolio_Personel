"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralParticles({ count = 100 }) {
    const mesh = useRef<THREE.Points>(null);
    const light = useRef<THREE.Group>(null);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = THREE.MathUtils.randFloatSpread(10);
            const y = THREE.MathUtils.randFloatSpread(10);
            const z = THREE.MathUtils.randFloatSpread(10);
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.y = time * 0.1;
            mesh.current.rotation.x = time * 0.05;
        }
        if (light.current) {
            light.current.rotation.z = time * 0.2;
        }
    });

    return (
        <group>
            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.length / 3}
                        array={particles}
                        itemSize={3}
                        args={[particles, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.05}
                    color="#10b981"
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                />
            </points>
            <group ref={light}>
                <pointLight position={[5, 5, 5]} intensity={1} color="#10b981" />
                <pointLight position={[-5, -5, -5]} intensity={0.5} color="#0d9488" />
            </group>
        </group>
    );
}

function Connections({ count = 50 }) {
    const lines = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const start = new THREE.Vector3(
                THREE.MathUtils.randFloatSpread(10),
                THREE.MathUtils.randFloatSpread(10),
                THREE.MathUtils.randFloatSpread(10)
            );
            const end = new THREE.Vector3(
                THREE.MathUtils.randFloatSpread(10),
                THREE.MathUtils.randFloatSpread(10),
                THREE.MathUtils.randFloatSpread(10)
            );
            temp.push(start, end);
        }
        return temp;
    }, [count]);

    return (
        <group>
            {lines.map((line, i) => (
                <line key={i}>
                    <bufferGeometry attach="geometry">
                        <bufferAttribute
                            attach="attributes-position"
                            count={2}
                            array={new Float32Array([line.x, line.y, line.z, line.x, line.y, line.z])}
                            itemSize={3}
                            args={[new Float32Array([line.x, line.y, line.z, line.x, line.y, line.z]), 3]}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial attach="material" color="#10b981" transparent opacity={0.1} />
                </line>
            ))}
        </group>
    );
}

export default function NeuralBackground() {
    return (
        <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
            {/* Gradient Overlay for integration */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.2} />
                <NeuralParticles count={200} />
                {/* <Connections count={100} /> */}
                <fog attach="fog" args={['black', 5, 15]} />
            </Canvas>
        </div>
    );
}

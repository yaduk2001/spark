"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CinematicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Particle System Implementation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: any[] = [];
        // Reduce count on mobile for performance
        const particleCount = isMobile ? 20 : 50;

        class Particle {
            x: number;
            y: number;
            dx: number;
            dy: number;
            size: number;
            opacity: number;
            depth: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.depth = Math.floor(Math.random() * 3);

                const speedMult = this.depth === 0 ? 0.15 : this.depth === 1 ? 0.3 : 0.5;
                this.dx = (Math.random() - 0.5) * speedMult;
                this.dy = (Math.random() - 0.5) * speedMult;

                this.size = Math.random() * 4 + 2; // 2-6px - MUCH larger
                this.opacity = Math.random() * 0.7 + 0.3; // 0.3-1.0 - MUCH brighter
            }

            update() {
                this.x += this.dx;
                this.y += this.dy;

                if (this.x < -50) this.x = width + 50;
                if (this.x > width + 50) this.x = -50;
                if (this.y < -50) this.y = height + 50;
                if (this.y > height + 50) this.y = -50;
            }

            draw() {
                if (!ctx) return;

                // Glow effect
                ctx.shadowBlur = 15;
                ctx.shadowColor = `rgba(138, 43, 226, ${this.opacity})`;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(138, 43, 226, ${this.opacity})`;
                ctx.fill();

                ctx.shadowBlur = 0;
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connecting lines
            ctx.lineWidth = 1.5; // Thicker lines
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const opacity = (1 - (distance / 150)) * 0.4; // More visible
                        ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]); // Re-run when isMobile changes

    // Responsive Object Count
    const objectCount = isMobile ? 8 : 20;

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
            {/* Camera Drift Container */}
            <motion.div
                className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
                animate={{
                    x: ["-2%", "2%", "-2%"],
                    y: ["-1%", "1%", "-1%"],
                    scale: [1, 1.04, 1],
                }}
                transition={{
                    duration: 18,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                {/* Animated Gradient Background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#0a0520] to-[#020205] bg-[length:200%_100%]"
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />

                {/* Starfield */}
                <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
                    backgroundSize: '60px 60px'
                }} />

                {/* Canvas Particles */}
                <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

                {/* Volumetric Light Rays */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: 'linear-gradient(45deg, transparent 40%, rgba(138,43,226,0.15) 50%, transparent 60%)',
                        width: '200%',
                        height: '200%',
                    }}
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />

                {/* Fog Layer */}
                <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-black/60 via-brand-purple/10 to-transparent blur-3xl" />

                {/* Holographic Shapes */}
                <motion.div
                    className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full border-2 border-brand-purple/30 blur-xl"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-[25%] right-[20%] w-[500px] h-[500px] rounded-full border-2 border-brand-gold/20 blur-2xl"
                    animate={{
                        rotate: -360,
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>



            {/* Floating Abstract Elements - REAL COIN IMAGES */}
            {Array.from({ length: objectCount }).map((_, i) => {
                const type = i % 4;
                // Mostly coins (type 0 & 1), some crystals (type 2 & 3)
                const isCoin = type < 2;

                // Adjust size for mobile
                const baseSize = isMobile ? 30 : 50;
                const sizeStep = isMobile ? 15 : 25;
                const size = baseSize + (i % 5) * sizeStep;

                const xPos = 2 + (i * 13) % 96;
                const yPos = 5 + (i * 19) % 90;

                const duration = 20 + (i % 10);
                const delay = -i * 2;

                return (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${xPos}%`,
                            top: `${yPos}%`,
                            width: size,
                            height: size,
                            zIndex: 1, // Ensure they are above the background canvas but below text
                        }}
                        animate={{
                            y: [0, -70, 0],
                            x: [0, (i % 2 === 0 ? 30 : -30), 0],
                            rotateY: isCoin ? [0, 360] : 0,
                            rotate: isCoin ? 0 : [0, 360],
                            scale: [1, 1.1, 1],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: delay,
                        }}
                    >
                        {isCoin ? (
                            // REAL SPARK COIN IMAGE
                            <div className="relative w-full h-full rounded-full shadow-[0_0_30px_rgba(255,160,0,0.6)]">
                                <Image
                                    src="/images/coin_new.jpg"
                                    alt="Floating SPK"
                                    fill
                                    className="object-cover rounded-full"
                                />
                                {/* Shine effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent mix-blend-overlay" />
                            </div>
                        ) : (
                            // Gems/Crystals
                            <div className="w-full h-full rotate-45 bg-gradient-to-br from-brand-purple/40 via-purple-600/40 to-brand-indigo/40 border border-purple-400/50 shadow-[0_0_40px_rgba(138,43,226,0.4)] backdrop-blur-sm relative">
                                <div className="absolute inset-[20%] border border-white/30" />
                            </div>
                        )}
                    </motion.div>
                );
            })}

            {/* Film Grain */}
            <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.05] mix-blend-overlay">
                <svg className="w-full h-full">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>
        </div>
    );
}

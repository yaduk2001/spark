"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export default function CelebrationOverlay() {
    const pathname = usePathname();
    const [showText, setShowText] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Refs for cleanup
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const celebTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Text structure
    const lines = [
        { text: "WE ARE", size: "text-6xl md:text-8xl lg:text-9xl" },
        { text: "LAUNCHING", size: "text-7xl md:text-9xl lg:text-[10rem]" },
        { text: "SOON", size: "text-6xl md:text-8xl lg:text-9xl" }
    ];

    // Helper: Random start/end positions for scatter effect
    const getRandomPos = () => ({
        x: Math.random() * 1000 - 500,
        y: Math.random() * 1000 - 500,
        rotate: Math.random() * 360,
    });

    // Helper: Play Audio
    const playAudio = (path: string, volume = 0.5) => {
        const audio = new Audio(path);
        audio.volume = volume;
        audio.play().catch(e => console.warn("Audio play failed (interaction needed?):", e));
    };

    // Helper: Speak Text
    const speakText = () => {
        const audio = new Audio('/audio/launch-voice.mp3');
        audio.volume = 1.0;
        audio.play().catch(() => {
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance("We are launching soon");
                utterance.rate = 0.9;
                utterance.pitch = 0.8;
                window.speechSynthesis.speak(utterance);
            }
        });
    };

    // Helper: Fire Confetti
    const fireConfetti = (particleRatio: number, opts: any) => {
        confetti({
            origin: { y: 0.7 },
            ...opts,
            particleCount: Math.floor(200 * particleRatio),
            zIndex: 9999,
        });
    };

    // Helper: Bombastic Effect (Home)
    const bombasticEffect = () => {
        playAudio('/audio/cheer.mp3', 0.4);
        playAudio('/audio/clap.mp3', 0.6); // Layer applause

        // Play pop sound multiple times for impact
        playAudio('/audio/pop.mp3', 0.6);
        setTimeout(() => playAudio('/audio/pop.mp3', 0.5), 200);
        setTimeout(() => playAudio('/audio/pop.mp3', 0.4), 800);

        setTimeout(speakText, 500);

        // School Pride Effect
        const end = Date.now() + 3 * 1000;
        const colors = ['#000000', '#ffb800', '#ffffff'];

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
                zIndex: 9999,
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
                zIndex: 9999,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Fireworks after a slight delay
        setTimeout(() => {
            const duration = 5 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999, colors: ['#FFD700', '#000000', '#F97316', '#ffffff'] };
            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            // Start burst audio loop
            const burstAudio = new Audio('/audio/burst.mp3');
            burstAudio.volume = 0.5;
            burstAudio.loop = true;
            burstAudio.play().catch(() => { });

            const interval: any = setInterval(function () {
                const timeLeft = animationEnd - Date.now();
                if (timeLeft <= 0) {
                    burstAudio.pause(); // Stop burst sound
                    return clearInterval(interval);
                }
                const particleCount = 50 * (timeLeft / duration);

                // Random pops continue
                if (Math.random() > 0.7) playAudio('/audio/pop.mp3', 0.3);

                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
        }, 1000);

        // Hide text after animation
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setShowText(false), 8000);
    };

    // Interaction Handler (Click to Enter)
    const handleInteraction = () => {
        setHasInteracted(true);
        if (pathname === "/") {
            setShowText(true);
            bombasticEffect();
        } else {
            playAudio('/audio/pop.mp3', 0.6);
            fireConfetti(0.25, { spread: 26, startVelocity: 55, colors: ['#FFD700', '#ffb800'] });
            fireConfetti(0.2, { spread: 60, colors: ['#ffffff', '#F97316'] });
            fireConfetti(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#B8860B', '#ffb800'] });
        }
    };

    // Global session tracker (outside component) is simulated here by using a ref that persists or a module variable?
    // Since this is a client component, a module-level variable works for the session duration (until refresh).

    useEffect(() => {
        // Check if we've already shown the launching sequence in this session
        if (typeof window !== 'undefined' && (window as any).hasShownLaunchAnimation) {
            setShowText(false);
            setHasInteracted(true); // Ensure no overlay on Home
            return;
        }

        // Mark as shown for future navigations
        if (typeof window !== 'undefined') {
            (window as any).hasShownLaunchAnimation = true;
        }

        // Reset state on path change (only if it's the FIRST time, but we just handled that above)
        // Wait! If it's the first time, we run the logic below.

        setShowText(false);
        setHasInteracted(false);
        if (timerRef.current) clearTimeout(timerRef.current);
        if (celebTimerRef.current) clearTimeout(celebTimerRef.current);

        if (pathname === "/") {
            // Wait for interaction on Home
            setShowText(true); // Prepare to show, but covered by overlay until interaction
        } else {
            // Auto-trigger for other pages (might be muted, but visual works)
            setShowText(true);
            setHasInteracted(true); // No overlay needed for internal pages

            // Try auto-play audio (browsers might block this, but we try)
            const audio = new Audio('/audio/pop.mp3');
            audio.play().catch(() => { });

            // Fire visual confetti
            celebTimerRef.current = setTimeout(() => {
                fireConfetti(0.25, { spread: 26, startVelocity: 55, colors: ['#FFD700', '#ffb800'] });
                fireConfetti(0.2, { spread: 60, colors: ['#ffffff', '#F97316'] });
                fireConfetti(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#B8860B', '#ffb800'] });
                fireConfetti(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, colors: ['#ffffff'] });
                fireConfetti(0.1, { spread: 120, startVelocity: 45, colors: ['#FFD700', '#ffb800', '#F97316'] });
            }, 500);

            // Hide text logic
            timerRef.current = setTimeout(() => setShowText(false), 8000);
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            if (celebTimerRef.current) clearTimeout(celebTimerRef.current);
        };
    }, [pathname]);

    return (
        <AnimatePresence>
            {/* Click to Enter Overlay - Only on Home and if not interacted */}
            {!hasInteracted && pathname === "/" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer"
                    onClick={handleInteraction}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="text-brand-gold font-mono text-xl md:text-3xl tracking-[0.5em] uppercase text-center px-4"
                        style={{ textShadow: "0 0 20px rgba(255, 184, 0, 0.5)" }}
                    >
                        Click to Initialize System
                    </motion.div>
                    <div className="mt-4 text-xs text-gray-500 font-mono tracking-widest">AUDIO ENABLED</div>
                </motion.div>
            )}

            {/* Text Overlay */}
            {showText && (hasInteracted || pathname !== "/") && (
                <div className="fixed inset-0 pointer-events-none z-[10000] flex items-center justify-center overflow-hidden bg-black/20 backdrop-blur-[2px]">
                    <div className="flex flex-col items-center justify-center perspective-1000 gap-2 md:gap-4">
                        {lines.map((line, lineIndex) => (
                            <div key={lineIndex} className="flex flex-wrap justify-center whitespace-nowrap">
                                {line.text.split("").map((char, charIndex) => (
                                    <motion.span
                                        key={`${lineIndex}-${charIndex}`}
                                        initial={{ ...getRandomPos(), opacity: 0, scale: 0 }}
                                        animate={{
                                            x: 0,
                                            y: 0,
                                            rotate: 0,
                                            opacity: 1,
                                            scale: 1,
                                            textShadow: "0 0 30px rgba(255, 215, 0, 0.9), 0 0 60px rgba(255, 184, 0, 0.9)"
                                        }}
                                        exit={{ ...getRandomPos(), opacity: 0, scale: 0, transition: { duration: 0.8 } }}
                                        transition={{
                                            type: "spring",
                                            damping: 12,
                                            stiffness: 100,
                                            duration: 1.5,
                                            delay: Math.random() * 0.5
                                        }}
                                        className={`${line.size} font-black italic tracking-tighter text-white mx-1 md:mx-2 gradient-text-silver drop-shadow-2xl`}
                                        style={{
                                            display: "inline-block",
                                            WebkitTextStroke: "2px rgba(255,255,255,0.1)"
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
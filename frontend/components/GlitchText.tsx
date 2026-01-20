"use client";



interface GlitchTextProps {
    text: string;
    as?: "h1" | "h2" | "h3" | "p" | "span";
    className?: string;
}

export default function GlitchText({ text, as: Tag = "h2", className = "" }: GlitchTextProps) {
    return (
        <div className={`relative inline-block ${className}`}>
            <Tag className="relative z-10">{text}</Tag>

            {/* RGB Layers */}
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-brand-purple opacity-70 animate-pulse-slow block"
                style={{ transform: "translate(-2px, -2px)" }}
            >
                {text}
            </span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-brand-gold opacity-70 animate-pulse-slow block"
                style={{ transform: "translate(2px, 2px)" }}
            >
                {text}
            </span>

            {/* Glitch Overlay via CSS */}
            <span
                className="glitch-layers absolute inset-0 text-transparent select-none pointer-events-none"
                data-text={text}
                aria-hidden="true"
            >
                {text}
            </span>
        </div>
    );
}

export const RELEASE_EASING = [0.22, 1, 0.36, 1] as const; // "Power" cubic-bezier

export const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const revealUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: RELEASE_EASING
        }
    }
};

export const revealScale = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: RELEASE_EASING
        }
    }
};

export const textReveal = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: RELEASE_EASING
        }
    }
};

export const hoverSpring = {
    scale: 1.02,
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
    }
};

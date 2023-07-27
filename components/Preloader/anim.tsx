export const opacity: { initial: { opacity: number }, enter: { opacity: number, transition: { duration: number, delay: number } } } = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 }
    },
}

export const slideUp: { initial: { top: number }, exit: { top: string, transition: { duration: number, ease: number[], delay: number } } } = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
}
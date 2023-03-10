export const animation = {
    hidden: {
        y: "10%",
        opacity: 0,
        transition: {
            type: "spring", bounce: 0.3
        }
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export const MapTransition = {
    open: {
        opacity: 0,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 1, y: 0, transition: { duration: 1.5 } }
}

export const videoAnimation = {
    open: {
        opacity: 0,
        transition: {
            type: "spring", satisfies: 300, damping: 24
        }
    },
    closed: {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
}
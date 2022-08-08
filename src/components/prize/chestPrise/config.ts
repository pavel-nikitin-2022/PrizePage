export const CLOSE_CONTENT = {
    delay: 0,
    duration: 1,
    value: 0,
};

export const OPEN_CONTENT = {
    prize: {
        translateX: {
            duration: 700,
            delay: 300,
            value: -50
        },
        translateY: {
            duration: 700,
            delay: 300,
            value: '-25vh',
        },
        scale: {
            duration: 700,
            delay: 300,
            value: 1,
        }
    },
    image: {
        opacity: {
            duration: 500,
            delay: 400,
            value: 1,
        }
    },
    content: {
        opacity: {
            duration: 600,
            delay: 1000,
            value: 1,
        }
    }
}

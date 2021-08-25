export default {
    lightPoints: {
        helper: false,
        color: '#fafafa',
        intensity:  0.4,
        distance: 300,
        decay: 2.4,
        maxLights: 20
    },
    movingLights: {
        helper: true,
        color: {
            one: '#54CD41',
            two: '#F9595B'
        },
        intensity:  0.5,
        distance: 300,
        decay: 2.4,
        animationSpeed: 0.5,
        maxLights: 15
    },
    plane: {
        size: 1000,
        halfSize: 500
    },
    cylinders: {
        maxCylinder: 150,
        randomizeHeight: {
            min: 40,
            max: 150
        }
    }
}
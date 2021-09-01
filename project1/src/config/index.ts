export default {
    scene: {
        background: '#05011D',
        fog: '#05011D'
    },
    stars: {
        helper: true,
        color: '#fff',
        intensity:  1,
        distance: 20,
        maxLights: 40
    },
    movingLights: {
        helper: true,
        color: {
            one: '#7A65FD',
            two: '#4232A0'
        },
        intensity:  0.3,
        distance: 300,
        decay: 2.4,
        animationSpeed: 0.5,
        maxLights: 10
    },
    envioronmentLight: {
        ambientLight: {
            color: '#fff',
            intensity:  0.4,
        },
        ambientLightProbe: {
            color: '#2C0C87',
            intensity:  0.2,
        },
    },
    plane: {
        size: 500,
        halfSize: 250
    },
    cylinders: {
        maxCylinder: 30,
        randomizeHeight: {
            min: 40,
            max: 130
        }
    },
    controls: {
        orbit: {
            minPolarAngle: 1.25,
            maxPolarAngle: 1.25,
            minDistance: 450,
            maxDistance: 450,
            autoRotate: true,
        }
    },
    tests: {
        stats: {
            show: true
        }
    }
}
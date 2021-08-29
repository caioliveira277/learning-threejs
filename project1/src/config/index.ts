export default {
    scene: {
        // background: '#ddd',
        // fog: '#fff'
        background: '#05011D',
        fog: '#05011D'
    },
    lightPoints: {
        helper: false,
        color: '#fff',
        intensity:  0.4,
        distance: 300,
        decay: 2.4,
        maxLights: 20
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
        maxLights: 15
    },
    envioronmentLight: {
        ambientLight: {
            // color: '#fff',
            color: '#000',
            intensity:  0.4,
        },
        ambientLightProbe: {
            color: '#2C0C87',
            intensity:  0.2,
        },
    },
    plane: {
        size: 1000,
        halfSize: 500
    },
    cylinders: {
        // maxCylinder: 150,
        maxCylinder: 0,
        randomizeHeight: {
            min: 40,
            max: 150
        }
    },
    controls: {
        orbit: {
            // minPolarAngle: 1.35,
            // minDistance: 500,
            // maxDistance: 500,
            // autoRotate: true,
            minPolarAngle: 1.3,
            minDistance: 0,
            maxDistance: 100,
            autoRotate: true,
        }
    },
    tests: {
        stats: {
            show: true
        }
    }
}
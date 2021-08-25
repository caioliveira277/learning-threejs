import {
    PointLight,
    PointLightHelper,
    Color,
    Scene
} from 'three';
import {
    randomizeRange,
    randomizeAxisValues
} from '@src/utils';
import config from '@src/config';

interface ImovingLightsParameters extends PointLight{
    initial?: Boolean,
    toX?: number,
    toZ?: number,
}
export default class MovingLight {
    private readonly maxMovingLights = config.movingLights.maxLights;
    private readonly lightConfig = config.movingLights;
    private readonly planeConfig = config.plane;
    private readonly maxLightPoints = config.lightPoints.maxLights;

    public renderedMovingLights: ImovingLightsParameters[] = [];

    protected scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;

        this.setLight();
    }

    private generateNewPosition(currentPosition: number, toPosition: number): number{
        const lightConfig = config.movingLights;
        let nextPosition: number = currentPosition;

        if(currentPosition < toPosition) {
            nextPosition += lightConfig.animationSpeed;
        } else if (currentPosition > toPosition){
            nextPosition -= lightConfig.animationSpeed;
        }

        return nextPosition;
    }

    private setLight(): void {
        for (let i = 0; i < this.maxMovingLights; i++) {
            const dynamicColor = i % 2 ? this.lightConfig.color.one : this.lightConfig.color.two;

            const pointLight = new PointLight(
                new Color(dynamicColor),
                this.lightConfig.intensity,
                this.lightConfig.distance,
                this.lightConfig.decay
            );
            const pointLightHelper = new PointLightHelper(pointLight, 0.7);

            const randomAxis = randomizeAxisValues({
                x: {
                    value: randomizeRange(0, this.planeConfig.halfSize) - 40
                },
                z: {
                    value: randomizeRange(0, this.planeConfig.halfSize) - 40,
                    parameter: this.maxLightPoints / 2
                }
            }, i);

            pointLight.position.x = randomAxis.x.value;
            pointLight.position.y = 40;
            pointLight.position.z = randomAxis.z.value;

            this.scene.add(pointLight);

            if(this.lightConfig.helper) {
                this.scene.add(pointLightHelper);
            }

            this.renderedMovingLights.push(pointLight);
        }
    }

    public setAnimate(): void {
        for (let i = 0; i < this.renderedMovingLights.length; i++) {
            let pointLight = this.renderedMovingLights[i];

            let nextPositionX = pointLight.position.x;
            let nextPositionZ = pointLight.position.z;

            const randomAxis = randomizeAxisValues({
                x: {
                    value: randomizeRange(0, this.planeConfig.halfSize) - 40
                },
                z: {
                    value: randomizeRange(0, this.planeConfig.halfSize) - 40,
                    parameter: this.renderedMovingLights.length / 2
                }
            }, i);


            if(!pointLight.initial) {
                pointLight.initial = true;
                pointLight.toX = randomAxis.x.value;
                pointLight.toZ = randomAxis.z.value;
            }

            nextPositionX = this.generateNewPosition(pointLight.position.x, pointLight.toX);
            if(pointLight.position.x === pointLight.toX) {
                pointLight.toX = randomAxis.z.value;
            }

            nextPositionZ = this.generateNewPosition(pointLight.position.z, pointLight.toZ);
            if(pointLight.position.z === pointLight.toZ) {
                pointLight.toZ = randomAxis.z.value;
            }

            pointLight.position.set(nextPositionX, 40, nextPositionZ);
        }
    }
}
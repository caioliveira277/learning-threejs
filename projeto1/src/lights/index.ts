import {
    PointLight,
    PointLightHelper,
    AmbientLight,
    AmbientLightProbe,
    Color
} from 'three';
import {
    randomizeRange,
    randomizeAxisValues
} from '../utils';
import ForestScene from '../scenes';


class Lights {
    private readonly maxLightPoints = 20;
    private readonly maxMovingLights = 15;
    public renderedMovingLights: PointLight[] = [];

    constructor() {
        this.setLightPoints();
        this.setMovingLights();
        this.setEnvironmentLights();
    }

    private setLightPoints(): void {
        for (let i = 0; i < this.maxLightPoints; i++) {
            const pointLight = new PointLight(new Color('#fafafa'), 0.4, 300, 2.4);
            const lightPointLight = new PointLightHelper(pointLight, 7);

            const randomAxis = randomizeAxisValues({
                x: {
                    value: randomizeRange(0, 500) - 40
                },
                z: {
                    value: randomizeRange(0, 500) - 40,
                    parameter: this.maxLightPoints / 2
                }
            });

            pointLight.position.x = randomAxis.x.value;
            pointLight.position.y = 40;
            pointLight.position.z = randomAxis.z.value;

            ForestScene.add(pointLight);
            ForestScene.add(lightPointLight);
        }
    }

    private setMovingLights(): void {
        for (let i = 0; i < this.maxMovingLights; i++) {
            const dynamicColor = this.maxMovingLights % 2 ? '#54CD41':'#E2DB36';

            const pointLight = new PointLight(new Color(dynamicColor), 0.5, 300, 2.4);
            const lightPointLight = new PointLightHelper(pointLight, 0.7);

            const randomAxis = randomizeAxisValues({
                x: {
                    value: randomizeRange(0, 500) - 40
                },
                z: {
                    value: randomizeRange(0, 500) - 40,
                    parameter: this.maxLightPoints / 2
                }
            });

            pointLight.position.x = randomAxis.x.value;
            pointLight.position.y = 40;
            pointLight.position.z = randomAxis.z.value;

            ForestScene.add(pointLight);
            ForestScene.add(lightPointLight);

            this.renderedMovingLights.push(pointLight);

        }
    }

    private setEnvironmentLights(): void {
        const ambientLight = new AmbientLight(new Color('#000'), 0.4);
        const ambientLightProbe = new AmbientLightProbe(new Color('#2C0C87'), 0.2);

        ForestScene.add(ambientLight);
        ForestScene.add(ambientLightProbe);
    }
}

export default new Lights;
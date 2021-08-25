import {
    Scene,
    PointLight,
    PointLightHelper,
    Color
} from 'three';
import {
    randomizeRange,
    randomizeAxisValues
} from '@src/utils';
import config from '@src/config';

export default class LightPoint {
    private readonly maxLightPoints = config.lightPoints.maxLights;
    private readonly lightConfig = config.lightPoints;
    private readonly planeConfig = config.plane;

    protected scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;

        this.setLight();
    }

    private setLight(): void {
        for (let i = 0; i < this.maxLightPoints; i++) {
            const pointLight = new PointLight(
                new Color(this.lightConfig.color),
                this.lightConfig.intensity,
                this.lightConfig.distance,
                this.lightConfig.decay
            );
            const pointLightHelper = new PointLightHelper(pointLight, 7);

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

            if(this.lightConfig.helper) {
                this.scene.add(pointLightHelper);
            }

            this.scene.add(pointLight);
        }
    }
}
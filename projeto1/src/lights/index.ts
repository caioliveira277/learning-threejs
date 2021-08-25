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
    public movingLightsRendered: PointLight[] = [];

    constructor() {
        this.setLightPoints();
        this.setMovingLights();
        this.setAmbientLights();
    }

    private setLightPoints(): void {
        for (let i = 0; i < this.maxLightPoints; i++) {
            const lightPoint = new PointLight(new Color('#fafafa'), 0.4, 300, 2.4);
            const lightPointHelper = new PointLightHelper(lightPoint, 7);
        
            const randomAxis = randomizeAxisValues({
                x: {
                    value: randomizeRange(0, 500) - 40
                },
                z: {
                    value: randomizeRange(0, 500) - 40,
                    parameter: this.maxLightPoints / 2
                }
            });

            lightPoint.position.x = randomAxis.x.value;
            lightPoint.position.y = 40;
            lightPoint.position.z = randomAxis.z.value;
        
            ForestScene.add(lightPoint);
            ForestScene.add(lightPointHelper);
        }
    }

    private setMovingLights(): void {
        for (let i = 0; i < this.maxMovingLights; i++) {
            const dynamicColor = this.maxMovingLights % 2 ? '#54CD41':'#E2DB36';

            const lightPoint = new PointLight(new Color(dynamicColor), 0.5, 300, 2.4);
            const lightPointHelper = new PointLightHelper(lightPoint, 0.7);

            const randomAxis = randomizeAxisValues({
                x: {
                    value: randomizeRange(0, 500) - 40
                },
                z: {
                    value: randomizeRange(0, 500) - 40,
                    parameter: this.maxLightPoints / 2
                }
            });

            lightPoint.position.x = randomAxis.x.value;
            lightPoint.position.y = 40;
            lightPoint.position.z = randomAxis.z.value;

            ForestScene.add(lightPoint);
            ForestScene.add(lightPointHelper);

            this.movingLightsRendered.push(lightPoint);

        }
    }

    private setAmbientLights(): void {
        const ambientLight = new AmbientLight(new Color('#000'), 0.4);
        const ambientLightProbe = new AmbientLightProbe(new Color('#2C0C87'), 0.2);

        ForestScene.add(ambientLight);
        ForestScene.add(ambientLightProbe);
    }
}

export default new Lights();
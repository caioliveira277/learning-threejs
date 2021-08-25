import {
    Color,
    Scene,
    AmbientLight,
    AmbientLightProbe
} from 'three';
import config from '@src/config';

export default class EnvioronmentLight {
    private readonly lightConfig = config.envioronmentLight;

    protected scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;

        this.setAmbientLight();
        this.setAmbientLightProbe();
    }

    private setAmbientLight(): void {
        const ambientLight = new AmbientLight(
            new Color(this.lightConfig.ambientLight.color),
            this.lightConfig.ambientLight.intensity
        );

        this.scene.add(ambientLight);
    }

    private setAmbientLightProbe(): void {
        const ambientLightProbe = new AmbientLightProbe(
            new Color(this.lightConfig.ambientLightProbe.color),
            this.lightConfig.ambientLightProbe.intensity
        );

        this.scene.add(ambientLightProbe);
    }
}
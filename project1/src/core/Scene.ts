import {
    Scene,
    Color,
    FogExp2
} from 'three';
import config from '@src/config';

export default class ForestScene extends Scene {
    private readonly sceneConfig = config.scene;
    constructor() {
        super();
        this.setEnvironment();
    }

    private setEnvironment(): void {
        this.background = new Color(this.sceneConfig.background);
        this.fog = new FogExp2(this.sceneConfig.fog, 0.0035);
    }
}
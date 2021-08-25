import {
    Scene,
    Color,
    FogExp2
} from 'three';

class ForestScene extends Scene {
    constructor() {
        super();
        this.setEnvironment();
    }

    private setEnvironment(): void {
        this.background = new Color('#000');
        this.fog = new FogExp2('#000', 0.0005);
    }
}

export default new ForestScene();
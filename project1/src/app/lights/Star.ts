import config from "@src/config";
import { randomizeRange } from "@src/utils";
import {
    Color,
    MathUtils,
    PointLight,
    PointLightHelper,
    Scene,
} from "three";

export default class Star {
    protected scene: Scene;
    private readonly starConfig = config.stars;

    constructor(scene: Scene) {
        this.scene = scene;

        this.setStar();
    }

    private setStar() {
        for (let i = 0; i < this.starConfig.maxLights; i++) {
            const light = new PointLight(
                new Color(this.starConfig.color),
                this.starConfig.intensity,
                this.starConfig.distance
            );
            const helper = new PointLightHelper(light, 0.4);

            const [x, z] = Array(3).fill('').map(() => {
                return MathUtils.randFloatSpread(700);
            });
            const y = randomizeRange(100, 150);

            light.position.set(x, y, z);

            this.scene.add(light);
            if(this.starConfig.helper) {
                this.scene.add(helper);
            }
        }
    }
}
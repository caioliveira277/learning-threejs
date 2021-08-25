import {
    Scene
} from 'three';
import EnvioronmentLight from "./EnvioronmentLight";
import LightPoint from "./LightPoint";
import MovingLight from "./MovingLight";

export default class Lights {
    public envioronmentLight: EnvioronmentLight;
    public lightPoint: LightPoint;
    public movingLight: MovingLight;

    constructor(scene: Scene) {
        this.envioronmentLight = new EnvioronmentLight(scene);
        this.lightPoint = new LightPoint(scene);
        this.movingLight = new MovingLight(scene);
    }
}
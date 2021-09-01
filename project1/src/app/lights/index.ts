import {
    Scene
} from 'three';
import EnvioronmentLight from "./EnvioronmentLight";
import MovingLight from "./MovingLight";
import Star from './Star';

export default class Lights {
    public envioronmentLight: EnvioronmentLight;
    public movingLight: MovingLight;
    public star: Star;

    constructor(scene: Scene) {
        this.envioronmentLight = new EnvioronmentLight(scene);
        this.movingLight = new MovingLight(scene);
        this.star = new Star(scene);
    }
}
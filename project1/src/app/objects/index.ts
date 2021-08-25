import {
    Scene
} from 'three';
import Plane from "./Plane";
import Cylinder from "./Cylinder";

export default class Objects {
    public plane: Plane;
    public cylinder: Cylinder;

    constructor(scene: Scene) {
        this.plane = new Plane(scene);
        this.cylinder = new Cylinder(scene);
    }
}
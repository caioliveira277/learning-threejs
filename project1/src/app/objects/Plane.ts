import {
    PlaneGeometry,
    Color,
    Mesh,
    Scene,
    MeshLambertMaterial,
} from 'three';
import config from '@src/config';

export default class Plane {
    private readonly planeConfig = config.plane;

    protected scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;

        this.setPlane();
    }

    private setPlane(): void {
        const geometry = new PlaneGeometry(this.planeConfig.size, this.planeConfig.size);
        const material = new MeshLambertMaterial({ color: new Color('#DFBAFC') });
        const plane = new Mesh(geometry, material);

        plane.position.set(0, 0, 0);
        plane.geometry.rotateX(-Math.PI / 2)

        this.scene.add(plane);
    }
}
import {
    PlaneGeometry,
    MeshPhysicalMaterial,
    Color,
    DoubleSide,
    Mesh,
    Scene
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
        const material = new MeshPhysicalMaterial({color: new Color('#DFBAFC'), side: DoubleSide});
        const plane = new Mesh(geometry, material);

        plane.position.set(0, 0, 0);
        plane.rotation.x = - Math.PI/2;

        this.scene.add(plane);
    }
}
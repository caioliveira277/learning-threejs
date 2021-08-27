import {
    PlaneGeometry,
    MeshPhysicalMaterial,
    Color,
    DoubleSide,
    Mesh,
    Scene,
    BufferAttribute,
} from 'three';
import config from '@src/config';
import { randomizeRange } from '@src/utils';

export default class Plane {
    private readonly planeConfig = config.plane;

    protected scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;

        this.setPlane();
        this.teste();
    }

    private setPlane(): void {
        const geometry = new PlaneGeometry(this.planeConfig.size, this.planeConfig.size);
        const material = new MeshPhysicalMaterial({color: new Color('#DFBAFC'), side: DoubleSide});
        const plane = new Mesh(geometry, material);

        plane.position.set(0, 0, 0);
        plane.rotation.x = - Math.PI/2;

        this.scene.add(plane);
    }

    private teste(): void {
        const geometry = new PlaneGeometry(50, 50, 50, 50);

        const teste = new Float32Array(geometry.attributes.position.array.length);
        for (let i = 0; i <= geometry.attributes.position.array.length; i++) {
            let value = geometry.attributes.position.array[i];

            if(!value) {
                value = randomizeRange(-25, 25);
            }
            teste[i] = value;
        }
        // geometry.setAttribute('position', new BufferAttribute(teste, 3, true));

        const material = new MeshPhysicalMaterial({color: new Color('#DFBAFC'), side: DoubleSide});
        const plane = new Mesh(geometry, material);

        plane.position.set(0, 50, 0);
        plane.rotateX(- Math.PI / 2);

        this.scene.add(plane);
    }
}
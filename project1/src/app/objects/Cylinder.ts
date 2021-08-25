import {
    MeshPhysicalMaterial,
    CylinderGeometry,
    Color,
    Mesh,
    Scene
} from 'three';
import { randomizeRange, randomizeAxisValues } from '@src/utils';
import config from '@src/config';

export default class Cylinder {
    private readonly maxCylinders = config.cylinders.maxCylinder;
    private readonly planeConfig = config.plane;
    private readonly cylinderConfig = config.cylinders;
    public renderedCylinders: Mesh<CylinderGeometry, MeshPhysicalMaterial>[] = [];

    protected scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;

        this.setCylinders();
    }



    private setCylinders(): void {
        let heightParams = this.cylinderConfig.randomizeHeight;
        for ( let i = 0; i < this.maxCylinders; i ++ ) {
            const randomHeightGeometry = randomizeRange(heightParams.min, heightParams.max);

            const geometry = new CylinderGeometry(0, 10, randomHeightGeometry, 4, 1);
            const material = new MeshPhysicalMaterial({ color: new Color('#DFBAFC'), flatShading: true });
            const mesh = new Mesh(geometry, material);

            geometry.computeBoundingSphere();
            const randomAxis = randomizeAxisValues({
                x: {
                    value: randomizeRange(0, this.planeConfig.halfSize) - geometry.boundingSphere.radius / 2
                },
                z: {
                    value: randomizeRange(0, this.planeConfig.halfSize) - geometry.boundingSphere.radius / 2,
                    parameter: this.maxCylinders / 2
                }
            }, i);

            mesh.position.x = randomAxis.x.value;
            mesh.position.y = randomHeightGeometry / 2;
            mesh.position.z = randomAxis.z.value;

            this.scene.add(mesh);
            this.renderedCylinders.push(mesh);
        }
    }
}
import {
    PlaneGeometry,
    MeshPhysicalMaterial,
    CylinderGeometry,
    Color,
    DoubleSide,
    Mesh,
    Scene
} from 'three';
import { randomizeRange, randomizeAxisValues } from '@src/utils';
import config from '@src/config';

export default class Objects {
    private readonly maxCylinders = config.cylinders.maxCylinder;
    private readonly planeConfig = config.plane;
    private readonly cylinderConfig = config.cylinders;
    public renderedCylinders: Mesh<CylinderGeometry, MeshPhysicalMaterial>[] = [];

    protected scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;
        this.setPlane();
        this.setCylinders();
    }

    private setPlane(): void {
        const geometry = new PlaneGeometry(this.planeConfig.size, this.planeConfig.size);
        const material = new MeshPhysicalMaterial({color: new Color('#DFBAFC'), side: DoubleSide});
        const plane = new Mesh(geometry, material);

        plane.position.set(0, 0, 0);
        plane.rotation.x = - Math.PI/2;

        this.scene.add(plane);
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
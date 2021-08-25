import {
    PlaneGeometry,
    MeshPhysicalMaterial,
    CylinderGeometry,
    Color,
    DoubleSide,
    Mesh
} from 'three';
import ForestScene from '../scenes';
import { randomizeRange, randomizeAxisValues } from '../utils';

class Objects {
    private readonly maxCylinders = 200;
    public renderedCylinders: Mesh<CylinderGeometry, MeshPhysicalMaterial>[] = [];

    constructor() {
        this.setPlane();
        this.setCylinders();
    }

    private setPlane(): void {
        const geometry = new PlaneGeometry(1000, 1000);
        const material = new MeshPhysicalMaterial({color: new Color('#DFBAFC'), side: DoubleSide});
        const plane = new Mesh(geometry, material);

        plane.position.set(0, 0, 0);
        plane.rotation.x = - Math.PI/2;

        ForestScene.add(plane);
    }

    private setCylinders(): void {
        for ( let i = 0; i < this.maxCylinders; i ++ ) {
            const randomHeightGeometry = randomizeRange(40, 170);

            const geometry = new CylinderGeometry(0, 10, randomHeightGeometry, 4, 1);
            const material = new MeshPhysicalMaterial({ color: new Color('#DFBAFC'), flatShading: true });
            const mesh = new Mesh(geometry, material);

            geometry.computeBoundingSphere();
            const randomAxis = randomizeAxisValues({
                x: {
                    value: randomizeRange(0, 500) - (geometry.boundingSphere.radius / 2)
                },
                z: {
                    value: randomizeRange(0, 500) - (geometry.boundingSphere.radius / 2),
                    parameter: this.maxCylinders / 2
                }
            });

            mesh.position.x = randomAxis.x.value;
            mesh.position.z = randomAxis.z.value;
            mesh.position.y = randomHeightGeometry / 2;

            ForestScene.add(mesh);
            this.renderedCylinders.push(mesh);
        }
    }
}

export default new Objects;
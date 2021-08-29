import {
    PlaneGeometry,
    Color,
    Mesh,
    Scene,
    MeshLambertMaterial,
    BufferAttribute,
    MeshDepthMaterial,
    MeshPhongMaterial
} from 'three';
import config from '@src/config';
import { randomizeRange } from '@src/utils';

import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';

export default class Plane {
    private readonly planeConfig = config.plane;

    protected scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;

        // this.setPlane();
        this.teste();
    }

    private setPlane(): void {
        const geometry = new PlaneGeometry(this.planeConfig.size, this.planeConfig.size);
        const material = new MeshLambertMaterial({ color: new Color('#DFBAFC') });
        const plane = new Mesh(geometry, material);

        plane.position.set(0, 0, 0);
        plane.geometry.rotateX(-Math.PI / 2)

        this.scene.add(plane);
    }

    private teste(): void {

        function generateHeight(width: number, height: number) {

            const size = width * height, data = new Uint8Array(size),
                perlin = new ImprovedNoise(), z = Math.random() * 100;

            let quality = 1;

            for (let j = 0; j < 4; j++) {

                for (let i = 0; i < size; i++) {

                    const x = i % width, y = ~ ~(i / width);
                    data[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality * 1.75);

                }

                quality *= 5;

            }

            return data;

        }
        const geometry = new PlaneGeometry(500, 500, 20, 20);
        const material = new MeshLambertMaterial({ color: new Color('#DFBAFC') });
        const plane = new Mesh(geometry, material);

        const vertices = geometry.getAttribute('position').array;

        /*
            i+=3 vertices[i + 1] => 250
        */

        let teste = 0;
        const newPosition = new Float32Array(vertices.length)
            .fill(0)
            .map((v, index) => {
                let newValue = vertices[index];

                if(!newValue){
                    teste += 1;

                    if(teste === 1) {
                        newValue = randomizeRange(5, 10);
                    } else if (teste === 2) {
                        newValue = randomizeRange(5, 20);
                    } else if (teste === 3) {
                        newValue = randomizeRange(30, 60);
                    } else if (teste === 4) {
                        newValue = randomizeRange(5, 20);
                    } else if (teste === 5) {
                        newValue = randomizeRange(5, 10);
                        teste = 0;
                    }
                }


                return newValue
            });

        console.log(newPosition);
        geometry.setAttribute('position', new BufferAttribute(newPosition, 3));


        plane.geometry.rotateX(-Math.PI / 2);
        plane.position.set(0, -40, 0);

        this.scene.add(plane);
    }
}
import {
    PerspectiveCamera,
    WebGLRenderer
} from 'three';
import { OrbitControls as Orbit } from 'three/examples/jsm/controls/OrbitControls.js';

export default class OrbitControls extends Orbit {
    constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
        super(camera, renderer.domElement);

        this.setParameters();
    }

    private setParameters(): void {
        this.enableDamping = true;
        this.dampingFactor = 0.05;
        this.target.set(0, 0, 0);
        this.screenSpacePanning = false;
        this.minDistance = 500;
        this.maxDistance = 500;
        this.autoRotate = true;
        this.autoRotateSpeed = 1;
        this.minPolarAngle = 1.35;
    }
}
import {
    PerspectiveCamera,
    WebGLRenderer
} from 'three';
import { OrbitControls as Orbit } from 'three/examples/jsm/controls/OrbitControls.js';
import config from '@src/config';

export default class OrbitControl extends Orbit {
    private readonly orbitConfig = config.controls.orbit;

    constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
        super(camera, renderer.domElement);

        this.setParameters();
    }

    private setParameters(): void {
        this.enableDamping = true;
        this.dampingFactor = 0.05;
        this.target.set(0, 0, 0);
        this.screenSpacePanning = false;
        this.autoRotateSpeed = 1;

        this.minDistance = this.orbitConfig.minDistance;
        this.maxDistance = this.orbitConfig.maxDistance;
        this.minPolarAngle = this.orbitConfig.minPolarAngle;
        this.maxPolarAngle = this.orbitConfig.maxPolarAngle;
        this.autoRotate = this.orbitConfig.autoRotate;
    }
}
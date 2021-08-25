import WebGLRenderer from '../renderers';
import PerspectiveCamera from '../cameras';
import { OrbitControls as Orbit } from 'three/examples/jsm/controls/OrbitControls.js';

class OrbitControls extends Orbit {
    constructor() {
        super(PerspectiveCamera, WebGLRenderer.domElement);

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

export default new OrbitControls;
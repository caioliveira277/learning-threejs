import PerspectiveCamera from '../cameras';
import WebGLRenderer from '../renderers';

class Listeners {
    constructor() {
        window.addEventListener('resize', this.setOnResize);
    }

    private setOnResize(): void {
        PerspectiveCamera.aspect = window.innerWidth / window.innerHeight;
        PerspectiveCamera.updateProjectionMatrix();
        WebGLRenderer.setSize(window.innerWidth, window.innerHeight);
    }
}

export default new Listeners;
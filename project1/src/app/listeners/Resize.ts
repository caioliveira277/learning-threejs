import {
    PerspectiveCamera,
    WebGLRenderer
} from 'three';

export default class Resize {
    protected camera: PerspectiveCamera;
    protected renderer: WebGLRenderer;

    constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
        this.camera = camera;
        this.renderer = renderer;

        this.setOnResize();
        window.addEventListener('resize', () => this.setOnResize());
    }

    private setOnResize(): void {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
import {
    WebGLRenderer as WebGL
} from 'three';

export default class WebGLRenderer extends WebGL{
    constructor() {
        super({
            antialias: true
        });

        this.setVisualization();
        this.toRender();
    }

    private setVisualization(): void {
        this.setPixelRatio(window.devicePixelRatio);
        this.setSize(window.innerWidth, window.innerHeight);
    }

    private toRender(): void {
        document.body.appendChild(this.domElement);
    }
}
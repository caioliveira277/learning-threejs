import {
    PerspectiveCamera,
    WebGLRenderer
} from 'three';
import OrbitControl from "./OrbitControl";

export default class Controls {
    public orbitControl: OrbitControl;

    constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
        this.orbitControl = new OrbitControl(camera, renderer);
    }
}
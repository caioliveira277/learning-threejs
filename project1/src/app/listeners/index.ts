import {
    PerspectiveCamera,
    WebGLRenderer
} from 'three';
import Resize from './Resize';

export default class Listeners {
    public resize: Resize;

    constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
        this.resize = new Resize(camera, renderer);
    }
}
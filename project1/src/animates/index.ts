import Lights from '../lights';
import OrbitControls from '../controls';
import WebGLRenderer from '../renderers';
import ForestScene from '../scenes';
import PerspectiveCamera from '../cameras';

class Animates {
    constructor() {
        this.setCoreAnimate();
    }

    private setCoreAnimate(): void {
        (function animate() {
            requestAnimationFrame(animate);

            OrbitControls.update();

            Lights.setMovingLightsAnimate();

            WebGLRenderer.render(ForestScene, PerspectiveCamera);
        })();
    }
}

export default new Animates;
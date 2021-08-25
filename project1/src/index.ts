import ForestScene from '@src/core/Scene';
import PerspectiveCamera from '@src/core/Camera';
import WebGLRenderer from '@src/core/Renderer';

import OrbitControls from '@src/app/controls/OrbitControl';
import Lights from '@src/app/lights/Light';
import Objects from '@src/app/objects/Object';

class Core {
    protected forestScene: ForestScene;
    protected perspectiveCamera: PerspectiveCamera;
    protected webGLRenderer: WebGLRenderer;

    protected orbitControls: OrbitControls;
    protected lights: Lights;
    protected objects: Objects;

    constructor() {
        this.forestScene = new ForestScene();
        this.perspectiveCamera = new PerspectiveCamera();
        this.webGLRenderer = new WebGLRenderer();

        this.orbitControls = new OrbitControls(this.perspectiveCamera, this.webGLRenderer);
        this.lights = new Lights(this.forestScene);
        this.objects = new Objects(this.forestScene);

        this.setCoreAnimate();
    }

    private setCoreAnimate(): void {
        const self = this;
        (function animate() {
            requestAnimationFrame(animate);

            self.orbitControls.update();
            self.lights.setMovingLightsAnimate();
            self.webGLRenderer.render(self.forestScene, self.perspectiveCamera);
        })();
    }
}

new Core();
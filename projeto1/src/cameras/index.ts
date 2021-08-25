import { 
    PerspectiveCamera as Perspective
 } from 'three';

class PerspectiveCamera extends Perspective {
    constructor() {
        super(
            45, 
            window.innerWidth / window.innerHeight, 
            1, 
            10000
        );

        this.setPosition();
    }

    private setPosition(): void {
        this.position.set(100, 900, 0);
    }
}

export default new PerspectiveCamera;
// (function animate() {
// 	requestAnimationFrame(animate);

//     controls.update();

//     for (let i = 0; i < fireFlies.length; i++) {
//         let fireFly = fireFlies[i];

//         let nextPositionX = fireFly.position.x;
//         let nextPositionZ = fireFly.position.z;

//         let randomX = randomRange(0, 500) - 40;
//         if(i % 2) {
//             randomX = randomX * -1;
//         }


//         let randomZ = randomRange(0, 500) - 40;
//         if(i <= (fireFlies.length / 2)) {
//             randomZ = randomZ * -1;
//         }

//         if(fireFly.completed === undefined) {
//             fireFly.completed = false;
//             fireFly.toX = randomX;
//             fireFly.toZ = randomZ;
//         }




//         if(fireFly.position.x < fireFly.toX) {
//             nextPositionX += 0.5;
//         } else if (fireFly.position.x > fireFly.toX){
//             nextPositionX -= 0.5;
//         }
//         if(fireFly.position.x === fireFly.toX) {
//             fireFly.toX = randomX;
//         }


//         if(fireFly.position.z < fireFly.toZ) {
//             nextPositionZ += 0.5;
//         } else if (fireFly.position.z > fireFly.toZ){
//             nextPositionZ -= 0.5;
//         }
//         if(fireFly.position.z === fireFly.toZ) {
//             fireFly.toZ = randomZ;
//         }



//         fireFly.position.set(nextPositionX, 40, nextPositionZ);
//     }

	// renderer.render(scene, camera);
// })();

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
            WebGLRenderer.render(ForestScene, PerspectiveCamera);
        })()
        // controls.update();
    }
}

export default new Animates;
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* scenes */
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000');
scene.fog = new THREE.FogExp2(new THREE.Color('#000'), 0.0015);
/* scenes */

/* cameras */
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(100, 900, 0);
/* cameras */

/* renderers */
const renderer = new THREE.WebGLRenderer({antialias: true});
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
/* renderers */

/* controlls */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(0, 0, 0);
controls.screenSpacePanning = false;
controls.minDistance = 100;
controls.maxDistance = 500;
controls.autoRotate = true;
controls.autoRotateSpeed = 1;
controls.minPolarAngle = 1;
/* controlls */

/* lights */
const fireFlies = [];
for (let i = 0; i < 30; i++) {
    const pointLight = new THREE.PointLight(new THREE.Color('#fafafa'), 0.9, 300, 2.4);
    const pointHelper = new THREE.PointLightHelper(pointLight, 10);

    pointLight.position.set(randomRange(1, 1400) - 800, 40, randomRange(1, 1400) - 800);
    scene.add(pointLight);
    scene.add(pointHelper);
    
    const fireFlyColor = new THREE.PointLight(new THREE.Color('#158004'), 1, 300, 2.4);
    const fireFlyColorHelper = new THREE.PointLightHelper(fireFlyColor, 1);

    fireFlyColor.position.set(randomRange(1, 2400) - 800, 40, randomRange(1, 1400) - 800);
    scene.add(fireFlyColor);
    scene.add(fireFlyColorHelper);
    fireFlies.push(fireFlyColor);

}

const ambientLight = new THREE.AmbientLight(new THREE.Color('#2e2e2e'), 0.4);
const ambientLightProbe = new THREE.AmbientLightProbe(new THREE.Color('#2C0C87'), 0.2)

scene.add(ambientLight);
scene.add(ambientLightProbe);

/* lights */


/* objects */

const cylinders = [];
for ( let i = 0; i < 300; i ++ ) {
    const randomHeight = randomRange(40, 170);
    const geometry = new THREE.CylinderGeometry(0, 10, randomHeight, 4, 1);
    const material = new THREE.MeshPhysicalMaterial({ color: new THREE.Color('#DFBAFC'), flatShading: true });
    const mesh = new THREE.Mesh( geometry, material );

    mesh.position.x = Math.random() * 1400 - 800;
    mesh.position.y = randomHeight / 2;
    mesh.position.z = Math.random() * 1400 - 800;
    scene.add(mesh);
    cylinders.push(mesh);
}
/* objects */


function OnResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', OnResize);

for (let i = 0; i < fireFlies.length; i++) {
    let fireFly = fireFlies[i];

    fireFly.maxX = randomRange(fireFly.position.x, 1000);
    fireFly.maxZ = randomRange(fireFly.position.z, 300);
    fireFly.calcX = '+';
    fireFly.calcZ = '+';
    
    fireFly.randomMovimentX = randomRange(100, 300);
    fireFly.randomMovimentZ = randomRange(100, 300);
}

(function animate() {
	requestAnimationFrame(animate);

    controls.update();

    for (let i = 0; i < fireFlies.length; i++) {
        let fireFly = fireFlies[i];

        let nextPositionX = fireFly.position.x;
        let nextPositionZ = fireFly.position.z;
        
        if(fireFly.position.x === fireFly.maxX && fireFly.calcX === '+') {
            fireFly.calcX = '-';
            fireFly.randomMovimentX = randomRange(100, 1000);
        }
        if(fireFly.position.x === 0 && fireFly.calcX === '-')  {
            fireFly.calcX = '+';
            fireFly.randomMovimentX = randomRange(100, 1000);
        }

        if(fireFly.position.z === fireFly.maxZ && fireFly.calcZ === '+') {
            fireFly.calcZ = '-';
            fireFly.randomMovimentZ = randomRange(100, 300);
        }
        if(fireFly.position.z === 0 && fireFly.calcZ === '-')  {
            fireFly.calcZ = '+';
            fireFly.randomMovimentZ = randomRange(100, 300);
        }

        if(fireFly.calcX === '+') {
            nextPositionX += 0.5;
        }else {
            nextPositionX -=  0.5;
        }

        if(fireFly.calcZ === '+') {
            nextPositionZ += 1;
        }else {
            nextPositionZ -= 1;
        }

        /* movimento aleatório */
        if(fireFly.randomMovimentX === fireFly.maxX) {
            fireFly.maxX = randomRange(100, 1000);
        }
        if(fireFly.randomMovimentZ === fireFly.maxZ) {
            fireFly.maxZ = randomRange(100, 300);
        }


        fireFly.position.set(nextPositionX, 40, nextPositionZ);
    }

	renderer.render(scene, camera);
})();

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* scenes */
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000');
scene.fog = new THREE.FogExp2(0x000, 0.002);
/* scenes */

/* cameras */
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(100, 900, 0);
/* cameras */

/* renderers */
const renderer = new THREE.WebGLRenderer({antialias: true});
document.body.appendChild(renderer.domElement);
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
controls.minPolarAngle = 1.3
/* controlls */

/* lights */
const fireFlies = [];
for (let i = 0; i < 30; i++) {
    const pointLight = new THREE.PointLight(0xff0000, 0.9, 300, 2.4);
    const pointHelper = new THREE.PointLightHelper(pointLight, 10);

    const randomPositionX = randomRange(1, 1400) - 800;
    const randomPositionZ = randomRange(1, 1400) - 800;
    pointLight.position.set(randomPositionX, 40, randomPositionZ);
    scene.add(pointLight);
    scene.add(pointHelper);

    const ponintLightGreen = new THREE.PointLight(0x3e3, 1, 300, 2.4);
    scene.add(ponintLightGreen);
    fireFlies.push(ponintLightGreen);

}

const ambientLight = new THREE.AmbientLight(0x000, 0.4);
const ambientLightProbe = new THREE.AmbientLightProbe(0xff0, 0.2)

scene.add(ambientLight);
scene.add(ambientLightProbe);

//helpers
//helpers
/* lights */


/* objects */

const cylinders = [];
for ( let i = 0; i < 300; i ++ ) {
    const randomHeight = randomRange(250, 40);
    const geometry = new THREE.CylinderGeometry(0, 10, randomHeight, 4, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true });
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
window.addEventListener( 'resize', OnResize );

(function animate() {
	requestAnimationFrame(animate);

    controls.update();

    // for (let i = 0; i < fireFlies.length; i++) {
    //     let fireFly = fireFlies[i];
    //     fireFly.position.set(fireFly.position.x + 1, 0, 0)
    // }

	renderer.render(scene, camera);
})();

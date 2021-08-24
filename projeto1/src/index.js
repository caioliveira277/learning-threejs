import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


/* scenes */
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000');
scene.fog = new THREE.FogExp2(new THREE.Color('#000'), 0.0010);
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
controls.minPolarAngle = 1.2;
/* controlls */

/* lights */
for (let i = 0; i < 20; i++) {
    const pointLight = new THREE.PointLight(new THREE.Color('#fafafa'), 0.4, 300, 2.4);
    const pointHelper = new THREE.PointLightHelper(pointLight, 7);

    let randomX = randomRange(0, 500) - 40;
    let randomZ = randomRange(0, 500) - 40;

    if(i % 2) {
        randomX = randomX * -1;
    }
    if(i <= 10) {
        randomZ = randomZ * -1;
    }

    pointLight.position.x = randomX;
    pointLight.position.y = 40;
    pointLight.position.z = randomZ;

    scene.add(pointLight);
    // scene.add(pointHelper);
}
const fireFlies = [];
for (let i = 0; i < 15; i++) {
    const fireFlyColor = new THREE.PointLight(
        new THREE.Color((i < 7) ? '#54CD41':'#E2DB36'),
        0.5,
        300,
        2.4
    );
    const fireFlyColorHelper = new THREE.PointLightHelper(fireFlyColor, 0.7);

    let randomX = randomRange(0, 500) - 40;
    let randomZ = randomRange(0, 500) - 40;

    if(i % 2) {
        randomX = randomX * -1;
    }
    if(i <= 15) {
        randomZ = randomZ * -1;
    }

    fireFlyColor.position.x = randomX;
    fireFlyColor.position.y = 40;
    fireFlyColor.position.z = randomZ;
    scene.add(fireFlyColor);
    scene.add(fireFlyColorHelper);
    fireFlies.push(fireFlyColor);

}

const ambientLight = new THREE.AmbientLight(new THREE.Color('#000'), 0.4);
// const ambientLight = new THREE.AmbientLight(new THREE.Color('#fff'), 0.4);
const ambientLightProbe = new THREE.AmbientLightProbe(new THREE.Color('#2C0C87'), 0.2)

scene.add(ambientLight);
scene.add(ambientLightProbe);
/* lights */


/* objects */
//plane
const planeGeometry = new THREE.PlaneGeometry(1000, 1000);
const planeMaterial = new THREE.MeshPhysicalMaterial({color: new THREE.Color('#DFBAFC'), side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0, 0, 0);
plane.rotation.x = - Math.PI/2;

scene.add(plane);

//cylinder
const cylinders = [];
for ( let i = 0; i < 200; i ++ ) {
    const randomHeight = randomRange(40, 170);
    const geometry = new THREE.CylinderGeometry(0, 10, randomHeight, 4, 1);
    const material = new THREE.MeshPhysicalMaterial({ color: new THREE.Color('#DFBAFC'), flatShading: true });
    const mesh = new THREE.Mesh( geometry, material );

    geometry.computeBoundingSphere()

    let randomX = randomRange(0, 500) - geometry.boundingSphere.radius / 2;
    let randomZ = randomRange(0, 500) - geometry.boundingSphere.radius / 2;

    if(i % 2) {
        randomX = randomX * -1;
    }
    if(i <= 100) {
        randomZ = randomZ * -1;
    }

    mesh.position.x = randomX;
    mesh.position.z = randomZ;
    mesh.position.y = randomHeight / 2;
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

(function animate() {
	requestAnimationFrame(animate);

    controls.update();

    for (let i = 0; i < fireFlies.length; i++) {
        let fireFly = fireFlies[i];

        let nextPositionX = fireFly.position.x;
        let nextPositionZ = fireFly.position.z;

        let randomX = randomRange(0, 500) - 40;
        if(i % 2) {
            randomX = randomX * -1;
        }


        let randomZ = randomRange(0, 500) - 40;
        if(i <= (fireFlies.length / 2)) {
            randomZ = randomZ * -1;
        }

        if(fireFly.completed === undefined) {
            fireFly.completed = false;
            fireFly.toX = randomX;
            fireFly.toZ = randomZ;
        }




        if(fireFly.position.x < fireFly.toX) {
            nextPositionX += 0.5;
        } else if (fireFly.position.x > fireFly.toX){
            nextPositionX -= 0.5;
        }
        if(fireFly.position.x === fireFly.toX) {
            fireFly.toX = randomX;
        }


        if(fireFly.position.z < fireFly.toZ) {
            nextPositionZ += 0.5;
        } else if (fireFly.position.z > fireFly.toZ){
            nextPositionZ -= 0.5;
        }
        if(fireFly.position.z === fireFly.toZ) {
            fireFly.toZ = randomZ;
        }



        fireFly.position.set(nextPositionX, 40, nextPositionZ);
    }

	renderer.render(scene, camera);
})();

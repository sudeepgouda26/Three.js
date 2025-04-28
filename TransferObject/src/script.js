import * as THREE from 'three'
import { log } from 'three/src/nodes/TSL.js';

// Canvas
const canvas = document.querySelector('canvas.webgl')



const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry,material)
// mesh.position.x =1;
// mesh.position.y=-1;
// mesh.position.z =-1;
mesh.position.set(0.7, -0.6, -1);
mesh.position.normalize();

console.log(mesh.position.length())
console.log(mesh.position.normalize());
  const AxesHelper = new THREE.AxesHelper();
  scene.add(AxesHelper);
scene.add(mesh);

const sizes= {
    width: 800,
    height: 600
}

const camera =new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
console.log(camera.position.length());

camera.position.z = 3;
scene.add(camera);
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
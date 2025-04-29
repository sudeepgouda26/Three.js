import * as THREE from 'three'
import { log } from 'three/src/nodes/TSL.js';

// Canvas
const canvas = document.querySelector('canvas.webgl')



const scene = new THREE.Scene();

const group = new THREE.Group();
scene.add(group);

const cube1 =new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color : 0xff0000})

)
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color : 0x00ff00})
)
group.add(cube2);
cube2.position.x = -2;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color : 0x0000ff})
)
group.add(cube3);
cube3.position.x = 2;
const AxesHelper = new THREE.AxesHelper();
scene.add(AxesHelper);


// const geometry = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry,material)
// mesh.position.x =1;
// mesh.position.y=-1;
// mesh.position.z =-1;
// mesh.position.set(0.7, -0.6, -1);
// mesh.position.normalize();

// console.log(mesh.position.length())
// console.log(mesh.position.normalize());
//   const AxesHelper = new THREE.AxesHelper();
//   scene.add(AxesHelper);
// scene.add(mesh);

//Scale
// mesh.scale.x=1;
// mesh.scale.y= 0.7;
// mesh.scale.z= 0.3;
// mesh.scale.set(1, 0.7, 0.3);

// Rotation
// mesh.rotation.reorder('YXZ');
// mesh.rotation.y=Math.PI/2 ;
// mesh.rotation.x =Math.PI*0.25;



const sizes = {
    width: 800,
    height: 600
};


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
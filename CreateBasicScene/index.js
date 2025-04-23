import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

// Scene
// const scene = new THREE.Scene();




// Mesh
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // Sizes
// const sizes = {
//     width: 800,
//     height: 600
// };

// // Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 3;
// scene.add(camera);

// // Renderer
// const canvas = document.querySelector('#webgl');
// const renderer = new THREE.WebGLRenderer({ canvas: canvas });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// Animate
// const animate = () => {
//     requestAnimationFrame(animate);

//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.01;

  
// };
// animate();
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

const mesh = new  THREE.Mesh(geometry,material);
scene.add(mesh);


const sizes ={
    width:800,
    height:600
}
const camera =new THREE.PerspectiveCamera(75,sizes.width/sizes.height);
scene.add(camera);
camera.position.z = 3;
const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

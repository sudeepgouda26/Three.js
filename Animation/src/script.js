import * as THREE from 'three'
import { deltaTime } from 'three/tsl'
import gsap from 'gsap'
import { Mesh } from 'three/webgpu';
console.log(gsap);


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// let time = Date.now();
//or

gsap.to(mesh.position,{
    x :20,
    duration: 3,
    delay: 1
})
gsap.to(mesh.position,{
    x :0,
    duration: 2,
    delay: 2
})
//clock
const clock = new THREE.Clock();

const tick =()=>{
    // const elapsedTime =clock.getElapsedTime();
    
//  const curTime = Date.now();
//  const deltaTime = curTime-time;
//  time = curTime;
    //  mesh.rotation.y += 0.001 *deltaTime
    // mesh.rotation.y = elapsedTime
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)

}
tick()
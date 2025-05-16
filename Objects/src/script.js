import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as GUI from 'lil-gui'
import gsap from 'gsap'
import { color } from 'three/tsl'

// const image = new Image();

// const texture = new THREE.Texture(image);
// image.onload=()=>{
//   texture.needsUpdate = true;
    
// }
// image.src="/door.jpg";

// const lodingManager = new THREE.LoadingManager();
// lodingManager.onStart = () => {
//     console.log("Loading started");
// }
// lodingManager.onProgress = () => {
//     console.log("Loading in progress");
// }
// lodingManager.onLoad = () => {          
//     console.log("Loading completed");
// }
// lodingManager.onError = () => {
//     console.log("Loading error");   
// }


// const textureLoader = new THREE.TextureLoader(lodingManager);
// const texture = textureLoader.load("/door.jpg");

// Debug
// const gui = new GUI.GUI()
// const cubeFolder = gui.addFolder('cube');
// window.addEventListener('keydown', (event) => {
//     if (event.key === 'h') {
//         if (gui._hidden) {
//             gui.show();
//         } else {
//             gui.hide();
//         }
//     }
// });


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Sizes
let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
let parameters ={
   color: 0xfff000,

}
//     spin :()=>{
//         gsap.to(mesh.rotation,{
//             duration:1,
//             y:mesh.rotation.y +10
//         })
//     }


// Cursor
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener("mousemove", (dets) => {
    cursor.x = dets.clientX / sizes.width - 0.5
    cursor.y = -(dets.clientY / sizes.height - 0.5)
})

window.addEventListener('dblclick', () => {
    const fullScreenElm = document.fullscreenElement || document.webkitFullscreenElement
    if (!fullScreenElm) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
        } else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen()
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    }
})


const material = new THREE.MeshBasicMaterial({color: parameters.color})
const sphere = new THREE.Mesh(
 new THREE.SphereGeometry(0.5, 32, 32),
 material


)
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1,1,32,32)
    ,material
)
const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.2, 16, 100),
    material
)
scene.add(sphere,plane,torus)
sphere.position.x = -1.5
torus.position.x = 1.5


// const geometry = new THREE.BoxGeometry(1, 1, 1)


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Resize event
window.addEventListener("resize", () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Animation loop
 */
const clock = new THREE.Clock()
function tick() {
    // Update objects
    const elapsedTime = clock.getElapsedTime()
    sphere.rotation.y = elapsedTime * 0.5
    torus.rotation.y = elapsedTime * 0.5
    plane.rotation.y = elapsedTime * 0.5

    sphere.rotation.x = elapsedTime * 0.5
    torus.rotation.x = elapsedTime * 0.5
    plane.rotation.x = elapsedTime * 0.5
    console.log(elapsedTime);
    

    controls.update()
    renderer.render(scene, camera)

    camera.lookAt(sphere.position)

    window.requestAnimationFrame(tick)
}

tick()

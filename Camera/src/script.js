import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


const cursor ={
    x:0,
    y:0
}

window.addEventListener("mousemove",(dets)=>{
    cursor.x = dets.clientX /sizes.width - 0.5
    console.log(cursor.x)
    cursor.y = -(dets.clientY /sizes.height - 0.5)

})
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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height,0.1,100)
//OrthographicCamera
// const aspectRatio =sizes.width/sizes.height;
// const camera = new THREE.OrthographicCamera(-1*aspectRatio,1*aspectRatio,1,-1,0.1,100)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

function tick (){
    renderer.render(scene, camera)
      camera.position.x =cursor.x *10
      camera.position.y =cursor.y*10
      camera.lookAt(mesh.position)
   
    window.requestAnimationFrame(tick)

    
}
tick()
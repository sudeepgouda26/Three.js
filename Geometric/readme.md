Geometry
🌐 What is geometry in Three.js?
In Three.js, geometry defines the shape (the vertices, edges, and faces) of a 3D object.
It’s like the wireframe or skeleton of the model, before you apply materials or textures.

🏗 Types of built-in geometries
Here are some of the most commonly used ones:

Geometry	Description
BoxGeometry	Cube or rectangular box
SphereGeometry	Sphere
PlaneGeometry	Flat 2D rectangle (useful for floors, walls)
CircleGeometry	Flat 2D circle
CylinderGeometry	Cylinder shape
ConeGeometry	Cone shape
TorusGeometry	Donut shape
TorusKnotGeometry	Twisted, knotted donut shape
BufferGeometry	Low-level, customizable geometry (advanced)


const geometry = new THREE.BoxGeometry(1, 1, 1)  // width, height, depth
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)



segments
🌐 What are segments in Three.js?
When you create certain geometries, they don’t just define the overall shape — they also define how many subdivisions (segments) are used along each axis.

Segments control how smooth or detailed the geometry is.


🌊 What is a Float32Array?
✅ A Float32Array is a typed array in JavaScript — a special kind of array designed to store 32-bit floating-point numbers efficiently.
✅ It’s part of the WebGL foundation, because graphics processing needs fast, compact numeric data (not regular JS arrays, which are slower and more flexible).

Example:

js
Copy
Edit
const numbers = new Float32Array([0, 1, 2, 3])
This creates a tightly packed array of 4 numbers, each using 32 bits (4 bytes).

🏗 Why does Three.js use Float32Array?
Three.js uses Float32Array heavily to store:

Vertex positions (position attribute)

Normals (normal attribute)

UV coordinates (uv attribute)

Colors (color attribute)

This data is packed and sent directly to the GPU.

🛠 Example: Building custom geometry
js
Copy
Edit
const geometry = new THREE.BufferGeometry()

const vertices = new Float32Array([
    0, 0, 0,   // point A (x, y, z)
    1, 0, 0,   // point B
    0, 1, 0    // point C
])

geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
✅ Float32Array holds the raw vertex data.
✅ BufferAttribute tells Three.js: “This array represents triplets (x, y, z) per vertex.”

⚡ Why not just use a regular JS array?
Regular arrays ([0, 1, 2]) are flexible but slower and bigger in memory.

Float32Array is compact, fast, and GPU-ready.

For WebGL and 3D rendering, efficiency matters.

Summary
Regular Array	Float32Array
Flexible, general	Fixed type: 32-bit floats
Slower, more memory	Fast, compact, GPU-friendly
JS-level operations	Low-level numeric data storage
```

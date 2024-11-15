


const scene = new THREE.Scene();

// Step 2: Create the axes helper for better visual reference
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

///Create Cube and add it to the scene
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
scene.add(cube);

//Set up the camera
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Set up the renderer
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

//Clock for time-based animation
const clock = new THREE.Clock();


let zRotationSpeed = 0.02; 

//Animation loop
function animate() {
  const elapsedTime = clock.getElapsedTime(); 

  
  cube.position.x = Math.sin(elapsedTime) * 2; 
  cube.position.y = Math.sin(elapsedTime * 2) * Math.cos(elapsedTime); 

  
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += zRotationSpeed; 

  
  renderer.render(scene, camera);

  requestAnimationFrame(animate); 
}

animate(); 

//Adjust camera and renderer on window resize
window.addEventListener('resize', () => {
  
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();


  renderer.setSize(sizes.width, sizes.height);
});


//Unfinished, No Orbital Camera, couldn't add the on-click where the user can click and change camera position.
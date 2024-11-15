// Step 1: Create the scene
const scene = new THREE.Scene();
// Step 2: Create the axes helper for better visual reference
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);
// Step 3: Create a group to contain objects
const group = new THREE.Group();
group.scale.y = 2; // Scale the group on the y-axis
group.rotation.y = 0.2; // Rotate the group around the y-axis
scene.add(group);
// Step 4: Create three spheres and add them to the group
const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({
    color: 0xff0000
}));
sphere1.position.x = -1.5;
group.add(sphere1);
const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({
    color: 0x00ff00
}));
sphere2.position.x = 0;
group.add(sphere2);
const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({
    color: 0x0000ff
}));
sphere3.position.x = 1.5;
group.add(sphere3);
// Step 5: Set up the camera
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 20; // Move the camera back along the z-axis
scene.add(camera);
// Step 6: Set up the renderer
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
// Step 7: Create the animation loop
function animate() {
    renderer.render(scene, camera);
    // Rotate the entire group
    group.rotation.y += 0.01;
    // Animate each sphere separately (if desired)
    sphere1.rotation.x += 0.01;
    sphere2.rotation.y += 0.01;
    sphere3.rotation.z += 0.01;
    requestAnimationFrame(animate); // Keep animating
}
animate(); // Start the animation loop
// Step 8: Adjust camera and renderer on window resize
window.addEventListener('resize', ()=>{
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height; // Update camera aspect ratio
    camera.updateProjectionMatrix(); // Apply new aspect ratio to the camera
    renderer.setSize(sizes.width, sizes.height); // Update the renderer size
});

//# sourceMappingURL=index.09c24910.js.map

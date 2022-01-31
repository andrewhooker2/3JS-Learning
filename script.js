console.log(THREE);


// The Stage for the cameras objects etc.
const scene = new THREE.Scene();

// Making a Red Cube
// Red Cube
const geometry = new THREE.BoxGeometry(1, 1 ,1);
const material = new THREE. MeshBasicMaterial({color:'red'});
const mesh = new THREE.Mesh(geometry, material);
// Dont forget to add it to the scene
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// --------- Camera --------- 
    // We need to next add a Camera so we know where to look
    // Camera (Feild of veiw , Aspect Ratio )
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height );
    scene.add(camera);

    // We need to move the camera out of the center of the cube. 
    // You cannot view the shape from inside the shape
    // ( This could be done by also moving the cube )
    camera.position.z = 3;
    camera.position.x = 1;
    camera.position.y = 1;
// ------------------ 

// ---------   Renderer --------- 
    // This Renders the scene from the camera point of view
    // this creates the scene on the canvas

    // Fetching the canvas from the HTML
    const canvas = document.querySelector('canvas.webgl');

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas

    });

    // Resize the renderer to the correct heights
    renderer.setSize(sizes.width, sizes.height);

    // Now render the scene
    renderer.render(scene, camera);

// ------------------ 

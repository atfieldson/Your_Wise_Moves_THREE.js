// let app = angular.module('HandleDesignApp', []);

let myCanvas= document.getElementById('myCanvas')
let gl = myCanvas.getContext("webgl"); //new!


let renderer = new THREE.WebGLRenderer({ canvas: myCanvas });
// myCanvas.width = 500; //new
// myCanvas.height = 500; //new

renderer.setViewport(0, 0, 1000, 1000)

//using clientWidth and height below is what allows the proportions to remain accurate, as distinct
//from using window.innerWidth and height.
let camera = new THREE.PerspectiveCamera(35, myCanvas.clientWidth/myCanvas.clientHeight, 2, 1000)

renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio)

camera.position.set(0, 0, 100);
let scene = new THREE.Scene();

//lights
let light = new THREE.AmbientLight(0xffffff, .3);
scene.add(light);

let light1 = new THREE.PointLight(0xffffff, .6);
light1.position.set(-50, -15, 15)
scene.add(light1);

let light2 = new THREE.PointLight(0xffffff, .6);
light2.position.set(50, 15, 15)
scene.add(light2);
//end lights


let texture = new THREE.TextureLoader().load("./fire.jpg");

let geometry = new THREE.PlaneBufferGeometry( 50, 50, 8, 8 );
let material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texture } );
let plane = new THREE.Mesh( geometry, material );
scene.add( plane );


//render
requestAnimationFrame(animate);
//initial render
renderer.render(scene, camera);

function animate() { 
    requestAnimationFrame(animate);
    plane.rotation.y += .01;
	renderer.render(scene, camera);
}
//end render

animate();
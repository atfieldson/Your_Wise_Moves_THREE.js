// let app = angular.module('HandleDesignApp', []);

let myCanvas= document.getElementById('myCanvas')
let gl = myCanvas.getContext("webgl"); //new!


let renderer = new THREE.WebGLRenderer({ canvas: myCanvas });
myCanvas.width = 500; //new
myCanvas.height = 500; //new

renderer.setViewport(0, 0, 1000, 1000)

//using clientWidth and height below is what allows the proportions to remain accurate, as distinct
//from using window.innerWidth and height.
let camera = new THREE.PerspectiveCamera(35, myCanvas.clientWidth/myCanvas.clientHeight, 2, 1000)
controls = new THREE.OrbitControls(camera, renderer.domElement);


renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio)

camera.position.set(0, 0, 200);
let scene = new THREE.Scene();

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0)

//lights
let light = new THREE.AmbientLight(0xffffff, .3);
scene.add(light);

let light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(-50, -15, 15)
scene.add(light1);

let light2 = new THREE.PointLight(0xffffff, 1);
light2.position.set(50, 15, 15)
scene.add(light2);
//end lights

let loader = new THREE.ImageLoader()
loader.load('./images/fire.jpg')

//Remember, you need a server for images to be loaded!
let textureHeat = new THREE.TextureLoader().load('./images/heat.jpg');

let geoHeat = new THREE.SphereGeometry(10,100,100);
let matHeat = new THREE.MeshPhongMaterial( { map: textureHeat } );
let heat = new THREE.Mesh( geoHeat, matHeat );
heat.overdraw = true;
heat.castShadow = true;
scene.add( heat );
//Pentagon positin
// heat.position.x = 0;
// heat.position.y = -40;
heat.position.x = 0;
heat.position.y = -60;

let textureMetal = new THREE.TextureLoader().load('./images/metal.jpg');

let geoMetal = new THREE.SphereGeometry(10,100,100);
let matMetal = new THREE.MeshPhongMaterial( { map: textureMetal } );
let metal = new THREE.Mesh( geoMetal, matMetal );
metal.overdraw = true;
metal.castShadow = true;
scene.add( metal );
//Pentagon position
// metal.position.x = -38;
// metal.position.y = -12;
metal.position.x = 0;
metal.position.y = -40;

let textureWater = new THREE.TextureLoader().load('./images/water.jpg');

let geoWater = new THREE.SphereGeometry(10,100,100);
let matWater = new THREE.MeshPhongMaterial( { map: textureWater } );
let water = new THREE.Mesh( geoWater, matWater );
water.overdraw = true;
water.castShadow = true;
scene.add( water );
//Pentagon position
// water.position.x = -24;
// water.position.y = 32;
water.position.x = 0;
water.position.y = 20;

let textureFire = new THREE.TextureLoader().load('./images/fire.jpg');

let geoFire = new THREE.SphereGeometry(10,100,100);
let matFire = new THREE.MeshPhongMaterial( { map: textureFire } );
let fire = new THREE.Mesh( geoFire, matFire );
fire.overdraw = true;
fire.castShadow = true;
scene.add( fire );
//Pentagon position
// fire.position.x = 24;
// fire.position.y = 32;
fire.position.x = 0;
fire.position.y = 40;

let textureWood = new THREE.TextureLoader().load('./images/wood.jpg');

let geoWood = new THREE.SphereGeometry(10,100,100);
let matWood = new THREE.MeshPhongMaterial( { map: textureWood } );
let wood = new THREE.Mesh( geoWood, matWood );
wood.overdraw = true;
wood.castShadow = true;
scene.add( wood );
//Pentagon position
// wood.position.x = 38;
// wood.position.y = -12;
wood.position.x = 0;
wood.position.y = 60;


//render
requestAnimationFrame(animate);
//initial render
renderer.render(scene, camera);

let t = 0;
let s = 0;
let r = 0;

function animate() { 
    requestAnimationFrame(animate);
    // plane.rotation.y += .01;
    renderer.render(scene, camera);
    controls.update();
    t += 0.002; 
    s += 0.004; 
    r += 0.008;       
    heat.rotation.y += 0.02;

    heat.position.x = 56*Math.cos(t) + 0;
    heat.position.y = 56*Math.sin(t) + 0;

    fire.rotation.y += 0.02;

    fire.position.x = 34*Math.cos(s) + 0;
    fire.position.y = 34*Math.sin(s) + 0;

    metal.rotation.y += 0.02;

    metal.position.x = 12*Math.cos(r) + 0;
    metal.position.y = 12*Math.sin(r) + 0;

    water.rotation.y += 0.02;

    water.position.x = -34*Math.cos(s) + 0;
    water.position.y = -34*Math.sin(s) + 0;

    wood.rotation.y += 0.02;

    wood.position.x = -12*Math.cos(r) + 0;
    wood.position.y = -12*Math.sin(r) + 0;
}
//end render

animate();

let myCanvas = document.getElementById('myCanvas')
let gl = myCanvas.getContext("webgl"); //new!


let renderer = new THREE.WebGLRenderer({ canvas: myCanvas });
// myCanvas.width = 500; //new
// myCanvas.height = 500; //new

renderer.setViewport(0, 0, 200, 200)

//using clientWidth and height below is what allows the proportions to remain accurate, as distinct
//from using window.innerWidth and height.
let camera = new THREE.PerspectiveCamera(35, myCanvas.clientWidth / myCanvas.clientHeight, 2, 1000)
// controls = new THREE.OrbitControls(camera, renderer.domElement);


renderer.setClearColor(0xC0DFDF);
renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMapEnabled = true;


camera.position.set(0, 0, 190);
// camera.position.set(-30, 0, 200);
let scene = new THREE.Scene();

//Fog
// fogColor = new THREE.Color(0xFFFFFF);
// scene.fog = new THREE.Fog(fogColor, 2, 500);

// controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.target.set(0, 0, 0)

//---------------------LIGHTS-------------------------------------
let light1 = new THREE.PointLight(0xffffff, .4);
light1.position.set(-50, -15, 100)
scene.add(light1);

let light2 = new THREE.PointLight(0xffffff, .4);
light2.position.set(50, 15, 100)
scene.add(light2);

let light3 = new THREE.PointLight(0xffffff, .8);
light3.position.set(-10, 0, 160)
scene.add(light3)

let light4 = new THREE.PointLight(0xffffff, .8);
light3.position.set(10, 0, 160)
scene.add(light4)

let light5 = new THREE.PointLight(0xffffff, .6);
light5.position.set(8, 8, 140);
scene.add(light5)
//--------------------END LIGHTS-------------------------------------


//background
let geoBackground = new THREE.PlaneBufferGeometry(200, 200, 32);
let matBackground = new THREE.MeshBasicMaterial({ color: 0xC0DFDF});
let background = new THREE.Mesh(geoBackground, matBackground);
background.receiveShadow = true;
background.position.z = -20;
scene.add(background);

//------------------------------SPHERES----------------------------------
//clouds
//Remember, you need a server for images to be loaded!
let textureClouds = new THREE.TextureLoader().load('./images/clouds5.jpg');

let geoClouds = new THREE.SphereGeometry(80, 100, 100);
let matClouds = new THREE.MeshPhongMaterial({ alphaMap: textureClouds});
let clouds = new THREE.Mesh(geoClouds, matClouds);
matClouds.transparent = true
scene.add(clouds);

let textureClouds2 = new THREE.TextureLoader().load('./images/clouds2.jpg');

let geoClouds2 = new THREE.SphereGeometry(110, 100, 100);
let matClouds2 = new THREE.MeshPhongMaterial({ alphaMap: textureClouds2});
let clouds2 = new THREE.Mesh(geoClouds2, matClouds2);
matClouds2.transparent = true
scene.add(clouds2);



let textureYinYang = new THREE.TextureLoader().load('./images/yinYang2.jpg');

let geoYinYang = new THREE.SphereGeometry(10, 100, 100);
let matYinYang = new THREE.MeshPhongMaterial({ map: textureYinYang, bumpMap: textureYinYang });
let yinYang = new THREE.Mesh(geoYinYang, matYinYang);
yinYang.overdraw = true;
yinYang.castShadow = true;
yinYang.receiveShadow = true;
scene.add(yinYang);
//Pentagon position radius 40
// yinYang.position.x = 0;
// yinYang.position.y = -40;
//Pentagon position radius 30
yinYang.position.set(0, 0, 0);

let textureEarth = new THREE.TextureLoader().load('./images/earth.jpg');

let geoEarth = new THREE.SphereGeometry(10, 100, 100);
let matEarth = new THREE.MeshPhongMaterial({ map: textureEarth, bumpMap: textureEarth });
let earth = new THREE.Mesh(geoEarth, matEarth);
earth.overdraw = true;
earth.castShadow = true;
scene.add(earth);
//Pentagon position radius 40
// earth.position.x = 0;
// earth.position.y = -40;
//Pentagon position radius 30
earth.position.set(0, -40, 0);

let textureMetal = new THREE.TextureLoader().load('./images/metal.jpg');

let geoMetal = new THREE.SphereGeometry(10, 100, 100);
let matMetal = new THREE.MeshPhongMaterial({ map: textureMetal, bumpMap: textureMetal });
let metal = new THREE.Mesh(geoMetal, matMetal);
metal.overdraw = true;
metal.castShadow = true;
scene.add(metal);
//Pentagon position radius 40
// metal.position.x = -38;
// metal.position.y = -12;
//Pentagon position radius 30
metal.position.set(-38, -12, 0);

let textureWater = new THREE.TextureLoader().load('./images/water.jpg');

let geoWater = new THREE.SphereGeometry(10, 100, 100);
let matWater = new THREE.MeshPhongMaterial({ map: textureWater, bumpMap: textureWater });
let water = new THREE.Mesh(geoWater, matWater);
water.overdraw = true;
water.castShadow = true;
scene.add(water);
//Pentagon position radius 40
// water.position.x = -24;
// water.position.y = 32;
//Pentagon position radius 30
water.position.set(-24, 32, 0)

let textureFire = new THREE.TextureLoader().load('./images/fire.jpg');

let geoFire = new THREE.SphereGeometry(10, 100, 100);
let matFire = new THREE.MeshPhongMaterial({ map: textureFire, bumpMap: textureFire });
let fire = new THREE.Mesh(geoFire, matFire);
fire.overdraw = true;
fire.castShadow = true;
scene.add(fire);
//Pentagon position radius 40
// fire.position.x = 24;
// fire.position.y = 32;
//Pentagon position radius 30
fire.position.set(24, 32, 0)

let textureWood = new THREE.TextureLoader().load('./images/wood.jpg');

let geoWood = new THREE.SphereGeometry(10, 100, 100);
let matWood = new THREE.MeshPhongMaterial({ map: textureWood, bumpMap: textureWood });
let wood = new THREE.Mesh(geoWood, matWood);
wood.overdraw = true;
wood.castShadow = true;
scene.add(wood);
//Pentagon position radius 40
// wood.position.x = 38;
// wood.position.y = -12;
//Pentagon position radius 30
wood.position.set(38, -12, 0)
//------------------------------END SPHERES----------------------------------



//----------------------------CURVE PATH------------------------------------
let createBezierCurve = (a, b, c, d) => {
    let curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3( a.x, a.y, a.z ), //starting point
        new THREE.Vector3( b.x, b.y, b.z ),//control points, both
        new THREE.Vector3( c.x, c.y, c.z ),//of these are necessary
        new THREE.Vector3( d.x, d.y, d.z ), //ending point
    );
    let points = curve.getPoints( 1256 );
    
    return points
}

let drawCurve = (points) => {
    let geometry = new THREE.BufferGeometry().setFromPoints( points );
    let material = new THREE.LineBasicMaterial( { color : 0x000000 } );
    // Create the final object to add to the scene
    let curve = new THREE.Line( geometry, material );
    return curve;
}






let pointsEarthOutside = createBezierCurve(
    {x: 0, y: -40, z: 0},
    {x: 0, y: -30, z: 30}, 
    {x: 0, y: -30, z: 70}, 
    {x: 0, y: 0, z: 120},  
)

let pointsEarthInside = createBezierCurve(
    {x: 0, y: -40, z: 0},
    {x: 0, y: 10, z: 30}, 
    {x: 0, y: 10, z: 70}, 
    {x: 0, y: 0, z: 120},  
)

let pointsWoodOutside = createBezierCurve(
    {x: 38, y: -12, z: 0},
    {x:29, y: -9, z: 30}, 
    {x: 29, y: -9, z: 70}, 
    {x: 0, y: 0, z: 120},  
)

let pointsWoodInside = createBezierCurve(
    {x: 38, y: -12, z: 0},
    {x:-10, y: 3, z: 30}, 
    {x: -10, y: 3, z: 70}, 
    {x: 0, y: 0, z: 120},  
)

let pointsFireOutside = createBezierCurve(
    {x: 24, y: 32, z: 0},
    {x:18, y: 24, z: 30}, 
    {x: 18, y: 24, z: 70}, 
    {x: 0, y: 0, z: 120}, 
)

let pointsFireInside = createBezierCurve(
    {x: 24, y: 32, z: 0},
    {x:-6, y: -8, z: 30}, 
    {x: -6, y: -8, z: 70}, 
    {x: 0, y: 0, z: 120}, 
)

let pointsWaterOutside = createBezierCurve(
    {x: -24, y: 32, z: 0},
    {x:-18, y: 24, z: 30}, 
    {x: -18, y: 24, z: 70}, 
    {x: 0, y: 0, z: 120}, 
)

let pointsWaterInside = createBezierCurve(
    {x: -24, y: 32, z: 0},
    {x:6, y: -8, z: 30}, 
    {x: 6, y: -8, z: 70}, 
    {x: 0, y: 0, z: 120}, 
)

let pointsMetalOutside = createBezierCurve(
    {x: -38, y: -12, z: 0},
    {x:-29, y: -9, z: 30}, 
    {x: -29, y: -9, z: 70}, 
    {x: 0, y: 0, z: 120}, 
)

let pointsMetalInside = createBezierCurve(
    {x: -38, y: -12, z: 0},
    {x:10, y: 3, z: 30}, 
    {x: 10, y: 3, z: 70}, 
    {x: 0, y: 0, z: 120}, 
)

// let curveEarthOutsideLine = drawCurve(pointsEarthOutside);
// let curveEarthInsideLine = drawCurve(pointsEarthInside);
// let curveWoodOutsideLine = drawCurve(pointsWoodOutside);
// let curveWoodInsideLine = drawCurve(pointsWoodInside);
// let curveFireOutsideLine = drawCurve(pointsFireOutside);
// let curveFireInsideLine = drawCurve(pointsFireInside);
// let curveWaterOutsideLine = drawCurve(pointsWaterOutside);
// let curveWaterInsideLine = drawCurve(pointsWaterInside);
// let curveMetalOutsideLine = drawCurve(pointsMetalOutside);
// let curveMetalInsideLine = drawCurve(pointsMetalInside);


// scene.add(curveEarthOutsideLine, curveEarthInsideLine, curveWoodOutsideLine, curveWoodInsideLine,
//     curveFireOutsideLine, curveFireInsideLine, curveWaterOutsideLine, curveWaterInsideLine,
//     curveMetalOutsideLine, curveMetalInsideLine)
//---------------------END CURVE PATH------------------------------------


//--------------------------RENDER-------------------------
//initial render
renderer.render(scene, camera);

//For first movement example
// let t = 0;
// let s = 0;
// let r = 0;

function animate() {
    requestAnimationFrame(animate);
    // plane.rotation.y += .01;
    renderer.render(scene, camera);
    background.rotation.z -= .001;
    camera.rotation.z -= .001;
    clouds.rotation.y += .002;
    clouds2.rotation.y += .002;
    // controls.update();
    //No longer needed with new movement
    // t += 0.002;
    // s += 0.004;
    // r += 0.008;

    yinYang.rotation.y += 0.005;

    earth.rotation.y += 0.005;

    fire.rotation.y += 0.005;

    metal.rotation.y += 0.005;

    water.rotation.y += 0.005;

    wood.rotation.y += 0.005;

}
//end render

//************ */Moving along curve experiment***************
let speedArchitect = (max, subSteps) => {
    let blueprint = [];
    let speeds = [.01, .02, .04, .07, .12, .15, .18, .15, .12, .07, .04, .02, .01];
    let subSpeeds = speeds.map(speed => speed/subSteps);
    let currentPoint = 0;
    blueprint.push(currentPoint);
    for (let speed of subSpeeds) {
        for (let i = 0; i < subSteps; i++){
            currentPoint = currentPoint + max*speed;
            blueprint.push(currentPoint);
        }
    }
    return blueprint;
}

let backwards = false
let i = 0

//
function moveSphereForward(pointsArrayOutside, pointsArrayInside, sphere) {

    let easedArray = speedArchitect(pointsArrayOutside.length, 16)

    if (i < easedArray.length - 1 && backwards === false) { 
        let bPoint = easedArray[i];
        let b = pointsArrayOutside[parseInt(bPoint)];
        let ybPoint = easedArray[easedArray.length-(i+1)];
        let yb = pointsArrayInside[parseInt(ybPoint)];
        sphere.position.x = b.x
        sphere.position.y = b.y
        sphere.position.z = b.z
        yinYang.position.x = yb.x;
        yinYang.position.y = yb.y;
        yinYang.position.z = yb.z;
    
        i++
        requestAnimationFrame(() => moveSphereForward(pointsArrayOutside, pointsArrayInside, sphere));
    } else if (i === easedArray.length - 1 && backwards === false) {
        backwards = true;
        sphere.position.x = pointsArrayOutside[pointsArrayOutside.length-1].x;
        sphere.position.y = pointsArrayOutside[pointsArrayOutside.length-1].y;
        sphere.position.z = pointsArrayOutside[pointsArrayOutside.length-1].z;
        yinYang.position.x = pointsArrayInside[0].x;
        yinYang.position.y = pointsArrayInside[0].y;
        yinYang.position.z = pointsArrayInside[0].z;
        i--;
        moveSphereBack(pointsArrayOutside, pointsArrayInside, sphere);
    }
}

function moveSphereBack(pointsArrayOutside, pointsArrayInside, sphere) {

    let easedArray = speedArchitect(pointsArrayOutside.length, 16)

    if (i > 0 && backwards === true) {
        let bPoint = easedArray[i];
        let b = pointsArrayInside[parseInt(bPoint)]
        let ybPoint = easedArray[easedArray.length-(i+1)];
        let yb = pointsArrayOutside[parseInt(ybPoint)]
        sphere.position.x = b.x;
        sphere.position.y = b.y;
        sphere.position.z = b.z;
        yinYang.position.x = yb.x
        yinYang.position.y = yb.y
        yinYang.position.z = yb.z
        i--
        requestAnimationFrame(() => moveSphereBack(pointsArrayOutside, pointsArrayInside, sphere));
    } else if (backwards === true && i === 0) {
        backwards = false
    }
}


// moveSphereForward(pointsEarthOutside, pointsEarthInside, earth)
// moveSphereForwardBack(pointsEarthOutside, pointsEarthInside, earth)
// moveSphereForward(pointsWoodOutside, pointsWoodInside, wood)
// moveSphereBack(pointsWoodOutside, pointsWoodInside, wood)
// moveSphereForward(pointsFireOutside, pointsFireInside, fire);
// moveSphereBack(pointsFireOutside, pointsFireInside, fire);   
moveSphereForward(pointsWaterOutside, pointsWaterInside, water);
// moveSphereBack(pointsWaterOutside, pointsWaterInside, water);
// moveSphereForward(pointsMetalOutside, pointsMetalInside, metal);
// moveSphereBack(pointsMetalOutside, pointsMetalInside, metal);




// function moveEarthToFront() {

//     let easedArray = speedArchitect(pointsEarthOutside.length, 16)

//     if (i < easedArray.length - 1 && backwardsEarth === false) { 
//         let bPoint = easedArray[i];
//         let b = pointsEarthOutside[parseInt(bPoint)];
//         let ybPoint = easedArray[easedArray.length-(i+1)];
//         let yb = pointsEarthInside[parseInt(ybPoint)];
//         earth.position.x = b.x
//         earth.position.y = b.y
//         earth.position.z = b.z
//         yinYang.position.x = yb.x;
//         yinYang.position.y = yb.y;
//         yinYang.position.z = yb.z;
    
//         i++
//         requestAnimationFrame(moveEarthToFront);
//     } else if (i === easedArray.length - 1 && backwardsEarth === false) {
//         backwardsEarth = true;
//         earth.position.x = pointsEarthOutside[pointsEarthOutside.length-1].x;
//         earth.position.y = pointsEarthOutside[pointsEarthOutside.length-1].y;
//         earth.position.z = pointsEarthOutside[pointsEarthOutside.length-1].z;
//         yinYang.position.x = pointsEarthInside[0].x;
//         yinYang.position.y = pointsEarthInside[0].y;
//         yinYang.position.z = pointsEarthInside[0].z;
//         i--;
//         requestAnimationFrame(moveEarthToFront);
//     } else if (i > 0 && backwardsEarth === true) {
//         let bPoint = easedArray[i];
//         let b = pointsEarthInside[parseInt(bPoint)]
//         let ybPoint = easedArray[easedArray.length-(i+1)];
//         let yb = pointsEarthOutside[parseInt(ybPoint)]
//         earth.position.x = b.x;
//         earth.position.y = b.y;
//         earth.position.z = b.z;
//         yinYang.position.x = yb.x
//         yinYang.position.y = yb.y
//         yinYang.position.z = yb.z
//         i--
//         requestAnimationFrame(moveEarthToFront);
//     } else if (backwardsEarth === true && i === 0) {
//         ti = 0;
//         th = 0;
//         console.log('end of earth')
//         backwardsEarth = false
//         moveWoodToFront()
//     }
// }

//************ */End moving along curve experiment***************











//*******************First movement example with easing************** */
// let fps = 80;
// let duration = 2.0;               // seconds
// let step = 1 / (duration * fps);  // t-step per frame
// let ti = 0;
// let th = 0
// let backwardsEarth = false;

// function lerp(a, b, t) {  
//     return a + (b - a) * t 
// }

// function ease(t) { 
//     // return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t 
//     // return t<.5 ? 2*t*t : -1+(4-2*t)*t 
//     // return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 
//     return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t 
// }

// function moveEarthToFront() {
//     ti += step;
//     //starting and ending position
//     let a = { x: 0, y: -30, z: 0 }
//     let b = { x: 0, y: 0, z: 90 }

//     //starting and ending position for yinYang
//     let ya = { x: 0, y: 0, z: 0 }
//     let yb = { x: 0, y: -30, z: 0 }

//     if (earth.position.z < b.z && backwardsEarth === false) {
//         //I kept the old code in EARTH for reference, the below is the eased
//         //version of the above code.  Easing the animation makes it much 
//         //more smooth
//         // earth.position.x = la.x + (b.x - a.x) * ti;
//         earth.position.x = lerp(a.x, b.x, ease(ti));
//         // earth.position.y = a.y + (b.y - a.y) * ti;
//         earth.position.y = lerp(a.y, b.y, ease(ti));
//         // earth.position.z = a.z + (b.z - a.z) * ti;
//         earth.position.z = lerp(a.z, b.z, ease(ti));
//         // yinYang.position.x = ya.x + (yb.x - ya.x) * ti;
//         yinYang.position.x = lerp(ya.x, yb.x, ease(ti));
//         // yinYang.position.y = ya.y + (yb.y - ya.y) * ti;
//         yinYang.position.y = lerp(ya.y, yb.y, ease(ti));
//         // yinYang.position.z = ya.x + (yb.z - ya.z) * ti;
//         yinYang.position.z = lerp(ya.z, yb.z, ease(ti));


//         requestAnimationFrame(moveEarthToFront);
//     } else if (earth.position.z >= b.z && backwardsEarth === false) {
//         backwardsEarth = true;
//         requestAnimationFrame(moveEarthToFront);
//     } else if (backwardsEarth === true && earth.position.z > a.z) {
//         th += step;
//         // earth.position.x = b.x + (a.x - b.x) * th;
//         earth.position.x = lerp(b.x, a.x, ease(th));
//         // earth.position.y = b.y + (a.y - b.y) * th;
//         earth.position.y = lerp(b.y, a.y, ease(th));
//         // earth.position.z = b.z + (a.z - b.z) * th;
//         earth.position.z = lerp(b.z, a.z, ease(th));
//         // yinYang.position.x = yb.x + (ya.x - yb.x) * th;
//         yinYang.position.x = lerp(yb.x, ya.x, ease(th));
//         // yinYang.position.y = yb.y + (ya.y - yb.y) * th;
//         yinYang.position.y = lerp(yb.y, ya.y, ease(th));
//         // yinYang.position.z = yb.x + (ya.z - yb.z) * th;
//         yinYang.position.z = lerp(yb.z, ya.z, ease(th));

//         requestAnimationFrame(moveEarthToFront);
//     } else if (backwardsEarth === true && earth.position.z <= a.z) {
//         ti = 0;
//         th = 0;
//         console.log('end of earth')
//         backwardsEarth = false
//         moveWoodToFront()
//     }
// }

// backwardsWood = false

// function moveWoodToFront() {
//     ti += step;
//     let a = { x: 29, y: -9, z: 0 }
//     let b = { x: 0, y: 0, z: 90 }

//     let ya = { x: 0, y: 0, z: 0 }
//     let yb = { x: 29, y: -9, z: 0 }

//     if (wood.position.z < b.z && backwardsWood === false) {
//         wood.position.x = lerp(a.x, b.x, ease(ti));
//         wood.position.y = lerp(a.y, b.y, ease(ti));
//         wood.position.z = lerp(a.z, b.z, ease(ti));
//         yinYang.position.x = lerp(ya.x, yb.x, ease(ti));
//         yinYang.position.y = lerp(ya.y, yb.y, ease(ti));
//         yinYang.position.z = lerp(ya.z, yb.z, ease(ti));
//         requestAnimationFrame(moveWoodToFront);
//     } else if (wood.position.z >= b.z && backwardsWood === false) {
//         backwardsWood = true;
//         requestAnimationFrame(moveWoodToFront);
//     } else if (backwardsWood === true && wood.position.z > a.z) {
//         th += step;
//         wood.position.x = lerp(b.x, a.x, ease(th));
//         wood.position.y = lerp(b.y, a.y, ease(th));
//         wood.position.z = lerp(b.z, a.z, ease(th));
//         yinYang.position.x = lerp(yb.x, ya.x, ease(th));
//         yinYang.position.y = lerp(yb.y, ya.y, ease(th));
//         yinYang.position.z = lerp(yb.z, ya.z, ease(th));
//         requestAnimationFrame(moveWoodToFront);
//     } else if (backwardsWood === true && wood.position.z <= a.z) {
//         ti = 0;
//         th = 0;
//         console.log('end of wood')
//         backwardsWood = false
//         moveFireToFront()
//     }
// }

// backwardsFire = false

// function moveFireToFront() {
//     ti += step;
//     let a = { x: 18, y: 24, z: 0 }
//     let b = { x: 0, y: 0, z: 90 }

//     let ya = { x: 0, y: 0, z: 0 }
//     let yb = { x: 18, y: 24, z: 0 }

//     if (fire.position.z < b.z && backwardsFire === false) {
//         fire.position.x = lerp(a.x, b.x, ease(ti));
//         fire.position.y = lerp(a.y, b.y, ease(ti))
//         fire.position.z = lerp(a.z, b.z, ease(ti))
//         yinYang.position.x = lerp(ya.x, yb.x, ease(ti));
//         yinYang.position.y = lerp(ya.y, yb.y, ease(ti));
//         yinYang.position.z = lerp(ya.z, yb.z, ease(ti));
//         requestAnimationFrame(moveFireToFront);
//     } else if (fire.position.z >= b.z && backwardsFire === false) {
//         backwardsFire = true;
//         requestAnimationFrame(moveFireToFront);
//     } else if (backwardsFire === true && fire.position.z > a.z) {
//         th += step;
//         fire.position.x = lerp(b.x, a.x, ease(th));
//         fire.position.y = lerp(b.y, a.y, ease(th));
//         fire.position.z = lerp(b.z, a.z, ease(th));
//         yinYang.position.x = lerp(yb.x, ya.x, ease(th));
//         yinYang.position.y = lerp(yb.y, ya.y, ease(th));
//         yinYang.position.z = lerp(yb.z, ya.z, ease(th));
//         requestAnimationFrame(moveFireToFront);
//     } else if (backwardsFire === true && fire.position.z <= a.z) {
//         ti = 0;
//         th = 0;
//         console.log('end of fire')
//         backwardsFire = false
//         moveWaterToFront()
//     }
// }

// backwardsWater = false

// function moveWaterToFront() {
//     ti += step;
//     let a = { x: -18, y: 24, z: 0 }
//     let b = { x: 0, y: 0, z: 90 }

//     let ya = { x: 0, y: 0, z: 0 }
//     let yb = { x: -18, y: 24, z: 0 }

//     if (water.position.z < b.z && backwardsWater === false) {
//         water.position.x = lerp(a.x, b.x, ease(ti));
//         water.position.y = lerp(a.y, b.y, ease(ti));
//         water.position.z = lerp(a.z, b.z, ease(ti));
//         yinYang.position.x = lerp(ya.x, yb.x, ease(ti));
//         yinYang.position.y = lerp(ya.y, yb.y, ease(ti));
//         yinYang.position.z = lerp(ya.z, yb.z, ease(ti));
//         requestAnimationFrame(moveWaterToFront);
//     } else if (water.position.z >= b.z && backwardsWater === false) {
//         backwardsWater = true;
//         requestAnimationFrame(moveWaterToFront);
//     } else if (backwardsWater === true && water.position.z > a.z) {
//         th += step;
//         water.position.x = lerp(b.x, a.x, ease(th));
//         water.position.y = lerp(b.y, a.y, ease(th));
//         water.position.z = lerp(b.z, a.z, ease(th));
//         yinYang.position.x = lerp(yb.x, ya.x, ease(th));
//         yinYang.position.y = lerp(yb.y, ya.y, ease(th));
//         yinYang.position.z = lerp(yb.z, ya.z, ease(th));
//         requestAnimationFrame(moveWaterToFront);
//     } else if (backwardsWater === true && water.position.z <= a.z) {
//         ti = 0;
//         th = 0;
//         console.log('end of water')
//         backwardsWater = false
//         moveMetalToFront()
//     }
// }

// backwardsMetal = false

// function moveMetalToFront() {
//     ti += step;
//     let a = { x: -29, y: -9, z: 0 }
//     let b = { x: 0, y: 0, z: 90 }

//     let ya = { x: 0, y: 0, z: 0 }
//     let yb = { x: -29, y: -9, z: 0 }

//     if (metal.position.z < b.z && backwardsMetal === false) {
//         metal.position.x = lerp(a.x, b.x, ease(ti));
//         metal.position.y = lerp(a.y, b.y, ease(ti));
//         metal.position.z = lerp(a.z, b.z, ease(ti));
//         yinYang.position.x = lerp(ya.x, yb.x, ease(ti));
//         yinYang.position.y = lerp(ya.y, yb.y, ease(ti));
//         yinYang.position.z = lerp(ya.z, yb.z, ease(ti));
//         requestAnimationFrame(moveMetalToFront);
//     } else if (metal.position.z >= b.z && backwardsMetal === false) {
//         backwardsMetal = true;
//         requestAnimationFrame(moveMetalToFront);
//     } else if (backwardsMetal === true && metal.position.z > a.z) {
//         th += step;
//         metal.position.x = lerp(b.x, a.x, ease(th));
//         metal.position.y = lerp(b.y, a.y, ease(th));
//         metal.position.z = lerp(b.z, a.z, ease(th));
//         yinYang.position.x = lerp(yb.x, ya.x, ease(th));
//         yinYang.position.y = lerp(yb.y, ya.y, ease(th));
//         yinYang.position.z = lerp(yb.z, ya.z, ease(th));
//         requestAnimationFrame(moveMetalToFront);
//     } else if (backwardsMetal === true && metal.position.z <= a.z) {
//         ti = 0;
//         th = 0;
//         console.log('end of metal')
//         backwardsMetal = false
//         moveEarthToFront()
//     }
// }

animate();
//--------------------------END RENDER-------------------------

import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//texture
const matcapTexture2 = new THREE.TextureLoader().load('./static/textures/text/matcapText2.png')

//Loaders
let isLoaded = false
const loadingCounter = document.querySelector('.loading-counter')
const loadingManager = new THREE.LoadingManager(
    () => 
    {
        gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 4, value: 0 , delay : 0.5})
        isLoaded = true
    },

    (itemsUrl, itemsLoaded, itemsTotal) => 
    {
        const progressRatio = itemsLoaded / itemsTotal
    }
)
const textureLoader = new THREE.TextureLoader(loadingManager)
const gltfloader = new GLTFLoader(loadingManager)

/**
 * Overlay
 */
// Loading Overlay
const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
const overlayMaterial = new THREE.ShaderMaterial({
    transparent: true,
    uniforms:
    {
        uAlpha: { value: 1 }
    },
    vertexShader:  `
    void main()
    {
        gl_Position = vec4(position, 1.0);
    }
`,
fragmentShader: `
    uniform float uAlpha;

    void main()
    {
        gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
    }
`
})

const overlayMaterialMenu = new THREE.ShaderMaterial({
    transparent: true,
    uniforms:
    {
        uAlpha: { value: 0 }
    },
    vertexShader:  `
    void main()
    {
        gl_Position = vec4(position, 1.0);
    }
`,
fragmentShader: `
    uniform float uAlpha;

    void main()
    {
        gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
    }
`
})
const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
const overlayMenu = new THREE.Mesh(overlayGeometry, overlayMaterialMenu)

scene.add(overlay)
scene.add(overlayMenu)

/**
 * Textures
 */
//Room baked texture
const bakedTexture = textureLoader.load('./static/textures/room/room_Surface_Color.png')
const ballShadow = textureLoader.load('./static/textures/room/ballShadow.jpg')

bakedTexture.colorSpace = THREE.SRGBColorSpace

/**
 * Raycatser
 */
const raycatser = new THREE.Raycaster()

/**
 * Object
 */
//Materials
const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture })
bakedTexture.flipY = false

const plantMaterial = new THREE.MeshLambertMaterial({ color: '#0D5B00' })
const terreMaterial = new THREE.MeshStandardMaterial({ color: '#663A0C' })

/**
 * Fonts
 */

const fontLoader = new FontLoader()

let WorkText = null

fontLoader.load(
    './static/fonts/helvetiker_regular.typeface.json',
    (font) =>
    {
        const workGeometry = new TextGeometry(
            'Work',
            {
                font: font,
                size: 0.098,
                depth: 1,
                curveSegments: 10,
                bevelEnabled: true,
                bevelThickness: 0.1,
                bevelSize: 0.003,
                bevelOffset: 0,
                bevelSegments: 2
            }
        )

        workGeometry.center();

        const textMaterial = new THREE.MeshMatcapMaterial()
        textMaterial.matcap = matcapTexture2
        WorkText = new THREE.Mesh(workGeometry, textMaterial)
        scene.add(WorkText)

        WorkText.position.set(-2.302, 1.8, 0.55)
        WorkText.rotation.set(0, Math.PI * 0.5, 0)
        
        WorkText.scale.set(1, 1, 0.02);
    }
)

let AboutmeText = null


//Models
fontLoader.load(
    './static/fonts/helvetiker_regular.typeface.json',
    (font) =>
    {
        const AboutmeGeometry = new TextGeometry(
            'About me',
            {
                font: font,
                size: 0.098,
                depth: 0.9,
                curveSegments: 10,
                bevelEnabled: true,
                bevelThickness: 0.1,
                bevelSize: 0.003,
                bevelOffset: 0,
                bevelSegments: 2
            }
        )

        AboutmeGeometry.center();

        const textMaterial = new THREE.MeshMatcapMaterial()
        textMaterial.matcap = matcapTexture2

        AboutmeText = new THREE.Mesh(AboutmeGeometry, textMaterial)
        scene.add(AboutmeText)

        AboutmeText.position.set(-2.302, 1.57, 0.85)
        AboutmeText.rotation.set(0, Math.PI * 0.5, 0)
        
        AboutmeText.scale.set(1, 1, 0.02)
    }
)

let ContactText = null

fontLoader.load(
    './static/fonts/helvetiker_regular.typeface.json',
    (font) =>
    {
        const ContactGeometry = new TextGeometry(
            'Contact',
            {
                font: font,
                size: 0.098,
                depth: 0.9,
                curveSegments: 10,
                bevelEnabled: true,
                bevelThickness: 0.1,
                bevelSize: 0.003,
                bevelOffset: 0,
                bevelSegments: 2
            }
        )

        ContactGeometry.center();

        const textMaterial = new THREE.MeshMatcapMaterial()
        textMaterial.matcap = matcapTexture2
        ContactText = new THREE.Mesh(ContactGeometry, textMaterial)
        scene.add(ContactText)

        ContactText.position.set(-2.302, 1.35, 0.6)
        ContactText.rotation.set(0, Math.PI * 0.5, 0)
        
        ContactText.scale.set(1, 1, 0.02)
    }
)

//import room
bakedTexture.flipY = false
let basketballRoom = null

gltfloader.load(
    './static/models/room/scene.gltf',
    (gltf) =>
    {
        gltf.scene.traverse((child)=>
        {
            child.material = bakedMaterial
        })

        //find the objects to tweak
        basketballRoom = gltf.scene.children.find(child => child.name === 'ball')
        const vinylRoom_1 = gltf.scene.children.find(child => child.name === 'vinyl_1')
        const vinylRoom_2 = gltf.scene.children.find(child => child.name === 'vinyl_2')
        const vinylRoom_3 = gltf.scene.children.find(child => child.name === 'vinyl_3')
        const plant = gltf.scene.children.find(child => child.name === 'feuille')
        const terre = gltf.scene.children.find(child => child.name === 'terre')

        plant.material = plantMaterial
        terre.material = terreMaterial

        //tweak the objects
        basketballRoom.position.y = 1

        vinylRoom_1.visible = false
        vinylRoom_2.visible = false
        vinylRoom_3.visible = false
        
        scene.add(gltf.scene)
    }
)

// Computer screen
const screenMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.62, 0.32),
    new THREE.MeshBasicMaterial( {color: '#171717'} )
)
screenMesh.position.x = -0.889
screenMesh.position.y = 0.84
screenMesh.position.z = -0.660
scene.add(screenMesh)
 
//import top wall vinyl
let vinyl_1 = null

gltfloader.load(
    './static/models/vinyls/vinyl.gltf',
    (gltf) =>
    {
        vinyl_1 = gltf.scene

        vinyl_1.scale.set(0.09, 0.09, 0.09)

        vinyl_1.rotation.z = Math.PI * 0.5

        vinyl_1.position.x = -2.14
        vinyl_1.position.y = 1.82
        vinyl_1.position.z = 0.38

        scene.add(vinyl_1)
    }
)

//import middle wall vinyl
let vinyl_2 = null

gltfloader.load(
    './static/models/vinyls/vinyl.gltf',
    (gltf) =>
    {
        vinyl_2 = gltf.scene

        vinyl_2.scale.set(0.09, 0.09, 0.09)

        vinyl_2.rotation.z = Math.PI * 0.5

        vinyl_2.position.x = -2.14
        vinyl_2.position.y = 1.558
        vinyl_2.position.z = 0.763

        scene.add(vinyl_2)
    }
)

//import bottom wall vinyl
let vinyl_3 = null

gltfloader.load(
    './static/models/vinyls/vinyl.gltf',
    (gltf) =>
    {
        vinyl_3 = gltf.scene

        vinyl_3.scale.set(0.09, 0.09, 0.09)

        vinyl_3.rotation.z = Math.PI * 0.5

        vinyl_3.position.x = -2.14
        vinyl_3.position.y = 1.312
        vinyl_3.position.z = 0.382

        scene.add(vinyl_3)
    }
)


// ball's cast shadow
const sphereShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.8, 0.8),
    new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        alphaMap: ballShadow
    })
)
sphereShadow.position.x = -0.419
sphereShadow.position.y = 1.06
sphereShadow.position.z = -0.986

scene.add(sphereShadow)

/**
 * Lights
 */

// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight('#ffffff', 1)
scene.add(pointLight)

pointLight.position.set(1.44, 2, 1.85)

const pointLightCube = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.1, 0.1),
    new THREE.MeshBasicMaterial({color: 0x000000,})
)
scene.add(pointLightCube)

pointLight.position.set(1.44, 2, 1.85)

pointLightCube.position.x = pointLight.position.x
pointLightCube.position.y = pointLight.position.y
pointLightCube.position.z = pointLight.position.z

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Mouse
 */
const mouse = new THREE.Vector2()

window.addEventListener('mousemove', (event) =>
{
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height, 0.1, 10)
const cameraTarget = new THREE.Vector3(-2.13, 1.13, -0.9)

camera.position.x = 1.98
camera.position.y = 1.46
camera.position.z = 2.16

scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enabled = false

controls.target = cameraTarget

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true


/**
 * cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Animate
 */
//animation to screen
window.addEventListener('click', () => 
    {
        raycatser.setFromCamera(mouse, camera)
        const vinyl1Test = [vinyl_1]
        const vinyl2Test = [vinyl_2]
        const vinyl3Test = [vinyl_3]
        const vinyl1Intersects = raycatser.intersectObjects(vinyl1Test)
        const vinyl2Intersects = raycatser.intersectObjects(vinyl2Test)
        const vinyl3Intersects = raycatser.intersectObjects(vinyl3Test)

        if (vinyl1Intersects.length)
            {
                gsap.to(controls.target, { x: -0.889, y: 0.84, z: -0.660, duration: 2.5, ease: "power3.inOut"})
                gsap.to(camera.position, { x: -0.889, y: 0.84, z: 0, duration: 2.2, ease: "power3.inOut", delay: 0.2, onComplete: () => {window.location.href = 'app.html#/Work';}})
    
                document.querySelector('.first_bar').style.opacity = '0'
                document.querySelector('.second_bar').style.opacity = '0'
                document.querySelector('.third_bar').style.opacity = '0'
            }

        if (vinyl2Intersects.length)
            {
                gsap.to(controls.target, { x: -0.889, y: 0.84, z: -0.660, duration: 2.5, ease: "power3.inOut"})
                gsap.to(camera.position, { x: -0.889, y: 0.84, z: 0, duration: 2.2, ease: "power3.inOut", delay: 0.2, onComplete: () => {window.location.href = 'app.html#/Work';}})
        
                document.querySelector('.first_bar').style.opacity = '0'
                document.querySelector('.second_bar').style.opacity = '0'
                document.querySelector('.third_bar').style.opacity = '0'
            }

        if (vinyl3Intersects.length)
            {
                gsap.to(controls.target, { x: -0.889, y: 0.84, z: -0.660, duration: 2.5, ease: "power3.inOut"})
                gsap.to(camera.position, { x: -0.889, y: 0.84, z: 0, duration: 2.2, ease: "power3.inOut", delay: 0.2, onComplete: () => {window.location.href = './app/';}})
            
                document.querySelector('.first_bar').style.opacity = '0'
                document.querySelector('.second_bar').style.opacity = '0'
                document.querySelector('.third_bar').style.opacity = '0'
            }
    }
)

let isMouseOverVinyl1 = false
let isMouseOverVinyl2 = false
let isMouseOverVinyl3 = false

let isMouseOverBall = false
let rotationSpeed = 0
const maxRotationSpeed = 0.1
const rotationAcceleration = 0.002
const minRotationSpeed = 0.01

let previousTime = 0

const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltatTime = elapsedTime - previousTime
    previousTime = elapsedTime

    //cast a Ray
    raycatser.setFromCamera(mouse, camera)

    //vinyl & text animation
    if (vinyl_1) {

        vinyl_1.rotation.x += 0.01

        const modelIntersects = raycatser.intersectObject(vinyl_1) 
        if(modelIntersects.length)
        {
            vinyl_1.rotation.x += 0.015
            document.body.style.cursor = 'pointer'
        } else { document.body.style.cursor = 'auto' }

        const vinyl1Intersects = raycatser.intersectObject(vinyl_1)
        isMouseOverVinyl1 = vinyl1Intersects.length > 0
    }

    if (vinyl_2) {

        vinyl_2.rotation.x += 0.01

        const modelIntersects = raycatser.intersectObject(vinyl_2) 
        if(modelIntersects.length)
        {
            vinyl_2.rotation.x += 0.015
            document.body.style.cursor = 'pointer'
        } 
        
        const vinyl2Intersects = raycatser.intersectObject(vinyl_2)
        isMouseOverVinyl2 = vinyl2Intersects.length > 0;
    }

    if (vinyl_3) {
        vinyl_3.rotation.x += 0.01

        const modelIntersects = raycatser.intersectObject(vinyl_3) 
        if(modelIntersects.length)
        {
            vinyl_3.rotation.x += 0.015
            document.body.style.cursor = 'pointer'
        }

        const vinyl3Intersects = raycatser.intersectObject(vinyl_3)
        isMouseOverVinyl3 = vinyl3Intersects.length > 0
    }



    //Animation WORK/ABOUT ME/CONTACT
    if (WorkText) {
        if (isMouseOverVinyl1) {
            gsap.to(WorkText.position, { x: -1.717, duration: 0.2 });
        } else {
            gsap.to(WorkText.position, { x: -2.302, duration: 0.3 });
        }
    }

    if (AboutmeText) {
        if (isMouseOverVinyl2) {
            gsap.to(AboutmeText.position, { x: -1.717, duration: 0.2,});
        } else {
            gsap.to(AboutmeText.position, { x: -2.302, duration: 0.3 });
        }
    }

    if (ContactText) {
        if (isMouseOverVinyl3) {
            gsap.to(ContactText.position, { x: -1.717, duration: 0.2 });
        } else {
            gsap.to(ContactText.position, { x: -2.302, duration: 0.3 });
        }
    }

    //basketball animation
    if(basketballRoom)
    {
        // Make the ball roll slowly
        basketballRoom.rotation.y += rotationSpeed
        basketballRoom.rotation.x += rotationSpeed

        const modelIntersects = raycatser.intersectObject(basketballRoom);
        isMouseOverBall = modelIntersects.length > 0;

        // make the ball accelerate
        if (isMouseOverBall) {
            if (rotationSpeed < maxRotationSpeed) {
                rotationSpeed += rotationAcceleration;
            }
        } else {
            // make the ball decelerate
            if (rotationSpeed > minRotationSpeed) {
                rotationSpeed -= rotationAcceleration;
            } else {
                rotationSpeed = minRotationSpeed;
            }
        }
    }

    pointLightCube.position.x = pointLight.position.x
    pointLightCube.position.y = pointLight.position.y
    pointLightCube.position.z = pointLight.position.z

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


/**
 * Animation CSS
 */

let overlayMenuActive = false

const burgerIcon = document.querySelector('.burger_icon');
const menu = document.querySelector('.menu')
burgerIcon.addEventListener('click', function () {

    if (overlayMenuActive === false) {
        gsap.to(overlayMaterialMenu.uniforms.uAlpha, { duration: 0.5, value: 0.75 , delay : 0.2 })
    }

    if (overlayMenuActive === true) {
        gsap.to(overlayMaterialMenu.uniforms.uAlpha, { duration: 0.5, value: 0 , delay : 0.2 })
    }

    overlayMenuActive = !overlayMenuActive

    // burger icon animation
    if (burgerIcon.classList.contains('active')) {
        burgerIcon.classList.remove('active')
        document.querySelector('.first_bar').style.transform = 'none'
        document.querySelector('.first_bar').style.backgroundColor = 'rgb(0, 0, 0)'

        document.querySelector('.second_bar').style.opacity = '1'

        document.querySelector('.third_bar').style.transform = 'none'
        document.querySelector('.third_bar').style.backgroundColor = 'rgb(0, 0, 0)'

    } else {
        burgerIcon.classList.add('active');
        document.querySelector('.first_bar').style.transform = 'rotate(45deg) translate(5px, 12.5px)'
        document.querySelector('.first_bar').style.backgroundColor = 'rgb(180, 180, 180)'

        document.querySelector('.second_bar').style.opacity = '0'

        document.querySelector('.third_bar').style.transform = 'rotate(-45deg) translate(5px, -12.5px)'
        document.querySelector('.third_bar').style.backgroundColor = 'rgb(180, 180, 180)'}
        document.querySelector('.third_bar').style.hover = 'none';

    

    // visibility managment of the menu
    if (menu.classList.contains('active')) {
        menu.classList.toggle('active');
        menu.style.visibility = 'hidden';
    } else {
        menu.classList.toggle('active');
        menu.style.visibility = 'visible';
    }
})

//click on the butons to go to the other pages
const buttons = document.querySelectorAll(".Work, .About_me, .Contact")

buttons.forEach(buttons => {
    buttons.addEventListener('click', (event) => {
        event.preventDefault()

        const targetUrl = buttons.querySelector("a") ? buttons.querySelector("a").getAttribute("href") : "#"

        gsap.to(overlayMaterialMenu.uniforms.uAlpha, { duration: 0.5, value: 0 , delay : 0.2 })
        overlayMenuActive = false
        
        document.querySelector('.first_bar').style.opacity = '0'
        document.querySelector('.second_bar').style.opacity = '0'
        document.querySelector('.third_bar').style.opacity = '0'

        menu.classList.remove('active')
        menu.style.visibility = 'hidden'

        gsap.to(overlayMaterialMenu.uniforms.uAlpha, { duration: 0.5, value: 0 , delay : 0.2 })
        gsap.to(controls.target, { x: -0.889, y: 0.84, z: -0.660, duration: 2.5, ease: "power3.inOut" })
        gsap.to(camera.position, { x: -0.889, y: 0.84, z: 0, duration: 2.2, ease: "power3.inOut", delay: 0.2, onComplete: () => { window.location.href = targetUrl } })
    })
})


//Loader animation

const loadingBarElement = document.querySelector('.loader')

function loaderBarElementRemoving() 
{
    if (isLoaded) {
        gsap.to(loadingBarElement, { opacity: 0, duration: 1.2});
    } else {
        window.requestAnimationFrame(loaderBarElementRemoving)
    }
}

loaderBarElementRemoving()
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { useNavigate } from 'react-router-dom';
import '../style/LandingPage.css';

const LandingPage = () => {
  const canvasRef = useRef(null);
  const burgerIconRef = useRef(null);
  const menuRef = useRef(null);
  const loaderRef = useRef(null);
  const firstBarRef = useRef(null);
  const secondBarRef = useRef(null);
  const thirdBarRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  const navigate = useNavigate();

  const overlayMaterial = useRef(
    new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uAlpha: { value: 1 }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uAlpha;
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
        }
      `
    })
  )

  const overlayMaterialMenu = useRef(
    new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uAlpha: { value: 0 }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uAlpha;
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
        }
      `
    })
  )

  useEffect(() => {
    // Scene setup
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    // Texture
    const matcapTexture2 = new THREE.TextureLoader().load('/textures/text/matcapText2.png');

    // Loaders
    const loadingManager = new THREE.LoadingManager(
      () => {
        setIsLoaded(true);
      },
      (itemsUrl, itemsLoaded, itemsTotal) => {
        const progressRatio = itemsLoaded / itemsTotal;
        // You could use progressRatio to update a progress bar if needed
      }
    );
    
    const textureLoader = new THREE.TextureLoader(loadingManager);
    const gltfloader = new GLTFLoader(loadingManager);

    // Overlay
    const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial.current);
    const overlayMenu = new THREE.Mesh(overlayGeometry, overlayMaterialMenu.current);

    scene.add(overlay);
    scene.add(overlayMenu);

    // Room baked texture
    const bakedTexture = textureLoader.load('/textures/room/room_Surface_Color.png');
    const ballShadow = textureLoader.load('/textures/room/ballShadow.jpg');

    bakedTexture.colorSpace = THREE.SRGBColorSpace;

    // Raycaster
    const raycaster = new THREE.Raycaster();

    // Materials
    const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
    bakedTexture.flipY = false;

    const plantMaterial = new THREE.MeshLambertMaterial({ color: '#0D5B00' });
    const terreMaterial = new THREE.MeshStandardMaterial({ color: '#663A0C' });

    // Fonts
    const fontLoader = new FontLoader();
    let WorkText = null;
    let AboutmeText = null;
    let ContactText = null;

    fontLoader.load(
      '/fonts/helvetiker_regular.typeface.json',
      (font) => {
        // Work Text
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
        );

        workGeometry.center();

        const textMaterial = new THREE.MeshMatcapMaterial();
        textMaterial.matcap = matcapTexture2;
        WorkText = new THREE.Mesh(workGeometry, textMaterial);
        scene.add(WorkText);

        WorkText.position.set(-2.302, 1.8, 0.55);
        WorkText.rotation.set(0, Math.PI * 0.5, 0);
        WorkText.scale.set(1, 1, 0.02);

        // About me Text
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
        );

        AboutmeGeometry.center();
        AboutmeText = new THREE.Mesh(AboutmeGeometry, textMaterial);
        scene.add(AboutmeText);

        AboutmeText.position.set(-2.302, 1.57, 0.85);
        AboutmeText.rotation.set(0, Math.PI * 0.5, 0);
        AboutmeText.scale.set(1, 1, 0.02);

        // Contact Text
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
        );

        ContactGeometry.center();
        ContactText = new THREE.Mesh(ContactGeometry, textMaterial);
        scene.add(ContactText);

        ContactText.position.set(-2.302, 1.35, 0.6);
        ContactText.rotation.set(0, Math.PI * 0.5, 0);
        ContactText.scale.set(1, 1, 0.02);
      }
    );

    // Import room
    let basketballRoom = null;
    gltfloader.load(
      '/models/room/scene.gltf',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = bakedMaterial;
        });

        // Find the objects to tweak
        basketballRoom = gltf.scene.children.find(child => child.name === 'ball');
        const vinylRoom_1 = gltf.scene.children.find(child => child.name === 'vinyl_1');
        const vinylRoom_2 = gltf.scene.children.find(child => child.name === 'vinyl_2');
        const vinylRoom_3 = gltf.scene.children.find(child => child.name === 'vinyl_3');
        const plant = gltf.scene.children.find(child => child.name === 'feuille');
        const terre = gltf.scene.children.find(child => child.name === 'terre');

        plant.material = plantMaterial;
        terre.material = terreMaterial;

        // Tweak the objects
        basketballRoom.position.y = 1;

        vinylRoom_1.visible = false;
        vinylRoom_2.visible = false;
        vinylRoom_3.visible = false;
        
        scene.add(gltf.scene);
      }
    );

    // Computer screen
    const screenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.62, 0.32),
      new THREE.MeshBasicMaterial({ color: '#171717' })
    );
    screenMesh.position.x = -0.889;
    screenMesh.position.y = 0.84;
    screenMesh.position.z = -0.660;
    scene.add(screenMesh);

    // Import top wall vinyl
    let vinyl_1 = null;
    gltfloader.load(
      '/models/vinyls/vinyl.gltf',
      (gltf) => {
        vinyl_1 = gltf.scene;
        vinyl_1.scale.set(0.09, 0.09, 0.09);
        vinyl_1.rotation.z = Math.PI * 0.5;
        vinyl_1.position.x = -2.14;
        vinyl_1.position.y = 1.82;
        vinyl_1.position.z = 0.38;
        scene.add(vinyl_1);
      }
    );

    // Import middle wall vinyl
    let vinyl_2 = null;
    gltfloader.load(
      '/models/vinyls/vinyl.gltf',
      (gltf) => {
        vinyl_2 = gltf.scene;
        vinyl_2.scale.set(0.09, 0.09, 0.09);
        vinyl_2.rotation.z = Math.PI * 0.5;
        vinyl_2.position.x = -2.14;
        vinyl_2.position.y = 1.558;
        vinyl_2.position.z = 0.763;
        scene.add(vinyl_2);
      }
    );

    // Import bottom wall vinyl
    let vinyl_3 = null;
    gltfloader.load(
      '/models/vinyls/vinyl.gltf',
      (gltf) => {
        vinyl_3 = gltf.scene;
        vinyl_3.scale.set(0.09, 0.09, 0.09);
        vinyl_3.rotation.z = Math.PI * 0.5;
        vinyl_3.position.x = -2.14;
        vinyl_3.position.y = 1.312;
        vinyl_3.position.z = 0.382;
        scene.add(vinyl_3);
      }
    );

    // Ball's cast shadow
    const sphereShadow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.8, 0.8),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        alphaMap: ballShadow
      })
    );
    sphereShadow.position.x = -0.419;
    sphereShadow.position.y = 1.06;
    sphereShadow.position.z = -0.986;
    scene.add(sphereShadow);

    // Lights
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight('#ffffff', 1);
    scene.add(pointLight);
    pointLight.position.set(1.44, 2, 1.85);

    const pointLightCube = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.1, 0.1),
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    scene.add(pointLightCube);
    pointLightCube.position.copy(pointLight.position);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Mouse
    const mouse = new THREE.Vector2();
    window.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX / sizes.width * 2 - 1;
      mouse.y = -(event.clientY / sizes.height) * 2 + 1;
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height, 0.1, 10);
    const cameraTarget = new THREE.Vector3(-2.13, 1.13, -0.9);

    camera.position.x = 1.98;
    camera.position.y = 1.46;
    camera.position.z = 2.16;

    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enabled = false;
    controls.target = cameraTarget;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    // Cursor
    const cursor = {
      x: 0,
      y: 0
    };

    window.addEventListener('mousemove', (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    });

    // Animation to screen click event
    window.addEventListener('click', () => {
      raycaster.setFromCamera(mouse, camera);
      
      if (vinyl_1 && vinyl_2 && vinyl_3) {
        const vinyl1Intersects = raycaster.intersectObject(vinyl_1);
        const vinyl2Intersects = raycaster.intersectObject(vinyl_2);
        const vinyl3Intersects = raycaster.intersectObject(vinyl_3);

        if (vinyl1Intersects.length) {
          gsap.to(controls.target, { x: -0.889, y: 0.84, z: -0.660, duration: 2.5, ease: "power3.inOut" });
          gsap.to(camera.position, { 
            x: -0.889, 
            y: 0.84, 
            z: 0, 
            duration: 2.2, 
            ease: "power3.inOut", 
            delay: 0.2,
            onComplete: () => { 
              navigate('/Work');
            }
          });

          if (firstBarRef.current) firstBarRef.current.style.opacity = '0';
          if (secondBarRef.current) secondBarRef.current.style.opacity = '0';
          if (thirdBarRef.current) thirdBarRef.current.style.opacity = '0';
        }

        if (vinyl2Intersects.length) {
          gsap.to(controls.target, { x: -0.889, y: 0.84, z: -0.660, duration: 2.5, ease: "power3.inOut" });
          gsap.to(camera.position, { 
            x: -0.889, 
            y: 0.84, 
            z: 0, 
            duration: 2.2, 
            ease: "power3.inOut", 
            delay: 0.2,
            onComplete: () => { 
              navigate('/ComingSoon');
            }
          });

          if (firstBarRef.current) firstBarRef.current.style.opacity = '0';
          if (secondBarRef.current) secondBarRef.current.style.opacity = '0';
          if (thirdBarRef.current) thirdBarRef.current.style.opacity = '0';
        }

        if (vinyl3Intersects.length) {
          gsap.to(controls.target, { x: -0.889, y: 0.84, z: -0.660, duration: 2.5, ease: "power3.inOut" });
          gsap.to(camera.position, { 
            x: -0.889, 
            y: 0.84, 
            z: 0, 
            duration: 2.2, 
            ease: "power3.inOut", 
            delay: 0.2,
            onComplete: () => { 
              navigate('/ComingSoon');
            }
          });

          if (firstBarRef.current) firstBarRef.current.style.opacity = '0';
          if (secondBarRef.current) secondBarRef.current.style.opacity = '0';
          if (thirdBarRef.current) thirdBarRef.current.style.opacity = '0';
        }
      }
    });

    let isMouseOverVinyl1 = false;
    let isMouseOverVinyl2 = false;
    let isMouseOverVinyl3 = false;
    let isMouseOverBall = false;
    let rotationSpeed = 0;
    const maxRotationSpeed = 0.1;
    const rotationAcceleration = 0.002;
    const minRotationSpeed = 0.01;

    let previousTime = 0;
    const clock = new THREE.Clock();

    // Animation loop
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      // Cast ray
      raycaster.setFromCamera(mouse, camera);

      // Vinyl & text animation
      if (vinyl_1) {
        vinyl_1.rotation.x += 0.01;

        const modelIntersects = raycaster.intersectObject(vinyl_1);
        if (modelIntersects.length) {
          vinyl_1.rotation.x += 0.015;
          document.body.style.cursor = 'pointer';
        } else {
          document.body.style.cursor = 'auto';
        }

        const vinyl1Intersects = raycaster.intersectObject(vinyl_1);
        isMouseOverVinyl1 = vinyl1Intersects.length > 0;
      }

      if (vinyl_2) {
        vinyl_2.rotation.x += 0.01;

        const modelIntersects = raycaster.intersectObject(vinyl_2);
        if (modelIntersects.length) {
          vinyl_2.rotation.x += 0.015;
          document.body.style.cursor = 'pointer';
        }

        const vinyl2Intersects = raycaster.intersectObject(vinyl_2);
        isMouseOverVinyl2 = vinyl2Intersects.length > 0;
      }

      if (vinyl_3) {
        vinyl_3.rotation.x += 0.01;

        const modelIntersects = raycaster.intersectObject(vinyl_3);
        if (modelIntersects.length) {
          vinyl_3.rotation.x += 0.015;
          document.body.style.cursor = 'pointer';
        }

        const vinyl3Intersects = raycaster.intersectObject(vinyl_3);
        isMouseOverVinyl3 = vinyl3Intersects.length > 0;
      }

      // Animation WORK/ABOUT ME/CONTACT
      if (WorkText) {
        if (isMouseOverVinyl1) {
          gsap.to(WorkText.position, { x: -1.717, duration: 0.2 });
        } else {
          gsap.to(WorkText.position, { x: -2.302, duration: 0.3 });
        }
      }

      if (AboutmeText) {
        if (isMouseOverVinyl2) {
          gsap.to(AboutmeText.position, { x: -1.717, duration: 0.2 });
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

      // Basketball animation
      if (basketballRoom) {
        basketballRoom.rotation.y += rotationSpeed;
        basketballRoom.rotation.x += rotationSpeed;

        const modelIntersects = raycaster.intersectObject(basketballRoom);
        isMouseOverBall = modelIntersects.length > 0;

        // Make the ball accelerate
        if (isMouseOverBall) {
          if (rotationSpeed < maxRotationSpeed) {
            rotationSpeed += rotationAcceleration;
          }
        } else {
          // Make the ball decelerate
          if (rotationSpeed > minRotationSpeed) {
            rotationSpeed -= rotationAcceleration;
          } else {
            rotationSpeed = minRotationSpeed;
          }
        }
      }

      pointLightCube.position.copy(pointLight.position);

      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();

    // Clean up
    return () => {
      window.removeEventListener('resize', () => {});
      window.removeEventListener('mousemove', () => {});
      window.removeEventListener('click', () => {});
      renderer.dispose();
    };
  }, [navigate]);

  // Effect for loader animation
  useEffect(() => {
    if (isLoaded && loaderRef.current) {
      gsap.to(loaderRef.current, { opacity: 0, duration: 1.2 })

      // Animer l'overlay THREE
      gsap.to(overlayMaterial.current.uniforms.uAlpha, {
        value: 0,
        duration: 1.2,
        ease: "power2.out"
      })
    }
  }, [isLoaded]);

  // Burger menu toggle
  const toggleMenu = () => {
    const newOverlayMenuActive = !overlayMenuActive;
    setOverlayMenuActive(newOverlayMenuActive);
    
    // Menu overlay animation
    if (newOverlayMenuActive) {
      gsap.to(".overlaymenu", { duration: 0.5, opacity: 0.75, delay: 0.2 });
    } else {
      gsap.to(".overlaymenu", { duration: 0.5, opacity: 0, delay: 0.2 });
    }
    
    // Burger icon animation
    if (burgerIconRef.current) {
      burgerIconRef.current.classList.toggle('active');
      
      if (!newOverlayMenuActive) {
        // Reset to normal
        if (firstBarRef.current) {
          firstBarRef.current.style.transform = 'none';
          firstBarRef.current.style.backgroundColor = 'rgb(0, 0, 0)';
        }
        
        if (secondBarRef.current) {
          secondBarRef.current.style.opacity = '1';
        }
        
        if (thirdBarRef.current) {
          thirdBarRef.current.style.transform = 'none';
          thirdBarRef.current.style.backgroundColor = 'rgb(0, 0, 0)';
        }
      } else {
        // Active menu state
        if (firstBarRef.current) {
          firstBarRef.current.style.transform = 'rotate(45deg) translate(5px, 12.5px)';
          firstBarRef.current.style.backgroundColor = 'rgb(180, 180, 180)';
        }
        
        if (secondBarRef.current) {
          secondBarRef.current.style.opacity = '0';
        }
        
        if (thirdBarRef.current) {
          thirdBarRef.current.style.transform = 'rotate(-45deg) translate(5px, -12.5px)';
          thirdBarRef.current.style.backgroundColor = 'rgb(180, 180, 180)';
        }
      }
    }
    
    // Menu visibility
    if (menuRef.current) {
      if (newOverlayMenuActive) {
        menuRef.current.classList.add('active');
        menuRef.current.style.visibility = 'visible';
      } else {
        menuRef.current.classList.remove('active');
        menuRef.current.style.visibility = 'hidden';
      }
    }
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();
    
    // Hide menu and overlay
    setOverlayMenuActive(false);
    gsap.to(".overlaymenu", { duration: 0.5, opacity: 0, delay: 0.2 });
    
    if (menuRef.current) {
      menuRef.current.classList.remove('active');
      menuRef.current.style.visibility = 'hidden';
    }
    
    // Hide burger icon
    if (firstBarRef.current) firstBarRef.current.style.opacity = '0';
    if (secondBarRef.current) secondBarRef.current.style.opacity = '0';
    if (thirdBarRef.current) thirdBarRef.current.style.opacity = '0';
    
    // Camera animation before navigation
    gsap.to(".camera-target", { x: -0.889, y: 0.84, z: -0.660, duration: 2.5, ease: "power3.inOut" });
    gsap.to(".camera-position", { 
      x: -0.889, 
      y: 0.84, 
      z: 0, 
      duration: 2.2, 
      ease: "power3.inOut", 
      delay: 0.2,
      onComplete: () => { 
        navigate(path);
      }
    });
  };

  return (
    <div className="landing-page">
      <canvas ref={canvasRef} className="webgl"></canvas>
      <div ref={loaderRef} className="loader"></div>
      
      <div ref={burgerIconRef} className="burger_icon" onClick={toggleMenu}>
        <div ref={firstBarRef} className="first_bar"></div>
        <div ref={secondBarRef} className="second_bar"></div>
        <div ref={thirdBarRef} className="third_bar"></div>
      </div>
      
      <div ref={menuRef} className="menu">
        <div className="Work" onClick={(e) => handleNavigation(e, '/Work')}>
          <a href="/Work">Work</a>
        </div>
        <div className="About_me" onClick={(e) => handleNavigation(e, '/ComingSoon')}>
          <a href="/ComingSoon">About me</a>
        </div>
        <div className="Contact" onClick={(e) => handleNavigation(e, '/ComingSoon')}>
          <a href="/ComingSoon">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
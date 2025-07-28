import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import Lenis from 'lenis'
import { gsap } from 'gsap'

const Background = ({ activePage, cameraMode }) => {
  const canvasRef = useRef(null)
  const loaderRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const cameraGroupRef = useRef()
  const cameraRef = useRef()
  const isAnimatingRef = useRef(false)


  useEffect(() => {
    if (!canvasRef.current) return

    THREE.ColorManagement.enabled = false

    const parameters = {
      materialColor: '#ffffff'
    }

    /**
     * Base
     */
    const canvas_element = canvasRef.current
    const scene = new THREE.Scene()
    const objectDistance = 4

    /**
     * particles Front
     */
    const particlesCount = 1000
    const positions = new Float32Array(particlesCount * 3)

    for(let i = 0; i < particlesCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = objectDistance * 0.5 - Math.random() * objectDistance * 6
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      color: parameters.materialColor,
      sizeAttenuation: true,
      size: 0.01
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)

    /**
     * Particle Back
     */
    const particlesCountBack = 500
    const positionsBack = new Float32Array(particlesCountBack * 3)

    for(let i = 0; i < particlesCountBack; i++) {
        positionsBack[i * 3 + 0] = (Math.random() - 0.5) * 10
        positionsBack[i * 3 + 1] = objectDistance * 0.5 - Math.random() * objectDistance * 3
        positionsBack[i * 3 + 2] = (Math.random() + 1) * 10
    }

    const particlesGeometryBack = new THREE.BufferGeometry()
    particlesGeometryBack.setAttribute('position', new THREE.BufferAttribute(positionsBack, 3))

    const particlesBack = new THREE.Points(particlesGeometryBack, particlesMaterial)
    
    scene.add(particles, particlesBack)

    // L'overlay disparaît quand les particules sont chargées
    setIsLoaded(true)

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    const handleResize = () => {
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    window.addEventListener('resize', handleResize)

    /**
     * Camera
     */
    const cameraGroup = new THREE.Group()
    cameraGroupRef.current = cameraGroup
    scene.add(cameraGroup)
    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 7
    cameraGroup.add(camera)
    cameraRef.current = camera

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas_element,
      alpha: true
    })
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * scroll (Lenis)
     */
    let scrollY = window.scrollY
    const lenis = new Lenis()
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)

    /**
     * cursor
     */
    const cursor = { x: 0, y: 0 }
    const handleMouseMove = (event) => {
      cursor.x = event.clientX / sizes.width - 0.5
      cursor.y = event.clientY / sizes.height - 0.5
    }
    window.addEventListener('mousemove', handleMouseMove)

    /**
     * Animate
     */
    const clock = new THREE.Clock()
    let previousTime = 0
    let animationId
    const tick = (time) => {
      lenis.raf(time)

      const lenisScrollY = lenis.scroll
      const elapsedTime = clock.getElapsedTime()
      const deltatTime = elapsedTime - previousTime

      previousTime = elapsedTime

      // Ne met à jour la position Y que si on n'anime pas la rotation
      if (!isAnimatingRef.current) {
        camera.position.y = - lenisScrollY / sizes.height * objectDistance
      }

      const parallaxX = cursor.x * 0.5
      const parallaxY = - cursor.y * 0.5

      cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltatTime
      cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltatTime

      renderer.render(scene, camera)

      animationId = window.requestAnimationFrame(tick)

    }
    tick()

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      renderer.dispose()
    }
  }, [])

  // Animation de disparition de l'overlay quand isLoaded passe à true
  useEffect(() => {
    if (isLoaded && loaderRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out'
      })
    }
  }, [isLoaded])


// Animation pour Home et About : rotation + repositionnement
useEffect(() => {
  if (cameraRef.current && (activePage === 'Home' || activePage === 'About')) {
    isAnimatingRef.current = true;
    gsap.to(cameraRef.current.position, {
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        isAnimatingRef.current = false;
      }
    })
    gsap.to(cameraRef.current.rotation, {
      y: activePage === 'About' ? Math.PI : 0,
      duration: 1,
      ease: 'power2.inOut',
    })
  }
}, [activePage])

// Animation pour toutes les pages projets : juste Y (pas de rotation)
useEffect(() => {
  const projectPages = ['Flotteq', 'Room', 'Delegue', 'Heticverse', 'Wenanflemme']
  if (cameraRef.current && projectPages.includes(activePage)) {
    isAnimatingRef.current = true;
    gsap.to(cameraRef.current.position, {
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        isAnimatingRef.current = false;
      }
    })
    // Pas de rotation
  }
}, [activePage])

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 outline-none" />
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 w-full h-full bg-black pointer-events-none"
        style={{ opacity: 1, zIndex: 50, transition: 'opacity 1.2s cubic-bezier(0.77,0,0.18,1)' }}
      ></div>
    </>
  )
}

export default Background

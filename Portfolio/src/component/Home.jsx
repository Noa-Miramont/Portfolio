import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import "../style/Home.css"

const Home = ({ activePage, onHomeClick, onAboutClick, onFlotteqClick, onRoomClick, onDelegueClick, onHeticverseClick, onWenanflemmeClick }) => {
  const scrollTextRef = useRef(null)
  const leftBarRef = useRef(null)
  const rightBarRef = useRef(null)
  const mainTitleContainerRef = useRef(null)
  const hiRef = useRef(null)
  const subtitleRef = useRef(null)
  // Pour chaque lettre de "I'm Noa"
  const name = "Hi, I'm Noa"
  const nameLetterRefs = useRef([])
  nameLetterRefs.current = []
  const setNameLetterRef = (el, i) => {
    nameLetterRefs.current[i] = el
  }
  // Pour chaque mot du sous-titre
  const subtitle = "And I'm a creative dev"
  const subtitleWords = subtitle.split(' ')
  const subtitleWordRefs = useRef([])
  subtitleWordRefs.current = []
  const setSubtitleWordRef = (el, i) => {
    subtitleWordRefs.current[i] = el
  }
  const [hoverRoom, setHoverRoom] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [visibleProject, setVisibleProject] = useState(null)
  const videoRef = useRef(null)

  function playFirstSectionAnimations() {
    const tlTitle = gsap.timeline()
    tlTitle.fromTo(
      mainTitleContainerRef.current,
      { opacity: 0, x: -80, rotateX: 90 },
      {
        opacity: 1,
        x: 0,
        rotateX: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }
    )
    tlTitle.fromTo(
      subtitleWordRefs.current,
      { delay: 0.2, opacity: 0, yPercent: -100 },
      { delay: 0.2, opacity: 1, yPercent: 0, duration: 0.5, ease: "expo.out" },
      "+=0.1"
    )

    // Animation du scrollMessage après 4 secondes
    const tl = gsap.timeline({ delay: 3 })
    tl.to(scrollTextRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })
    tl.to([leftBarRef.current, rightBarRef.current], {
      scaleX: 1,
      duration: 1.2,
      ease: "power2.out",
    }, "-=0.1")
  }

  useEffect(() => {
            window.scrollTo(0, 0) // Scroll instantané
        }, [])

  useEffect(() => {
    playFirstSectionAnimations()
  }, [])

  // Animation GSAP pour la vidéo (entrée/sortie)
  useEffect(() => {
    if (!videoRef.current) return
    if (hoveredProject && hoveredProject === visibleProject) {
      // Animation d'entrée
      gsap.to(videoRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" })
    } else if (visibleProject) {
      // Animation de sortie
      gsap.to(videoRef.current, { opacity: 0, scale: 0.95, duration: 0.5, ease: "power2.in" })
    }
  }, [hoveredProject, visibleProject])

  // Gestion du changement de projet avec animation de sortie
  useEffect(() => {
    if (hoveredProject && visibleProject && hoveredProject !== visibleProject) {
      // On change de projet : on anime la sortie, puis on change la vidéo après l'animation
      const timeout = setTimeout(() => {
        setVisibleProject(hoveredProject)
      }, 350)
      return () => clearTimeout(timeout)
    }
    if (!hoveredProject && visibleProject) {
      // On quitte le hover : on anime la sortie, puis on retire la vidéo
      const timeout = setTimeout(() => {
        setVisibleProject(null)
      }, 350)
      return () => clearTimeout(timeout)
    }
    if (hoveredProject && !visibleProject) {
      // Premier hover : on affiche directement
      setVisibleProject(hoveredProject)
    }
  }, [hoveredProject, visibleProject])

  useEffect(() => {
    window.scrollTo(0, 0) // Scroll instantané
  }, [])

  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen relative px-4 sm:px-8 md:px-[5%]">
        <div className='flex flex-col items-center'>
          <h1 className="Titre relative z-10 text-[60px] md:text-[80px] lg:text-[100px] font-cabin font-normal mb-2 sm:mb-4 text-center">
            <span
              className="inline-block bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] bg-clip-text text-transparent"
              ref={mainTitleContainerRef}
            >
              {name}
            </span>
          </h1>
          <h2 className="text-white font-kalnia font-normal text-[24px] md:text-[32px] lg:text-[36.5px] uppercase text-center" ref={subtitleRef}>
            {subtitleWords.map((word, i) => (
              <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: 6 }}>
                <span
                  ref={el => setSubtitleWordRef(el, i)}
                  style={{ display: 'inline-block', opacity: 0 }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>

        <div className='flex flex-row items-center justify-center gap-[10px] absolute bottom-8 sm:bottom-[60px] md:bottom-[100px] left-1/2 -translate-x-1/2 w-full max-w-[90vw]'>
          <div className='h-[1px] w-[70px] md:w-[100px] bg-white scale-x-0 origin-center' ref={leftBarRef}></div>
            <p ref={scrollTextRef} className="text-white text-[11px] font-inter opacity-0 whitespace-nowrap">Scroll to see more</p>
          <div className='h-[1px] w-[70px] md:w-[100px] bg-white scale-x-0 origin-center' ref={rightBarRef}></div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center xl:px-[5%] gap-8 lg:gap-12 h-auto lg:h-screen lg:px-8 relative px-4 sm:px-8 md:px-[5%]">
        {/* Vidéo visible seulement sur desktop */}
        <div className="w-full lg:w-5/8 h-[250px] sm:h-[350px] lg:h-[500px] rounded-xl flex items-center bg-transparent justify-center relative hidden lg:flex">
          {visibleProject && (
            <video
              ref={videoRef}
              src={
                visibleProject === 'flotteq' ? '/videos/flotteq.mp4' :
                visibleProject === 'heticverse' ? '/videos/heticverse.mp4' :
                visibleProject === 'wenanflemme' ? '/videos/wenanflemme.mp4' :
                visibleProject === 'delegue' ? '/videos/delegue.mp4' :
                visibleProject === 'unity' ? '/videos/unity.mp4' :
                visibleProject === 'music' ? '/videos/musicplayer.mp4' :
                visibleProject === 'room' ? '/videos/room.mp4' :
                ''
              }
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl"
              style={{
                opacity: 0,
                transform: 'scale(0.95)',
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                transition: 'none'
              }}
            />
          )}
        </div>
        {/* Panel projets prend toute la largeur sous 1075px */}
        <div className="flex flex-col w-full lg:w-3/8 mt-8 lg:mt-0">
          {/* ... Les panels projets ... */}
          <div className='flex flex-col items-center justify-center border-t border-white py-[20px] w-full cursor-pointer group/row'
            onMouseEnter={() => setHoveredProject('flotteq')}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={onFlotteqClick}
          >
              <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-row items-center gap-0 relative overflow-hidden'>
                  <span className="arrow-wrapper block absolute left-0 top-2/2 -translate-y-1/2">
                    <svg
                      className="arrow-svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className='project-title text-white font-kalnia font-semibold text-xl uppercase pl-0 transition-all duration-500'>
                    FLOTTEQ
                  </h3>
                </div>
                <p className='text-white font-roboto font-extralight font- text-sm'>Front end - UI / UX design</p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center border-t border-white py-[20px] w-full cursor-pointer group/row'
              onMouseEnter={() => setHoveredProject('heticverse')}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={onHeticverseClick}
            >
              <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-row items-center gap-0 relative overflow-hidden'>
                  <span className="arrow-wrapper block absolute left-0 top-2/2 -translate-y-1/2">
                    <svg
                      className="arrow-svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className='project-title text-white font-kalnia font-semibold text-xl uppercase pl-0 transition-all duration-500'>
                    HETICVerse
                  </h3>
                </div>
                <p className='text-white font-roboto font-extralight font- text-sm'>Front end - UI / UX design</p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center border-t border-white py-[20px] w-full cursor-pointer group/row'
              onMouseEnter={() => setHoveredProject('wenanflemme')}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={onWenanflemmeClick}
            >
              <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-row items-center gap-0 relative overflow-hidden'>
                  <span className="arrow-wrapper block absolute left-0 top-2/2 -translate-y-1/2">
                    <svg
                      className="arrow-svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className='project-title text-white font-kalnia font-semibold text-xl uppercase pl-0 transition-all duration-500'>
                    WENANFLEMME
                  </h3>
                </div>
                <p className='text-white font-roboto font-extralight font- text-sm'>Front end - UI design</p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center border-t border-white py-[20px] w-full cursor-pointer group/row'
              onMouseEnter={() => setHoveredProject('delegue')}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={onDelegueClick}
            >
              <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-row items-center gap-0 relative overflow-hidden'>
                  <span className="arrow-wrapper block absolute left-0 top-2/2 -translate-y-1/2">
                    <svg
                      className="arrow-svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className='project-title text-white font-kalnia font-semibold text-xl uppercase pl-0 transition-all duration-500'>
                    DELEGUE
                  </h3>
                </div>
                <p className='text-white font-roboto font-extralight font- text-sm'>Front end</p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center border-t border-white py-[20px] w-full cursor-pointer group/row'
              onMouseEnter={() => setHoveredProject('unity')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-row items-center gap-0 relative overflow-hidden'>
                  <span className="arrow-wrapper block absolute left-0 top-2/2 -translate-y-1/2">
                    <svg
                      className="arrow-svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className='project-title text-white font-kalnia font-semibold text-xl uppercase pl-0 transition-all duration-500'>
                    UNITY GAME
                  </h3>
                </div>
                <p className='text-white font-roboto font-extralight font- text-sm'>Game dev</p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center border-t border-white py-[20px] w-full cursor-pointer group/row'
              onMouseEnter={() => setHoveredProject('music')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-row items-center gap-0 relative overflow-hidden'>
                  <span className="arrow-wrapper block absolute left-0 top-2/2 -translate-y-1/2">
                    <svg
                      className="arrow-svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className='project-title text-white font-kalnia font-semibold text-xl uppercase pl-0 transition-all duration-500'>
                    MUSIC PLAYER
                  </h3>
                </div>
                <p className='text-white font-roboto font-extralight font- text-sm'>UI design</p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center border-t border-white py-[20px] w-full cursor-pointer group/row'
              onMouseEnter={() => setHoveredProject('room')}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={onRoomClick}
            >
              <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-row items-center gap-0 relative overflow-hidden'>
                  <span className="arrow-wrapper block absolute left-0 top-2/2 -translate-y-1/2">
                    <svg
                      className="arrow-svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className='project-title text-white font-kalnia font-semibold text-xl uppercase pl-0 transition-all duration-500'>
                    ROOM
                  </h3>
                </div>
                <p className='text-white font-roboto font-extralight font- text-sm'>Front end</p>
              </div>
            </div>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center h-screen relative'>
          <div className='flex flex-col'>
            <h5 className='text-white font-kalnia font-normal text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] uppercase'>
              Have a project in mind ?
            </h5>
            <h3 className='Titre font-roboto font-normal text-[75px] sm:text-[75px] md:text-[120px] lg:text-[150px] bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] bg-clip-text text-transparent uppercase mt-3 text-center leading-none'>
              LET'S TALK
            </h3>
          </div>

          <div className='absolute top-[95%] w-[95%] flex justify-between'>
            <div className='text-white font-kalnia flex flex-row gap-5'>
              <div className="flex flex-row items-center gap-1 relative group">
                <svg
                  className="self-center w-[14px] h-[14px] sm:w[18px] sm:h[18px] md:w[20px] md:h[20px]"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="rotate(-45)"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <a className="text-[12px] sm:text-[14px] md:text-[16px]" href="https://www.linkedin.com/in/noamiramont/" target='_blank'>Linkedin</a>
                <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] transition-all duration-600 group-hover:w-full"></span>
              </div>
              <div className="flex flex-row items-center gap-1 relative group">
                <svg
                  className="self-center w-[14px] h-[14px] sm:w[18px] sm:h[18px] md:w[20px] md:h[20px]"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: 'rotate(-45deg)' }}
                  >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <a className="text-[12px] sm:text-[14px] md:text-[16px]" href="https://github.com/Noa-Miramont" target='_blank'>Github</a>
                <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] transition-all duration-600 group-hover:w-full"></span>
              </div>
              <div className="flex flex-row gap-1 items-center relative group">
                <svg
                  className="self-center w-[14px] h-[14px] sm:w[18px] sm:h[18px] md:w[20px] md:h[20px]"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="rotate(-45)"
                  style={{ transform: 'rotate(-45deg) translateY(1.5px)' }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <a className="text-[12px] sm:text-[14px] md:text-[16px]" href="/CVNoaMiramont.pdf" download >Download my CV</a>
                <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] transition-all duration-600 group-hover:w-full"></span>
              </div>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center text-white font-kalnia relative group">
              <svg
                className="self-center w-[14px] h-[14px] md:w[20px] md:h[20px]"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: 'rotate(-45deg) translateY(2px)' }}
                >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <a
                href="mailto:noamiramont@gmail.com"
                target='_blank'
                className=" text-[12px] sm:text-[14px] md:text-[16px]"
              >
                noamiramont@gmail.com
              </a>
              <span
                className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] transition-all duration-800 group-hover:w-full"
              ></span>
            </div>
          </div>
      </section>
    </>
  )
}

export default Home
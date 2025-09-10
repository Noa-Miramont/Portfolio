import React, { useEffect } from "react";


const LesMauvaises = () => {

  useEffect(() => {
          window.scrollTo(0, 0) // Scroll instantané
      }, [])

  return (
    
    <div className="min-h-screen w-full flex flex-col items-center bg-transparent px-10">
      <section className="flex flex-col items-center justify-center h-screen relative px-4 sm:px-8 md:px-[5%]">
        <h1 className="Titre z-10 text-[60px] md:text-[80px] lg:text-[100px] text-white font-kalnia font-light mb-2 sm:mb-4 text-center">
          LES MAUVAISES
        </h1>
      </section>


      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-7 gap-8 mb-25 mt-25 px-0 sm:px-0 md:px-0">
        <div className="flex flex-col gap-x-2 md:col-span-2">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Date</div>
              <div className="text-white font-roboto font-extralight text-base">summer 2025</div>
            </div>
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Technology</div>
              <div className="text-white font-roboto font-extralight text-base">Next.Ts<br/>R3F</div><br/><div>Figma</div>
            </div>
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Categorie</div>
              <div className="text-white font-roboto font-extralight text-base">Fullstack<br />Creative dev<br/>UI / UX Design</div>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col justify-start md:col-span-5 mt-8 ml-0 md:mt-0 md:ml-20">
          <div className="font-kalnia text-2xl text-white mb-2">Description</div>
          <div className="text-white font-roboto font-extralight text-base md:text-base leading-relaxed">
          <span className="font-extralight">The project consisted of creating a </span><span className="font-medium">single-page website</span> <span className="font-extralight">featuring an</span> <span className="font-medium">interactive carousel</span><span className="font-extralight"> designed as a portfolio. Developed as part of a technical test for the agency Les Mauvaises, the goal was to deliver a</span> <span className="font-medium">clear, fluid </span> <span className="font-extralight">, and </span> <span className="font-medium">visually engaging experience</span> <span className="font-extralight"> that highlighted different works in an immersive yet organized way.</span>
            <br /><br />
            <span className="font-extralight">I focused on building an intuitive, and </span> <span className="font-medium">immersive design </span> <span className="font-extralight">while enhancing the experience with</span> <span className="font-medium">scroll-based and mouse-move animations</span><span className="font-extralight"> that influenced</span> <span className="font-medium"> the motion of a 3D object</span> <span className="font-extralight">I also implemented the</span> <span className="font-medium"> back-end connection</span><span className="font-extralight">integrating</span><span className="font-medium"> GraphQL queries</span> <span className="font-extralight">to fetch project data and performing</span><span className="font-medium"> data mapping</span><span className="font-extralight">to dynamically feed the carousel. This project gave me the opportunity to merge design sensibility, interactivity, and technical implementation.</span>
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col items-center gap-16 pb-24">
        <div className="w-full max-w-5xl flex flex-col items-center">
          <h3 className="text-white font-kalnia text-lg md:text-xl mb-2 tracking-widest">DEMO</h3>
          <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <video
                src="/videos/les-mauvaises.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
          </div>
        </div>
        
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/img/DesignEssai1.png"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">

            <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/img/DesignEssai2.png"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/img/DesignEssai3.png"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">

            <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/img/DesignEssai4.png"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-5xl flex flex-col items-center">
          <div className="w-full bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <img
                src="/img/DesignEssai5.png"
                className="w-full  rounded-xl"
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LesMauvaises;
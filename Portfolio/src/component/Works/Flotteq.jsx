import React, { useEffect } from "react";


const Flotteq = () => {

  useEffect(() => {
          window.scrollTo(0, 0) // Scroll instantané
      }, [])

  return (
    
    <div className="min-h-screen w-full flex flex-col items-center bg-transparent px-10">
      <section className="flex flex-col items-center justify-center h-screen relative px-4 sm:px-8 md:px-[5%]">
        <h1 className="Titre z-10 text-[60px] md:text-[80px] lg:text-[100px] text-white font-kalnia font-light mb-2 sm:mb-4 text-center">
          FLOTTEQ
        </h1>
      </section>


      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-7 gap-8 mb-25 mt-25 px-0 sm:px-0 md:px-0">
        <div className="flex flex-col gap-x-2 md:col-span-2">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Date</div>
              <div className="text-white font-roboto font-extralight text-base">Summer 2025</div>
            </div>
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Technology</div>
              <div className="text-white font-roboto font-extralight text-base">React TS<br/>Figma</div>
            </div>
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Categorie</div>
              <div className="text-white font-roboto font-extralight text-base">Front end<br/>UI Design</div>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col justify-start md:col-span-5 mt-8 ml-0 md:mt-0 md:ml-20">
          <div className="font-kalnia text-2xl text-white mb-2">Description</div>
          <div className="text-white font-roboto font-extralight text-base md:text-base leading-relaxed">
            <span className="font-normal">Flotteq</span> is the project I'm currently working on during my <span className="font-medium">internship</span>. It's a modern fleet management platform designed to help companies monitor and <span className="font-medium">optimize their vehicle operations</span>.<br/><br/>
            My focus is on <span className="font-medium">designing and developing intuitive user interfaces</span>, improving <span className="font-medium">user experience</span>, and contributing to the <span className="font-medium">front-end architecture</span>. I'm involved in creating clean, <span className="font-medium">responsive components</span> and refining <span className="font-medium">visual interactions</span> to ensure the platform is user-friendly.
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col items-center gap-16 pb-24">
        <div className="w-full max-w-5xl flex flex-col items-center">
          <div className="text-white font-kalnia text-lg md:text-xl mb-2 tracking-widest">DEMO</div>
          <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <video
                src="/videos/flotteqMain.mp4"
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
            <div className="text-white font-kalnia text-base md:text-lg mb-2 tracking-widest">OLD LOGIN PAGE</div>
            <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/img/FlotteqOld.png"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-white font-kalnia text-base md:text-lg mb-2 tracking-widest">NEW LOGIN PAGE</div>
            <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
              <video
                src="/videos/flotteqNew.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flotteq;
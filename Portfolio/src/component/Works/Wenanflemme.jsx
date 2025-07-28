import React, { useEffect } from "react";


const Wenanflemme = () => {

  useEffect(() => {
          window.scrollTo(0, 0) // Scroll instantané
      }, [])

  return (
    
    <div className="min-h-screen w-full flex flex-col items-center bg-transparent px-10">
      <section className="flex flex-col items-center justify-center h-screen relative px-4 sm:px-8 md:px-[5%]">
        <h1 className="Titre z-10 text-[60px] md:text-[80px] lg:text-[100px] text-white font-kalnia font-light mb-2 sm:mb-4 text-center">
          WENANFLEMME
        </h1>
      </section>


      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-7 gap-8 mb-25 mt-25 px-0 sm:px-0 md:px-0">
        <div className="flex flex-col gap-x-2 md:col-span-2">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Date</div>
              <div className="text-white font-roboto font-extralight text-base">Spring 2025</div>
            </div>
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Technology</div>
              <div className="text-white font-roboto font-extralight text-base">React JS<br/>PH<br/>Figma</div>
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
            <span className="font-normal">Wenanflemme</span> is a <span className="font-medium">file-sharing web project</span> I worked on during my studies at <span className="font-medium">Hetic</span>.<br/>
            The goal was to create a simple platform where users can <span className="font-medium">upload files or folders</span>, send them by  <span className="font-medium">email</span> or <span className="font-medium">generate a download link</span>, and <span className="font-medium">manage their transfers</span> from a personal space.<br/><br/>
            I was in charge of the <span className="font-medium">design</span> and <span className="font-medium">front-end development</span> , focusing on clarity, <span className="font-medium">ease of use,</span>, and a light, playful tone. The project was developed in collaboration with <span className="font-medium">Hugo Antonini-Lounes</span>. It was a great opportunity to build a complete product from scratch while paying attention to both user experience and visual identity.
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col items-center gap-16 pb-24">
        <div className="w-full max-w-5xl flex flex-col items-center">
          <div className="text-white font-kalnia text-lg md:text-xl mb-2 tracking-widest">DEMO</div>
          <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <video
                src="/videos/wenanflemme.mp4"
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
  )
}

export default Wenanflemme;
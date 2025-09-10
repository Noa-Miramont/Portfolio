import React, { useEffect } from "react";


const Delegue = () => {

  useEffect(() => {
          window.scrollTo(0, 0) // Scroll instantané
      }, [])

  return (
    
    <div className="min-h-screen w-full flex flex-col items-center bg-transparent px-10">
      <section className="flex flex-col items-center justify-center h-screen relative px-4 sm:px-8 md:px-[5%]">
        <h1 className="Titre z-10 text-[60px] md:text-[80px] lg:text-[100px] text-white font-kalnia font-light mb-2 sm:mb-4 text-center">
          DELEGUE
        </h1>
      </section>


      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-7 gap-8 mb-25 mt-25 px-0 sm:px-0 md:px-0">
        <div className="flex flex-col gap-x-2 md:col-span-2">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Date</div>
              <div className="text-white font-roboto font-extralight text-base">autumn 2024</div>
            </div>
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Technology</div>
              <div className="text-white font-roboto font-extralight text-base">React.js<br/>Three.js</div>
            </div>
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Categorie</div>
              <div className="text-white font-roboto font-extralight text-base">Front end<br/>3D Design</div>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col justify-start md:col-span-5 mt-8 ml-0 md:mt-0 md:ml-20">
          <div className="font-kalnia text-2xl text-white mb-2">Description</div>
          <div className="text-white font-roboto font-extralight text-base md:text-base leading-relaxed">
            <span className="font-medium">Delugue</span> <span className="font-extralight">is a presentation I developed with a classmate as part of my campaign to become delegates for our promotion at</span> <span className="font-medium">HETIC</span><span className="font-extralight">. The site was designed to serve as a</span> <span className="font-medium">visual and interactive support</span> <span className="font-extralight">for our speech, helping structure and enhance our presentation during the vote.</span>
            <br /><br />
            <span className="font-extralight">We built the site using</span> <span className="font-medium">3D web technologies</span> <span className="font-extralight">and a playful yet polished tone to engage our audience. The presentation covered our backgrounds, responsibilities, and ideas for improving student life. This project allowed me to combine storytelling,</span> <span className="font-medium">3D design</span><span className="font-extralight">, and</span> <span className="font-medium">front-end development</span> <span className="font-extralight">to deliver a unique and memorable pitch, while showcasing both our</span> <span className="font-medium">technical and creative abilities</span><span className="font-extralight">.</span>
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col items-center gap-16 pb-24">
        <div className="w-full max-w-5xl flex flex-col items-center">
          <h3 className="text-white font-kalnia text-lg md:text-xl mb-2 tracking-widest">DEMO</h3>
          <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <video
                src="/videos/delegue.mp4"
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
                src="/img/DelegueRoad2.png"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">

            <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/img/DelegueCar.png"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-5xl flex flex-col items-center">
          <div className="w-full bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <img
                src="/img/DelegueRoad.png"
                className="w-full  rounded-xl"
              />
          </div>
        </div>
        <div className="w-full max-w-5xl flex flex-col items-center">
          <h3 className="text-white font-kalnia text-lg md:text-xl mb-2 tracking-widest">ENDING</h3>
          <div className="w-full bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <video
                src="/videos/delegueEnding.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full rounded-xl"
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delegue;
import React, { useEffect } from "react";


const Room = () => {

  useEffect(() => {
          window.scrollTo(0, 0) // Scroll instantané
      }, [])

  return (
    
    <div className="min-h-screen w-full flex flex-col items-center bg-transparent px-10">
      <section className="flex flex-col items-center justify-center h-screen relative px-4 sm:px-8 md:px-[5%]">
        <h1 className="Titre z-10 text-[60px] md:text-[80px] lg:text-[100px] text-white font-kalnia font-light mb-2 sm:mb-4 text-center">
          ROOM
        </h1>
      </section>


      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-7 gap-8 mb-25 mt-25 px-0 sm:px-0 md:px-0">
        <div className="flex flex-col gap-x-2 md:col-span-2">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Date</div>
              <div className="text-white font-roboto font-extralight text-base">Winter 2024</div>
            </div>
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Technology</div>
              <div className="text-white font-roboto font-extralight text-base">Threejs<br/>Blender</div>
            </div>
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Categorie</div>
              <div className="text-white font-roboto font-extralight text-base">Front end<br/></div>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col justify-start md:col-span-5 mt-8 ml-0 md:mt-0 md:ml-20">
          <div className="font-kalnia text-2xl text-white mb-2">Description</div>
          <div className="text-white font-roboto font-extralight text-base md:text-base leading-relaxed">
            <span className="font-medium">Room</span> <span className="font-extralight">is the</span> <span className="font-medium">Landing page</span> <span className="font-extralight">I developed as the introduction to my</span> <span className="font-medium">very first portfolio</span><span className="font-extralight">. The project features a</span> <span className="font-medium">3D scene</span> <span className="font-extralight">built with</span> <span className="font-medium">Three.js</span><span className="font-extralight">, designed to immerse the user in a digital space that reflects my creative identity and technical interests.</span>
            <br /><br />
            <span className="font-extralight">The page includes imported</span> <span className="font-medium">3D models</span><span className="font-extralight">,</span> <span className="font-medium">smooth animations</span><span className="font-extralight">, and</span> <span className="font-medium">interactive elements</span> <span className="font-extralight">that respond to user input. Each object in the room acts as a</span> <span className="font-medium">gateway</span> <span className="font-extralight">to different parts of the site, creating a</span> <span className="font-medium">exploratory experience</span><span className="font-extralight">.</span>
            <br />
            <span className="font-extralight">This project allowed me to experiment with</span> <span className="font-medium">WebGL</span><span className="font-extralight">,</span> <span className="font-medium">real-time rendering</span><span className="font-extralight">, and</span> <span className="font-medium">interactive design</span><span className="font-extralight">, while building a unique entry point to my portfolio.</span>
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col items-center gap-16 pb-24">
        <div className="w-full max-w-5xl flex flex-col items-center">
          <div className="text-white font-kalnia text-lg md:text-xl mb-2 tracking-widest">DEMO</div>
          <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <video
                src="/videos/room.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
          </div>
        </div>
        <div className="w-full max-w-5xl flex flex-col items-center">
          <div className="text-white font-kalnia text-lg md:text-xl mb-2 tracking-widest">VIEW FROM BLENDER</div>
          <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <img
                src="/img/RoomView.png"
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
                src="/img/RoomView2.png"
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/img/RoomView3.png"
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-5xl flex flex-col items-center">
          <div className="text-white font-kalnia text-lg md:text-xl mb-2 tracking-widest">UV UNWRAPPING</div>
          <div className="w-full bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <img
                src="/img/RoomTexture.png"
                className="w-full h-full object-cover rounded-xl"
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room;
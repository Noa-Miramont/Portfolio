import React, { useEffect } from "react";


const Heticverse = () => {

  useEffect(() => {
          window.scrollTo(0, 0) // Scroll instantané
      }, [])

  return (
    
    <div className="min-h-screen w-full flex flex-col items-center bg-transparent px-10">
      <section className="flex flex-col items-center justify-center h-screen relative px-4 sm:px-8 md:px-[5%]">
        <h1 className="Titre z-10 text-[60px] md:text-[80px] lg:text-[100px] text-white font-kalnia font-light mb-2 sm:mb-4 text-center">
          HETICVERSE
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
              <div className="text-white font-roboto font-extralight text-base">Next.js<br/>Strapi<br/>Figma</div>
            </div>
            <div>
              <div className="font-kalnia text-2xl text-white mb-1">Categorie</div>
              <div className="text-white font-roboto font-extralight text-base">Front end<br/>UI/UX Design</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-start md:col-span-5 mt-8 ml-0 md:mt-0 md:ml-20">
          <div className="font-kalnia text-2xl text-white mb-2">Description</div>
          <div className="text-white font-roboto font-extralight text-base md:text-base leading-relaxed">
            <span className="font-normal">Heticverse</span> is a social platform inspired by Reddit, developed as our <span className="font-medium">end-of-year project</span> during the first year of my Bachelor's program at <span className="font-medium">Hetic</span>. The goal was to create a <span className="font-medium">community-based</span> space where users can <span className="font-medium">join topics</span>, <span className="font-medium">share posts</span>, <span className="font-medium">upvote</span> or <span className="font-medium">downvote</span> content, and browse a dynamic, <span className="font-medium">personalized feed</span>.<br/><br/>
            I worked as the <span className="font-medium">UI/UX designer and front-end developer</span>, collaborating closely with <span className="font-medium">Cherif Kamel</span>, <span className="font-medium">Youva Houch</span> and <span className="font-medium">Loai Elattar</span>. This project allowed us to apply what we learned throughout the year : combining <span className="font-medium">interface design, user flow thinking</span>, and development into a fully functional product.
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col items-center gap-16 pb-24">
        <div className="w-full max-w-5xl flex flex-col items-center">
          <div className="text-white font-kalnia text-lg md:text-xl mb-2 tracking-widest">DEMO</div>
          <div className="w-full aspect-video bg-[#222] rounded-xl flex items-center justify-center overflow-hidden">
            <video
                src="/videos/heticverse.mp4"
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

export default Heticverse;
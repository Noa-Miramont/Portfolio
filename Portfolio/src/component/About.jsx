import React, { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0) // Scroll instantané
    }, [])

    return(
        <div>
            <section className="flex flex-col items-center justify-center h-screen relative px-4 sm:px-8 md:px-[5%]">
                <h1 className="Titre z-10 text-[60px] md:text-[80px] lg:text-[100px] text-white font-kalnia font-light mb-2 sm:mb-4 text-center"> ABOUT ME</h1>
            </section>

            <section className="flex flex-col items-center justify-center gap-[75px] h-screen relative px-4 sm:px-8 md:px-[5%]">
                <div className="self-start ml-[200px]">
                    <h2 className="text-white font-kalnia font-light text-[40px] md:text-[50pxpx] lg:text-[75px] ">WHO AM I?</h2>
                </div>
                <div className="self-end mr-[135px] w-[600px]">
                    <p className="text-white font-roboto font-thin text-[12pxpx] md:text-[14pxpxpx] lg:text-[16px]">Hello! I’m <span className="font-medium">Noa Miramont</span>, a <span className="font-medium">creative developer</span> based in <span className="font-medium">Paris</span>, passionate about crafting engaging digital experiences where <span className="font-medium">design</span> and <span className="font-medium">technology</span> meet in unexpected <br/><br/>

                        I’m currently in my second year of a <span className="font-medium">Bachelor’s degree</span> in <span className="font-medium">Web Development</span> at <span className="font-medium">HETIC</span> and expanding my skills as a <span className="font-medium">UI designer and frontend dev</span> intern at Flotteq.<br/>
                        With a strong focus on <span className="font-medium">interactive development</span> and a growing expertise in technologies like <span className="font-medium">WebGL</span>, I thrive on turning complex ideas into intuitive, immersive interfaces.<br/><br/>

                        Beyond the screen, I’m an avid explorer of cinema art and interactive media, sources of inspiration that often find their way back into my work. I’m always <span className="font-medium">open to new collaborations</span>, exciting challenges, or simply exchanging ideas with like-minded creatives. And when I’m not busy coding, you’ll probably find me refueling on <span className="font-medium">sushi</span> or go for a walk with my lovely dog.<br/>
                        If you’d like to <span className="font-medium">work together</span> or just say hello, <span className="font-medium">feel free to reach out !</span></p>
                </div>
            </section>

        </div>
    )
}

export default About
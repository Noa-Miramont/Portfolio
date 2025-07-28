import React, { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
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
                    <p className="text-white font-roboto font-thin text-[12px] md:text-[14px] lg:text-[16px]">Hello! I’m <span className="font-medium">Noa Miramont</span>, a <span className="font-medium">creative developer</span> based in <span className="font-medium">Paris</span>, passionate about crafting engaging digital experiences where <span className="font-medium">design</span> and <span className="font-medium">technology</span> meet in unexpected <br/><br/>

                        I’m currently in my second year of a <span className="font-medium">Bachelor’s degree</span> in <span className="font-medium">Web Development</span> at <span className="font-medium">HETIC</span> and expanding my skills as a <span className="font-medium">UI designer and frontend dev</span> intern at Flotteq.<br/>
                        With a strong focus on <span className="font-medium">interactive development</span> and a growing expertise in technologies like <span className="font-medium">WebGL</span>, I thrive on turning complex ideas into intuitive, immersive interfaces.<br/><br/>

                        Beyond the screen, I’m an avid explorer of cinema art and interactive media, sources of inspiration that often find their way back into my work. I’m always <span className="font-medium">open to new collaborations</span>, exciting challenges, or simply exchanging ideas with like-minded creatives. And when I’m not busy coding, you’ll probably find me refueling on <span className="font-medium">sushi</span> or go for a walk with my lovely dog.<br/>
                        If you’d like to <span className="font-medium">work together</span> or just say hello, <span className="font-medium">feel free to reach out !</span></p>
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
                    <a className="text-[12px] sm:text-[14px] md:text-[16px]" href="https://www.noamiramont.com/css/img/picto-quiz.png" target='_blank'>Download my CV</a>
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

        </div>
    )
}

export default About
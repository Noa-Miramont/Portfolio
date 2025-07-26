import React from 'react'

const Header = ({ activePage, onHomeClick, onAboutClick }) => {

  return (
    <header>
      <nav className="flex flex-row fixed justify-between w-full mix-blend-exclusion z-10 p-5">        

        <a className="" href="_blank">
          <img src="/icons/NM_logo.svg" className='h-[20px]'/>
        </a>

        <div className='flex row gap-[35px]'>
          <button
            className="relative group text-base mx-2 cursor-pointer text-white transition-colors duration-500 overflow-hidden"
            onClick={onHomeClick}
          >
            <span className="relative z-10">Home</span>
            <span
              className={`absolute left-0 top-0 w-full h-full bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] bg-clip-text text-transparent pointer-events-none transition-opacity duration-500 select-none z-20 ${activePage === 'Home' ? 'opacity-100' : 'opacity-0'}`}
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Home
            </span>
            <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] transition-all duration-500 group-hover:w-full"></span>
          </button>
          <button
            className="relative group text-base mx-2 cursor-pointer text-white transition-colors duration-500 overflow-hidden"
            onClick={onAboutClick}
          >
            <span className="relative z-10">About</span>
            <span
              className={`absolute left-0 top-0 w-full h-full bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] bg-clip-text text-transparent pointer-events-none transition-opacity duration-500 select-none z-20 ${activePage === 'About' ? 'opacity-100' : 'opacity-0'}`}
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              About
            </span>
            <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] transition-all duration-500 group-hover:w-full"></span>
          </button>
          <a className="relative group text-white text-base mx-2 " href="mailto:noamiramont@gmail.com" target='_blank'>
            Contact
            <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>
      </nav>
      
    </header>
  )
}

export default Header
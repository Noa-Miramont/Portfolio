import React from 'react'

const Header = () => {

  return (
    <header>
      <nav className="flex flex-row fixed justify-between w-full mix-blend-exclusion z-10 p-5">        

        <a className="" href="">
          <img src="/icons/NM_logo.svg" className='h-[20px]'/>
        </a>

        <div className='flex row gap-[35px]'>
          <a className="relative group  text-base mx-2 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] bg-clip-text text-transparent" href="">
            Home
            <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a className="relative group text-white text-base mx-2" href="">
            About
            <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a className="relative group text-white text-base mx-2" href="mailto:noamiramont@gmail.com" target='_blank'>
            Contact
            <span className="absolute left-0 -bottom-px h-px w-0 bg-gradient-to-r from-[#E7B2AB] to-[#7B83CA] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>
      </nav>
      
    </header>
  )
}

export default Header
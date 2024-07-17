import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-3 bg-white">
       <div className=" flex text-xl">
        {['arish-icon-logo'].map((path) => {
          return (
            <div key={path}>
              <Image src={`/${path}.png`}
                alt="Logo" width={100} height={100} />
            </div>
          )
        })}

        </div> 
     
      
        <div className="flex md:hidden">
          <button id="hamburger">
            <Image className="toggle block" alt='logo' src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
            <Image className="toggle hidden" alt='image' src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
          </button>
        </div>
        <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none text-black">
          <a href="#home" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Home
          </a>
          <a href="#services" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">About us form
          </a>
          <a href="#aboutus" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Products
          </a>
          <a href="#gallery" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Quality-Assurance
          </a>
          <a href="#contactUs" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Gallery
          </a>
          <a href="#contactUs" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Events
          </a>
        </div>

    
      
      </nav>
    </div>
  )
}

export default Navbar

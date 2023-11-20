'use client'

import React from 'react'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {useState } from 'react'
import { Link } from 'react-scroll';

const PageHeader = () => {
// Responsive 
const [menuIcon, setMenuIcon] = useState ( false );
const smallNavbar = () => 
( 
    setMenuIcon( !menuIcon )
);


  return (
    <div className='flex w-full h-24 px-8 py-2 font-courier'>
        <nav className='w-fill h-fill flex flex-wrap items-center sm:justify-between gap-8'>
          {/* Image Top Left */}
          <div>
              <a href='/' onClick={smallNavbar} className="flex items-center">
                  <div className='w-20'>
                      <Image 
                          src='/assets/Logo1.png'
                          alt=""
                          width={750}
                          height={500}/>
                  </div>
              </a>
          </div>

          {/* Big Screen Navbar */}
          <ul className='hidden md:flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0'>
              <li >
                  <Link href="/" activeClass="active" spy={true} to="Landing" smooth={true} offset={0} duration={1000} 
                  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0" aria-current="page">
                      Home
                  </Link>
              </li>
              <li >
                  <Link href="/" activeClass="active" spy={true} to="About" smooth={true} offset={0} duration={1000} 
                  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">
                      About Us
                  </Link>
              </li>
              <li >
                  <Link href="/" activeClass="active" spy={true} to="Service" smooth={true} offset={0} duration={1000} 
                  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">
                      Services
                  </Link>
              </li>
              <li >
                  <Link href="/" activeClass="active" spy={true} to="Companies" smooth={true} offset={0} duration={1000} 
                  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">
                      Our Companies
                  </Link>
              </li>
              <li >
                  <Link href="/" activeClass="active" spy={true} to="VissionMission" smooth={true} offset={0} duration={1000} 
                  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">
                      Vision & Mission
                  </Link>
              </li>
          </ul>

          {/* Small screen */}
          <div onClick={smallNavbar} className='flex md:hidden'>
              {menuIcon ? 
                  (<AiOutlineClose size={25} className='text-black' />) 
                  : 
                  (<AiOutlineMenu size={25} className='text-black' />)}
          </div>

          <div className={menuIcon ? 
              'md:hidden absolute z-20 top-24 right-0 bottom-0 left-0 flex justify-center items-center w-full h-fill text-white ease-in duration-300' 
              : 
              'md:hidden absolute z-20 top-24 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-fill  text-white text-center ease-in duration-300'
          }>

              {/* Links */}
              <div className='w-full h-full flex justify-center items-center bg-black bg-opacity-70'>
                 
                  <ul className='text-center py space-y-10'>
                      <li >
                          <Link href="/" onClick={smallNavbar} activeClass="active" spy={true} to="Landing" smooth={true} offset={0} duration={1000} 
                          className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">
                              Home
                          </Link>
                      </li>
                      <li >
                          <Link href="/" onClick={smallNavbar} activeClass="active" spy={true} to="About" smooth={true} offset={0} duration={1000} 
                          className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">
                              About Us
                          </Link>
                      </li>
                      <li >
                          <Link href="/" onClick={smallNavbar} activeClass="active" spy={true} to="Service" smooth={true} offset={0} duration={1000} 
                          className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">
                              Services
                          </Link>
                      </li>
                      <li >
                          <Link href="/" onClick={smallNavbar} activeClass="active" spy={true} to="Companies" smooth={true} offset={0} duration={1000} 
                          className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">
                              Our Companies
                          </Link>
                      </li>
                      <li >
                          <Link href="/" onClick={smallNavbar} activeClass="active" spy={true} to="VissionMission" smooth={true} offset={0} duration={1000} 
                          className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:bg-opacity-30 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0">
                              Vision & Mission
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
    </div>
  )
}

export default PageHeader
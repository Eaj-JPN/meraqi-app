'use client'

import React from 'react'
import Link from 'next/link'

const PageFooter = () => {
  return (
    <div>
    {/* Footer */}
        <section className='h-32 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <div className='w-11/12 h-16 flex justify-center items-center text-white'>

            <div className='text-xs font-bold md:font-normal md:text-sm lg:text-xl text-center p-2'>
              © 2023  meraqi
            </div>

            <div>|</div>


            <div className='text-xs font-bold md:font-normal md:text-sm lg:text-xl text-center p-2'>
              Terms of Service
            </div>

            <div>|</div>


            <Link href='#' className='text-xs font-bold md:font-normal md:text-sm lg:text-xl text-center p-2 hover:underline'>
              Contact
            </Link>

            <div>|</div>


            <Link href='#' className='text-xs font-bold md:font-normal md:text-sm lg:text-xl text-center p-2 hover:underline'>
              Instagram
            </Link>

            <div>|</div>


            <Link href='#' className='text-xs font-bold md:font-normal md:text-sm lg:text-xl text-center p-2 hover:underline'>
              Facebook
            </Link>

            <div>|</div>

            <Link href='#' className='text-xs font-bold md:font-normal md:text-sm lg:text-xl text-center p-2 hover:underline'>
              Twitter
            </Link>

          </div>
        </section>
    </div>
  )
}

export default PageFooter
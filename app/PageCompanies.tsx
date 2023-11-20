import React from 'react'
import Image from 'next/image'

const PageCompanies = () => {
  return (
    <div className="font-courier">
     {/* Companies */}
        <section id='Companies' className='min-h-screen h-fit '>
          <div className='min-h-screen h-fit flex flex-col justify-center items-center'>

            {/* Heading */}
            <h1 className='text-6xl lg:text-8xl font-bold md:font-normal pb-16 p-8 text-center'>
              Our Companies
            </h1>

            {/* Logo Grid */}
            <div className='grid grid-cols-2 grid-rows-4 lg:grid-cols-7 lg:grid-rows-1 gap-4 gap-y-8 w-11/12 lg:h-64 p-8 pb-16 place-items-center'>
              {/* Logo */}
              <div className='w-24 md:w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-24 md:w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-24 md:w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-24 md:w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-24 md:w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-24 md:w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-24 md:w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>
              

            </div>

          </div>
        </section>
    </div>
  )
}

export default PageCompanies
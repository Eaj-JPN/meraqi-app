import React from 'react'
import Image from 'next/image'

const PageCompanies = () => {
  return (
    <div>
     {/* Companies */}
        <section id='Companies' className='min-h-screen h-fit bg-yellow-200 bg-opacity-20'>
          <div className='min-h-screen h-fit flex flex-col justify-center items-center'>

            {/* Heading */}
            <h1 className='text-8xl pb-16 p-8 text-center'>
              Our Companies
            </h1>

            {/* Logo Grid */}
            <div className='grid grid-cols-2 grid-rows-4 lg:grid-cols-7 lg:grid-rows-1 gap-4 w-11/12 lg:h-64 p-8 pb-16 place-items-center'>
              {/* Logo */}
              <div className='w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-48 '>
                <Image 
                    src='/assets/Logo1.png'
                    alt=""
                    width={750}
                    height={500}/>
              </div>

              {/* Logo */}
              <div className='w-48 '>
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
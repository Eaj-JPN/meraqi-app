import React from 'react'

const PageVision = () => {
  return (
    <div>
    {/* Vision Mission */}
        <section id='VissionMission' className='min-h-screen h-fit bg-black bg-opacity-20 flex'>

          {/* List */}
          <div className='min-h-screen h-fit w-6/12 flex justify-right items-center pl-16 p-8'>
            <ul>
              {/* List Item */}
              <li className='pb-16 w-4/5 text-right float-right'>
                <h1 className='text-6xl font-bold pb-2'>
                  Vision
                </h1>
                <p className='w-full lg:w-2/3 float-right '> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus mi et ante faucibus rutrum. Sed et risus porta, finibus leo vel, elementum leo. Nunc ullamcorper hendrerit nisl, non pulvinar orci.
                </p>
              </li>

              {/* List Item */}
              <li className='pb-10 w-4/5 text-right float-right'>
                <h1 className='text-6xl font-bold pb-2'>
                  Misiion
                </h1>
                <p className='w-full lg:w-2/3 float-right '> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus mi et ante faucibus rutrum. Sed et risus porta, finibus leo vel, elementum leo. Nunc ullamcorper hendrerit nisl, non pulvinar orci.
                </p>
              </li>
              
            </ul>
          </div>

          {/* Dividers */}
          <div className='h-screen w-1/12 flex justify-center items-center'>
            <div className='h-full w-1 flex justify-center items-center text-black'>
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
            </div>
          </div>

           {/* Heading */}
           <div className='h-screen w-5/12 flex justify-center items-center'>
            <h1 className='text-6xl lg:text-8xl text-left inline-block lg:w-2/3'>
              Vision &
              Missions
            </h1>
          </div>
        </section>
    </div>
  )
}

export default PageVision
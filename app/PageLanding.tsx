import React from 'react'
import PageHeader from '@/components/PageHeader'

const pageLanding = () => {
  return (
    <div>
    {/* Landing Page */}
      <section id='Landing' className='flex min-h-screen h-fit justify-end bg-red-200 bg-opacity-20'>
            {/* Background */}
            <div className='h-screen w-11/12 '>
                {/* Opacity */}
                <div className='flex flex-col h-screen w-full bg-black bg-opacity-20'>

                    {/* Header */}
                    <PageHeader/>

                    {/* Details */}
                    <div className='flex-1 w-full flex flex-col justify-center pl-8 gap-y-16'>

                        <h1 className='text-8xl inline-block'>
                            meraqi Movement 
                        </h1>
                        
                        <p className='inline-block w-2/5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum vulputate ex, vel malesuada felis venenatis eget. Maecenas fringilla nibh vitae nulla semper, id maximus erat pharetra. Nulla eleifend ligula quis mi varius semper. Vestibulum posuere tristique interdum. Nam aliquet urna lacus, at mattis odio scelerisque vel. Cras vitae ligula nec lectus interdum aliquam vitae nec dui. Curabitur auctor vulputate euismod.
                        </p>
                        
                    </div>
                
                </div>
            </div>
      </section>
    </div>
  )
}

export default pageLanding
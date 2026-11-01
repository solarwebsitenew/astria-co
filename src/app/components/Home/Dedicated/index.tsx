'use client'
import React from 'react'
import Image from 'next/image'

const Dedicated = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
          <Image
            src='/images/dedicated/spiral.svg'
            height={272}
            width={686}
            alt='spiral-design'
            className='absolute left-0 top-0 hidden lg:block -z-10'
            style={{ width: 'auto', height: 'auto' }}
          />
          {/* Left Column */}
          <div className='col-span-12 lg:col-span-6 justify-self-center'>
            <Image
              src='/images/team/founder-image.png'
              alt='Aryan Soni - Founder'
              width={416}
              height={555}
              className='mx-auto md:mx-0 rounded-3xl object-cover shadow-2xl max-w-full'
              style={{ width: 'auto', height: 'auto', maxHeight: '550px' }}
              priority
            />
          </div>

          {/* Right Column */}
          <div className='col-span-12 lg:col-span-6'>
            <div className='relative'>
              <Image
                src='/images/dedicated/comma.svg'
                alt='comma-image'
                width={200}
                height={106}
                className='absolute -top-16 -left-32 hidden lg:block'
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <h2 className='!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-navy dark:text-white text-center lg:text-start leading-tight'>
              “Dedicated to scaling global brands through high-performance marketing.”
            </h2>
            <p className='text-base sm:text-lg lg:text-xl font-medium text-black/65 dark:text-slate-300 mt-5 text-center lg:text-start leading-relaxed'>
              We eliminate guesswork from digital advertising across global markets. By combining data-driven media buying, localized creative testing, and rigorous CRO, we help D2C and B2B enterprises scale predictably across North America, Europe, UAE, and Asia.
            </p>
            <h5 className='mt-12 lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-black before:h-0.5 before:w-24 before:left-0 before:bottom-1/2 text-center lg:text-start font-semibold text-lg'>
              Aryan Soni, Founder & Head of Growth
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dedicated

import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <section id='Team' className='overflow-x-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <h2 className='text-center !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-navy dark:text-white max-w-5xl mx-auto leading-tight'>
          A dedicated growth team focused on your bottom line.
        </h2>
        <p className='text-base sm:text-lg font-medium text-center pt-4 sm:pt-6 text-black/60 dark:text-white/60 max-w-3xl mx-auto leading-relaxed'>
          From seasoned media buyers and creative directors to CRO engineers and attribution analysts, we treat your ad budget like our own capital.
        </p>
        <div className='grid grid-cols-1 mt-16'>
          <Image
            src='/images/team/team.webp'
            alt='office-image'
            height={684}
            width={1296}
            className='relative z-1 rounded-3xl'
          />
        </div>
      </div>
    </section>
  )
}

export default Team

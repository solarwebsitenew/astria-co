'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className="rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top pb-16 sm:pb-24 lg:pb-60 relative">
          <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='pt-12 sm:pt-16 lg:pt-24 px-6 sm:px-10 lg:pl-24'>
              <p className='text-sm sm:text-base font-semibold text-white/90 mb-4 tracking-widest text-center lg:text-start uppercase mt-2'>
                Who we are
              </p>
              <h2 className='!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-white mb-6 leading-tight text-center lg:text-start lg:w-full'>
                We scale brands with Meta Ads, Google Ads, SEO, and Global TikTok marketing.
              </h2>
              <div className='text-center lg:text-start'>
                <Link
                  href='#services-section'
                  className='inline-block text-base sm:text-lg font-semibold text-white bg-deep-slate/90 hover:bg-deep-slate py-3.5 px-8 sm:py-4 sm:px-12 rounded-full shadow-lg transition-colors'>
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
          {/* COLUMN-2 */}
          <div className='absolute -bottom-16 -right-20 xl:block hidden'>
            <Image
              src='/images/digital/girldoodle.svg'
              alt='doodle'
              width={815}
              height={691}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital

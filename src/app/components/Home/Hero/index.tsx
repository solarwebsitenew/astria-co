'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useContactModal } from '@/app/context/ContactModalContext'

const Hero = () => {
  const { openModal } = useContactModal()
  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className='relative overflow-hidden z-1'>
      <div className='container mx-auto pt-24 max-w-7xl px-4'>
        <div className='grid grid-cols-12 justify-center items-center'>
          <div className='col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-12 sm:col-span-12'>
            <div className='py-2 px-4 sm:px-5 bg-primary/15 rounded-full w-fit'>
              <p className='text-primary text-xs sm:text-base font-bold'>GLOBAL PERFORMANCE MARKETING AGENCY</p>
            </div>
            <h1 className='!text-3xl sm:!text-5xl md:!text-6xl font-extrabold !leading-tight mt-4 text-navy dark:text-white'>
              Dedicated to scaling your revenue & maximizing ROI worldwide.
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-black/70 dark:text-slate-300 mt-4 max-w-xl leading-relaxed'>
              We engineer high-converting paid ad campaigns across Meta, Google & Global TikTok that slash your CAC and drive predictable, profitable growth across North America, Europe, UAE & Asia.
            </p>
            <div className='flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8'>
              <button
                onClick={openModal}
                className='bg-primary text-white text-base sm:text-lg font-semibold py-3.5 px-8 sm:py-5 sm:px-10 rounded-full hover:bg-darkmode hover:cursor-pointer transition-all shadow-lg hover:shadow-primary/30 cursor-pointer'>
                Claim Free Growth Audit
              </button>
              <Link href={'#services-section'}>
                <button className='bg-transparent text-navy dark:text-white border border-slate-300 dark:border-slate-700 hover:border-primary text-base sm:text-lg font-semibold py-3.5 px-6 sm:py-5 sm:px-8 rounded-full hover:cursor-pointer transition-all'>
                  View Retainers
                </button>
              </Link>
            </div>
          </div>
          <div className='xl:col-span-7 lg:col-span-6 lg:block hidden'>
            <Image
              src='/images/hero/banner-image.png'
              alt='banner image'
              width={600}
              height={600}
              className='w-full'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

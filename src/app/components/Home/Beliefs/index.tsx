'use client'
import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {/* COLUMN-1 */}

          <div className="bg-purple pt-10 sm:pt-12 px-6 sm:px-12 md:px-16 pb-32 sm:pb-48 md:pb-64 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <p className='text-sm sm:text-base font-semibold text-white tracking-widest mb-4 text-center sm:text-start uppercase'>
              beliefs
            </p>
            <h3 className='!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold text-white mb-5 text-center sm:text-start leading-tight'>
              Transparency{' '}
              <span className='text-white/60'>
                and measurable ROI are our beliefs.
              </span>
            </h3>
            <p className='text-base sm:text-lg text-white/75 pt-2 mb-10 sm:mb-14 text-center sm:text-start leading-relaxed'>
              We believe ad spend shouldn't be a gamble. Every campaign we launch is backed by unit-economic modeling, server-side data, and profit-first KPIs.
            </p>
            <div className='text-center sm:text-start'>
              <Link
                href='#services-section'
                className='inline-block text-base sm:text-lg py-3.5 px-8 sm:py-4 sm:px-12 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode shadow-lg'>
                Our Methodology
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className=''>
            <div className="bg-[#D6FFEB] pt-10 sm:pt-12 px-6 sm:px-12 md:px-16 pb-32 sm:pb-48 md:pb-64 rounded-3xl bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <p className='text-sm sm:text-base font-semibold text-primary tracking-widest mb-4 text-center sm:text-start uppercase'>
                SCALE
              </p>
              <h3 className='!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold text-black mb-5 text-center sm:text-start leading-tight'>
                <span className='text-primary'>Scale</span> locally & globally with multi-channel dominance.
              </h3>
              <p className='pt-2 mb-10 sm:mb-14 text-center sm:text-start text-black/75 text-base sm:text-lg leading-relaxed'>
                From high-intent Google Search & SEO to Meta Ads and Global TikTok campaigns for international markets, we build full-funnel engines that capture every conversion.
              </p>
              <div className='text-center sm:text-start'>
                <Link
                  href='#case-studies'
                  className='inline-block text-base sm:text-lg py-3.5 px-8 sm:py-4 sm:px-12 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode shadow-lg'>
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs

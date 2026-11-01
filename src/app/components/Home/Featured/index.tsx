'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Link from 'next/link'
import { featureddata } from '@/app/types/featureddata'
import { useContactModal } from '@/app/context/ContactModalContext'

const defaultFeaturedData: featureddata[] = [
  {
    tag: 'Meta Ads & D2C',
    stat: '4.6x ROAS',
    client: 'D2C Lifestyle Brand (US & India)',
    heading: 'Scaled to 4.6x Blended ROAS with High-Converting UGC Video Creatives',
    imgSrc: '/images/featured/case-meta-d2c.png',
    metrics: ['4.6x Blended ROAS', '₹11.5L+ ($138k) Rev', 'Meta & UGC Creatives'],
  },
  {
    tag: 'SEO & Inbound',
    stat: '+240% Growth',
    client: 'B2B Tech Platform (UK & Europe)',
    heading: '240% Inbound Lead Growth & #1 Google Commercial Keyword Rankings',
    imgSrc: '/images/featured/case-seo-growth.png',
    metrics: ['#1 Google Rankings', '+240% Traffic Spike', 'Zero Ad Spend Inbound'],
  },
  {
    tag: 'Lead Gen Funnel',
    stat: '68% Lower CPL',
    client: 'Healthcare & Real Estate (UAE & Asia)',
    heading: '3,200+ Verified Customer Leads Generated with 68% CPL Reduction',
    imgSrc: '/images/featured/case-lead-gen.png',
    metrics: ['-68% CPL Reduction', '3,200+ Qualified Leads', 'Meta + Funnel CRO'],
  },
  {
    tag: 'Google Ads & Automation',
    stat: '₹18L Pipeline',
    client: 'High-Ticket Consulting (Global)',
    heading: 'Google Search Ads + Automated 60-Second WhatsApp Lead Routing Flow',
    imgSrc: '/images/featured/case-google-whatsapp.png',
    metrics: ['₹18L+ ($220k) Pipeline', '38% Booking Rate', 'WhatsApp Automation'],
  },
]

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4500,
  pauseOnHover: true,
  speed: 600,
  cssEase: 'ease-in-out',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const Featured = () => {
  const { openModal } = useContactModal()
  const [featured, setFeatured] = useState<featureddata[]>(defaultFeaturedData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (data.FeaturedData && data.FeaturedData.length > 0) {
          setFeatured(data.FeaturedData)
        }
      } catch (error) {
        console.error('Error fetching featured case studies:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section id='case-studies' className="relative py-12 sm:py-16 md:py-20 bg-deepSlate dark:bg-darkmode after:absolute after:w-1/4 after:h-1/4 after:bg-[url('/images/wework/vector.svg')] after:top-72 after:right-0 after:bg-no-repeat overflow-hidden">
      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-8 sm:mb-12'>
          <p className='text-primary text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase mb-2 sm:mb-3'>PROVEN RESULTS</p>
          <h2 className='!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-navy dark:text-white leading-tight mb-3 sm:mb-4'>
            Case Studies & Track Record.
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base'>
            Real ad spend. Real conversions. Data-backed growth across Meta, Google & SEO.
          </p>
        </div>

        <div className="pb-8">
          <Slider {...settings}>
            {featured.map((items, i) => (
              <div key={i} className='px-3 pb-6'>
                <div className='group relative bg-white dark:bg-[#0f172a] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/80 dark:border-slate-800 flex flex-col h-full'>
                  {/* Image Container */}
                  <div className='relative w-full aspect-[16/10] overflow-hidden bg-slate-950'>
                    <Image
                      src={items.imgSrc}
                      alt={items.heading}
                      fill
                      sizes='(max-width: 768px) 100vw, 50vw'
                      className='object-cover object-top group-hover:scale-105 transition-transform duration-500'
                    />
                  </div>

                  {/* Content Area */}
                  <div className='p-6 sm:p-7 flex flex-col flex-1 justify-between'>
                    <div>
                      {items.client && (
                        <p className='text-xs uppercase tracking-widest font-bold text-primary mb-2'>
                          {items.client}
                        </p>
                      )}
                      <h4 className='text-lg sm:text-xl font-bold text-navy dark:text-white line-clamp-2 leading-snug group-hover:text-primary transition-colors'>
                        {items.heading}
                      </h4>
                    </div>

                    {/* Metric Pills */}
                    {items.metrics && items.metrics.length > 0 && (
                      <div className='flex flex-wrap gap-2 my-4 pt-2'>
                        {items.metrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className='inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bottom CTA */}
                    <div className='pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between'>
                      <button
                        onClick={openModal}
                        className='inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-700 transition-colors group/link cursor-pointer'
                      >
                        <span>Get Similar Results</span>
                        <span className='group-hover/link:translate-x-1 transition-transform'>→</span>
                      </button>
                      <span className='text-xs text-slate-600 dark:text-slate-400 font-medium'>
                        Verified Case Study
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Featured

'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import AboutSkeleton from '../../Skeleton/AboutUs'

const defaultAboutData: aboutdata[] = [
  {
    heading: 'About Us.',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Astria & Co is a full-funnel performance marketing agency. We partner with startups and scaling businesses to drive predictable revenue through data-backed Meta & Google Ads, SEO, and global campaigns.',
    link: 'Learn more',
  },
  {
    heading: 'Our Services.',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'From high-ROI Meta & Google Ads to Performance SEO, Global TikTok Campaigns, high-converting website development, WhatsApp automation, and custom CRM setup.',
    link: 'Explore services',
  },
  {
    heading: 'Our Results.',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'Proven track record that impacts your bottom line: up to 4.8x ROAS on paid ads, 240% organic traffic growth, and over 40% reduction in customer acquisition costs.',
    link: 'View case studies',
  },
]

const Aboutus = () => {
  // fetch about data
  const [about, setAbout] = useState<aboutdata[]>(defaultAboutData)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (data.Aboutdata && data.Aboutdata.length > 0) {
          setAbout(data.Aboutdata)
        }
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='About' className='py-12 sm:py-16 md:py-20 bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='p-6 sm:p-8 md:p-12 bg-grey dark:bg-slate-900 rounded-2xl sm:rounded-3xl relative overflow-hidden'>
          <Image
            src='/images/aboutus/dots.svg'
            width={100}
            height={100}
            alt='dots-image'
            className='hidden md:block absolute bottom-1 -left-10 opacity-70 pointer-events-none'
            style={{ width: 'auto', height: 'auto' }}
          />
          <p className='text-center text-primary text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase mt-2 sm:mt-4 mb-2'>
            OUR CORE CAPABILITIES
          </p>
          <h2 className='text-center !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-navy dark:text-white pb-6 sm:pb-8 md:pb-12 max-w-3xl mx-auto leading-tight'>
            Full-Funnel Performance Marketing.
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-4 sm:mt-6'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => (
                  <div
                    key={i}
                    className='hover:bg-darkmode bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between'>
                    <div>
                      <h3 className='text-xl sm:text-2xl font-bold text-navy dark:text-white group-hover:text-white mb-4 transition-colors'>
                        {item.heading}
                      </h3>
                      <div className='w-16 h-16 sm:w-20 sm:h-20 mb-5 relative'>
                        <Image
                          src={item.imgSrc}
                          alt={item.heading}
                          width={80}
                          height={80}
                          className='object-contain w-full h-full'
                        />
                      </div>
                      <p className='text-sm sm:text-base font-normal text-slate-600 dark:text-slate-300 group-hover:text-white/90 mb-6 leading-relaxed transition-colors'>
                        {item.paragraph}
                      </p>
                    </div>
                    <Link
                      href={i === 0 ? '#Team' : i === 1 ? '#services-section' : '#case-studies'}
                      className='text-base font-semibold text-primary group-hover:text-white flex items-center gap-1.5 transition-colors mt-auto group/link'>
                      <span>{item.link}</span>
                      <Icon
                        icon='tabler:chevron-right'
                        width='20'
                        height='20'
                        className='group-hover/link:translate-x-1 transition-transform'
                      />
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus

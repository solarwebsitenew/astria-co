'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { testimonials } from '@/app/types/testimonials'
import TestimonialSkeleton from '../../Skeleton/Testimonial'

interface TestimonialType {
  name: string
  profession: string
  comment: string
  imgSrc: string
  rating: number
}

interface TestimonialCardProps {
  items: TestimonialType
}

const defaultTestimonialsData: testimonials[] = [
  {
    name: 'Vikram Singhania',
    profession: 'Founder & CEO, D2C Apparel (US & India)',
    comment:
      'Astria & Co completely transformed our paid marketing. They took our monthly revenue from $35k to $240k while maintaining a 4.4x ROAS on Meta. Best agency decision we made.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Marcus Vance',
    profession: 'VP of Growth, FinTech SaaS (London, UK)',
    comment:
      'Their rigorous creative testing framework and landing page sprints slashed our CAC by 42% across UK and European markets. Weekly reporting gives us total clarity on every dollar invested.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Ananya Deshmukh',
    profession: 'Head of Marketing, E-Commerce Group (Dubai, UAE)',
    comment:
      'Managing multi-currency Google PMax and TikTok campaigns seamlessly across the GCC and Europe. Astria & Co operates with the speed and ownership of an elite in-house team.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
  {
    name: 'Oliver Schmidt',
    profession: 'Managing Director, Health & Wellness (Berlin, Germany)',
    comment:
      'Google Performance Max and YouTube ads managed by Astria & Co consistently out-deliver our expectations. Scaled our European seasonal campaign to record-breaking ROAS!',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
]

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ items }) => {
  const validRating = Math.min(Math.max(items.rating, 0), 5)

  return (
    <div className='relative py-6 sm:py-10'>
      <div className='bg-white dark:bg-darkHeroBg shadow-testimonial m-2 sm:m-3 p-6 sm:p-8 md:p-10 rounded-3xl'>
        <Image
          src={items.imgSrc}
          alt={`${items.name} - ${items.profession} testimonial image`}
          width={71}
          height={71}
          className='inline-block m-auto absolute top-1 sm:top-3'
        />
        <p className='text-base font-medium my-4 text-black'>{items.comment}</p>
        <hr style={{ color: 'border' }} />
        <div className='flex justify-between'>
          <div>
            <p className='text-base font-medium pt-4 pb-2 text-black dark:text-white'>
              {items.name}
            </p>
            <p className='text-xs font-medium pb-2 text-black/50'>
              {items.profession}
            </p>
          </div>
          <div className='flex items-center'>
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                icon='tabler:star-filled'
                className={`mr-1 ${
                  i < validRating ? 'text-yellow-500' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonial: React.FC = () => {
  const [testimonals, setTestimonials] = useState<testimonials[]>(defaultTestimonialsData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (data.TestimonialsData && data.TestimonialsData.length > 0) {
          setTestimonials(data.TestimonialsData)
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <section
      className="bg-testimonial dark:bg-darkmode bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center"
      id='testimonial-section'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div>
          <div className='text-center'>
            <p className='text-primary text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase mb-2'>CLIENT SUCCESS</p>
            <h2 className='!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-navy dark:text-white my-3 leading-tight max-w-3xl mx-auto'>
              Trusted by high-growth founders & brands.
            </h2>
          </div>
          <div className='mt-8 sm:mt-16'>
            {testimonals.length > 0 ? (
              <Slider {...settings}>
                {testimonals.map((items, i) => (
                  <TestimonialCard key={i} items={items} />
                ))}
              </Slider>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial

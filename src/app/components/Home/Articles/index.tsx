'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import { articles } from '@/app/types/articles'
import ArticlesSkeleton from '../../Skeleton/Articles'

const defaultArticlesData: articles[] = [
  {
    time: '5 min read',
    heading: 'Mastering Meta Ads in 2026:',
    heading2: 'The Creative Scaling Framework',
    name: 'By Astria & Co Growth Team',
    date: 'February 2026',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '6 min read',
    heading: 'Google Performance Max Playbook:',
    heading2: 'How We Hit 5.2x ROAS for D2C',
    name: 'By Astria & Co Growth Team',
    date: 'January 2026',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '4 min read',
    heading: 'Slashing Customer Acquisition Cost (CAC):',
    heading2: 'Funnel Optimization Strategies',
    name: 'By Astria & Co Growth Team',
    date: 'January 2026',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min read',
    heading: 'Server-Side Tracking & CAPI:',
    heading2: 'The Post-Cookie Attribution Guide',
    name: 'By Astria & Co Growth Team',
    date: 'December 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '7 min read',
    heading: 'High-Converting UGC Ads:',
    heading2: 'Hooks, Angles & Scripting That Convert',
    name: 'By Astria & Co Growth Team',
    date: 'November 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '4 min read',
    heading: 'Scaling Past $100k/Month:',
    heading2: 'Budget Allocation & Media Buying Rules',
    name: 'By Astria & Co Growth Team',
    date: 'November 2025',
    imgSrc: '/images/articles/article3.png',
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
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
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

const Articles = () => {
  const [articlesList, setArticlesList] = useState<articles[]>(defaultArticlesData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (data.ArticlesData && data.ArticlesData.length > 0) {
          setArticlesList(data.ArticlesData)
        }
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section id='Blog' className='relative bg-grey dark:bg-slate-900 overflow-hidden py-12 sm:py-16 md:py-20'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center mb-6 sm:mb-10'>
          <p className='text-primary text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase mb-2'>
            GROWTH INSIGHTS
          </p>
          <h2 className='!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-navy dark:text-white my-3 leading-tight max-w-3xl mx-auto'>
            Latest Performance Marketing Tactics.
          </h2>
        </div>

        {articlesList.length > 0 ? (
          <Slider {...settings}>
            {articlesList.map((items, i) => (
              <div key={i} className='px-2 sm:px-3'>
                <div className='bg-white dark:bg-slate-800 m-2 px-4 pt-4 pb-8 my-4 shadow-lg rounded-3xl relative flex flex-col justify-between h-full border border-slate-100 dark:border-slate-700/60'>
                  <div>
                    <div className='relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-4'>
                      <Image
                        src={items.imgSrc}
                        alt={items.heading}
                        fill
                        sizes='(max-width: 768px) 100vw, 33vw'
                        className='object-cover'
                      />
                      <span className='absolute bottom-3 right-3 text-xs font-semibold bg-primary text-white py-1 px-3 rounded-full shadow-md'>
                        {items.time}
                      </span>
                    </div>
                    <h4 className='font-bold text-lg sm:text-xl text-navy dark:text-white line-clamp-1'>
                      {items.heading}
                    </h4>
                    <h5 className='font-semibold text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 line-clamp-2'>
                      {items.heading2}
                    </h5>
                  </div>
                  <div className='mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400'>
                    <span>{items.name}</span>
                    <span>{items.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <ArticlesSkeleton />
            <ArticlesSkeleton />
            <ArticlesSkeleton />
          </div>
        )}
      </div>
    </section>
  )
}

export default Articles

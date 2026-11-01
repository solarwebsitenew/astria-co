'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const posts = [
  {
    src: '/images/insta/insta1.png',
    alt: 'Meta Ad Hook Testing Matrix',
    tag: 'Creative Sprint',
    title: '3-Second Hook Retention Matrix',
  },
  {
    src: '/images/insta/insta2.png',
    alt: 'D2C Scaling ROAS Case Study',
    tag: 'Scale Study',
    title: 'Scaling Past ₹18L/mo (5.2x ROAS)',
  },
  {
    src: '/images/insta/insta3.png',
    alt: 'Direct Response UGC Framework',
    tag: 'Creative Intel',
    title: 'High-Converting UGC Ad Scripting',
  },
  {
    src: '/images/insta/insta4.png',
    alt: 'Meta CAPI Server Side Attribution',
    tag: 'Tech & Attribution',
    title: 'Server-Side CAPI Setup Guide',
  },
]

const Insta = () => {
  return (
    <section className='container mx-auto max-w-7xl py-16 sm:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-slate-200 dark:border-slate-800 gap-4'>
        <div>
          <p className='text-xs font-bold tracking-widest text-primary uppercase mb-2'>
            AGENCY SOCIAL LAB
          </p>
          <h3 className='text-2xl sm:text-3xl font-extrabold text-navy dark:text-white tracking-tight'>
            Follow Our Creative Sprints
          </h3>
          <p className='text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1'>
            Weekly ad breakdowns, hook testing formulas, and performance scaling intel.
          </p>
        </div>

        <Link
          href='https://www.instagram.com/astriacreative.co/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-navy dark:text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 self-start sm:self-auto border border-slate-200 dark:border-slate-700'>
          <Icon icon='tabler:brand-instagram' width='18' height='18' className='text-rose-500' />
          <span>@astriacreative.co</span>
          <Icon icon='tabler:arrow-up-right' width='16' height='16' />
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {posts.map((post, idx) => (
          <Link
            key={idx}
            href='https://www.instagram.com/astriacreative.co/'
            target='_blank'
            rel='noopener noreferrer'
            className='group block bg-white dark:bg-[#0c1427] rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300'>
            {/* Image Box */}
            <div className='relative w-full aspect-square overflow-hidden bg-slate-900'>
              <Image
                src={post.src}
                width={800}
                height={800}
                alt={post.alt}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
              {/* Hover overlay */}
              <div className='absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white gap-2 backdrop-blur-xs'>
                <div className='w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-white'>
                  <Icon icon='tabler:brand-instagram' width='24' height='24' />
                </div>
                <span className='text-xs font-bold tracking-wide'>View on Instagram</span>
                <span className='text-[11px] text-white/70'>@astriacreative.co</span>
              </div>
            </div>

            {/* Post meta caption */}
            <div className='p-3.5'>
              <span className='text-[10px] font-bold uppercase tracking-wider text-primary'>
                {post.tag}
              </span>
              <p className='text-xs font-bold text-navy dark:text-white mt-0.5 line-clamp-1 group-hover:text-primary transition-colors'>
                {post.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Insta

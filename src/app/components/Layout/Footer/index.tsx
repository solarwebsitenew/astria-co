'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useContactModal } from '@/app/context/ContactModalContext'

const Footer = () => {
  const { openModal } = useContactModal()

  return (
    <footer className='bg-[#070b14] text-white border-t border-white/10' id='first-section'>
      <div className='container mx-auto max-w-7xl pt-14 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10'>
          
          {/* Brand & Overview */}
          <div className='col-span-1 sm:col-span-2 lg:col-span-4'>
            <h4 className='text-white text-2xl font-extrabold tracking-tight mb-3'>
              Astria & Co.
            </h4>
            <p className='text-slate-400 text-sm max-w-sm mb-5 leading-relaxed'>
              Performance marketing and creative growth partner for scale-ready brands worldwide.
            </p>

            {/* Social Icons */}
            <div className='flex items-center gap-3'>
              <Link
                href='https://www.instagram.com/astriacreative.co/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
                className='w-9 h-9 rounded-md bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors'>
                <Icon icon='tabler:brand-instagram' width='18' height='18' />
              </Link>
              <Link
                href='https://wa.me/919220133918'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='WhatsApp'
                className='w-9 h-9 rounded-md bg-white/5 hover:bg-white/15 text-slate-300 hover:text-emerald-400 border border-white/10 flex items-center justify-center transition-colors'>
                <Icon icon='tabler:brand-whatsapp' width='18' height='18' />
              </Link>
              <Link
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='w-9 h-9 rounded-md bg-white/5 hover:bg-white/15 text-slate-300 hover:text-primary border border-white/10 flex items-center justify-center transition-colors'>
                <Icon icon='tabler:brand-linkedin' width='18' height='18' />
              </Link>
              <Link
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='X'
                className='w-9 h-9 rounded-md bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors'>
                <Icon icon='tabler:brand-x' width='16' height='16' />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className='col-span-1 sm:col-span-1 lg:col-span-2'>
            <p className='text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5'>
              Navigation
            </p>
            <ul className='space-y-2.5 text-sm'>
              <li>
                <Link href='#About' className='text-slate-300 hover:text-white transition-colors block py-0.5'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='#case-studies' className='text-slate-300 hover:text-white transition-colors block py-0.5'>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href='#impact' className='text-slate-300 hover:text-white transition-colors block py-0.5'>
                  Track Record
                </Link>
              </li>
              <li>
                <Link href='#services-section' className='text-slate-300 hover:text-white transition-colors block py-0.5'>
                  Pricing Retainers
                </Link>
              </li>
              <li>
                <Link href='#FAQ' className='text-slate-300 hover:text-white transition-colors block py-0.5'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className='col-span-1 sm:col-span-1 lg:col-span-3'>
            <p className='text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5'>
              Services
            </p>
            <ul className='space-y-2.5 text-sm text-slate-300'>
              <li>
                <Link href='#services-section' className='hover:text-white transition-colors block py-0.5'>
                  Paid Social & Meta Ads
                </Link>
              </li>
              <li>
                <Link href='#services-section' className='hover:text-white transition-colors block py-0.5'>
                  Google Ads & Search
                </Link>
              </li>
              <li>
                <Link href='#services-section' className='hover:text-white transition-colors block py-0.5'>
                  High-Converting Creatives
                </Link>
              </li>
              <li>
                <Link href='#services-section' className='hover:text-white transition-colors block py-0.5'>
                  Performance SEO & CRO
                </Link>
              </li>
              <li>
                <Link href='#services-section' className='hover:text-white transition-colors block py-0.5'>
                  WhatsApp Funnel Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiry */}
          <div className='col-span-1 sm:col-span-2 lg:col-span-3'>
            <p className='text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5'>
              Get in Touch
            </p>

            <div className='space-y-3 text-sm mb-5'>
              <a
                href='mailto:contact@astria.co.in'
                className='flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors break-all'>
                <Icon icon='tabler:mail' width='17' height='17' className='text-slate-400 shrink-0' />
                <span>contact@astria.co.in</span>
              </a>

              <a
                href='https://wa.me/919220133918'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors'>
                <Icon icon='tabler:brand-whatsapp' width='17' height='17' className='text-emerald-400 shrink-0' />
                <span>+91 92201 33918</span>
              </a>

              <a
                href='https://www.instagram.com/astriacreative.co/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2.5 text-slate-300 hover:text-rose-400 transition-colors'>
                <Icon icon='tabler:brand-instagram' width='17' height='17' className='text-rose-400 shrink-0' />
                <span>@astriacreative.co</span>
              </a>
            </div>

            <button
              onClick={openModal}
              className='w-full py-3 px-4 bg-primary hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer'>
              <span>Request Growth Audit</span>
              <Icon icon='tabler:arrow-right' width='14' height='14' />
            </button>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className='border-t border-white/10'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500'>
          <p>© 2026 Astria & Co. All rights reserved.</p>
          <div className='flex items-center gap-5'>
            <Link href='/' className='hover:text-slate-300 transition-colors'>
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href='/' className='hover:text-slate-300 transition-colors'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { HeaderItem } from '@/app/types/menu'
import CurrencySelector from './CurrencySelector'
import { useContactModal } from '@/app/context/ContactModalContext'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  headerData: HeaderItem[]
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, headerData }) => {
  const [mounted, setMounted] = useState(false)
  const { openModal } = useContactModal()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return createPortal(
    <div
      className='fixed inset-0 w-full h-full min-h-screen bg-[#070b14] text-white z-9999 flex flex-col justify-between overflow-y-auto p-5 sm:p-8 animate-fadeIn'
      aria-label='Full Screen Mobile Navigation'>
      
      {/* Top Bar: Brand Logo & Close Button */}
      <div>
        <div className='flex items-center justify-between pb-4 border-b border-white/10'>
          <Link
            href='/'
            onClick={onClose}
            className='text-2xl font-extrabold text-white tracking-tight'>
            Astria & Co.
          </Link>
          <button
            onClick={onClose}
            className='p-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer'
            aria-label='Close menu'>
            <Icon icon='tabler:x' width='22' height='22' />
          </button>
        </div>

        {/* Navigation Links (Full Width, Large, Clean) */}
        <nav className='mt-6 flex flex-col'>
          {headerData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={onClose}
              className='flex items-center justify-between py-4 text-base sm:text-lg font-bold text-slate-100 hover:text-primary border-b border-white/10 px-2 rounded-md transition-colors'>
              <span>{item.label}</span>
              <Icon icon='tabler:arrow-right' width='18' height='18' className='text-slate-500' />
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Area: Currency, CTAs & Direct Contact */}
      <div className='mt-8 pt-6 border-t border-white/10 space-y-4'>
        {/* Currency Switcher */}
        <div className='flex items-center justify-between py-2.5 px-4 bg-white/5 rounded-md border border-white/10'>
          <span className='text-xs font-bold uppercase tracking-wider text-slate-300'>
            Select Invoicing Currency
          </span>
          <CurrencySelector variant='dark' />
        </div>

        {/* Action CTAs */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <button
            onClick={() => {
              onClose()
              openModal()
            }}
            className='w-full py-3.5 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-md border border-white/20 transition-colors cursor-pointer text-center'>
            Contact Us
          </button>
          <button
            onClick={() => {
              onClose()
              openModal()
            }}
            className='w-full py-3.5 px-4 bg-primary hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-lg transition-colors cursor-pointer text-center'>
            Free Growth Audit →
          </button>
        </div>

        {/* Direct Channels */}
        <div className='pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400'>
          <a
            href='https://wa.me/919220133918'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-emerald-400 font-semibold hover:underline'>
            <Icon icon='tabler:brand-whatsapp' width='16' height='16' />
            <span>+91 92201 33918 (WhatsApp)</span>
          </a>
          <a
            href='mailto:contact@astria.co.in'
            className='flex items-center gap-2 text-slate-300 hover:underline'>
            <Icon icon='tabler:mail' width='16' height='16' />
            <span>contact@astria.co.in</span>
          </a>
        </div>
      </div>

    </div>,
    document.body
  )
}

export default MobileDrawer

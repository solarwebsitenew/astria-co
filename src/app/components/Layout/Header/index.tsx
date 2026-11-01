'use client'

import { useEffect, useState } from 'react'
import { HeaderItem } from '@/app/types/menu'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import { useContactModal } from '@/app/context/ContactModalContext'
import CurrencySelector from './CurrencySelector'
import MobileDrawer from './MobileDrawer'
import { Icon } from '@iconify/react'

const defaultHeaderData: HeaderItem[] = [
  { label: 'About Us', href: '#About' },
  { label: 'Services', href: '#services-section' },
  { label: 'Track Record', href: '#impact' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing', href: '#services-section' },
  { label: 'FAQ', href: '#FAQ' },
]

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const { openModal } = useContactModal()

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Header data fetch
  const [headerData, setHeaderData] = useState<HeaderItem[]>(defaultHeaderData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (data.headerData && data.headerData.length > 0) {
          setHeaderData(data.headerData)
        }
      } catch (error) {
        console.error('Error fetching navigation links:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 border-b border-black/10 ${
          sticky
            ? 'shadow-md bg-white/95 dark:bg-darkmode/95 backdrop-blur-md'
            : 'shadow-none bg-white/80 dark:bg-darkmode/80 backdrop-blur-sm'
        }`}>
        <div className='container mx-auto max-w-(--breakpoint-xl) flex items-center justify-between px-3 sm:px-4'>
          {/* Logo container */}
          <div
            className={`pr-3 sm:pr-6 lg:pr-10 lg:border-r border-black/10 transition-all duration-300 ${
              sticky ? 'py-2.5 lg:py-3.5' : 'py-3.5 lg:py-6'
            }`}>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className='hidden lg:flex grow items-center gap-7 justify-center'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Right Header CTAs & Mobile Controls */}
          <div
            className={`flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 lg:pl-8 lg:border-l border-black/10 transition-all duration-300 ${
              sticky ? 'py-2.5 lg:py-3.5' : 'py-3.5 lg:py-6'
            }`}>
            
            {/* Currency Selector (Desktop & Tablet & Mobile) */}
            <div className='flex items-center'>
              <CurrencySelector />
            </div>

            {/* Desktop Action Buttons */}
            <button
              className='hidden lg:block bg-transparent text-navy dark:text-white border border-slate-300 dark:border-slate-700 hover:border-primary hover:text-primary px-4 py-2 rounded-md text-xs font-bold tracking-wide uppercase transition-colors cursor-pointer'
              onClick={openModal}>
              Contact Us
            </button>
            <button
              className='hidden lg:block bg-primary text-white hover:bg-navy border border-primary hover:border-navy px-4 py-2 rounded-md text-xs font-bold tracking-wide uppercase shadow-sm hover:shadow-primary/30 transition-all cursor-pointer'
              onClick={openModal}>
              Free Growth Audit
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-navy dark:text-white transition-colors cursor-pointer'
              aria-label='Toggle mobile menu'>
              <Icon icon={navbarOpen ? 'tabler:x' : 'tabler:menu-2'} width='24' height='24' />
            </button>
          </div>
        </div>
      </header>

      {/* Standalone Full-Screen Mobile Drawer via Portal */}
      <MobileDrawer
        isOpen={navbarOpen}
        onClose={() => setNavbarOpen(false)}
        headerData={headerData}
      />
    </>
  )
}

export default Header

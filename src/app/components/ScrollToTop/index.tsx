'use client'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <button
        onClick={scrollToTop}
        aria-label='Scroll to top'
        className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-navy dark:bg-primary text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-primary dark:hover:bg-blue-600 hover:-translate-y-1'>
        <span className='mt-[3px] h-2.5 w-2.5 rotate-45 border-l-2 border-t-2 border-white' />
      </button>
    </div>
  )
}

'use client'
import React, { useState } from 'react'
import { useContactModal } from '@/app/context/ContactModalContext'
import toast from 'react-hot-toast'
import { Icon } from '@iconify/react'

const Join = () => {
  const { openModal } = useContactModal()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) {
      openModal()
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          businessName: 'Via Homepage Banner',
          service: 'Growth Audit Request',
          budget: 'Not specified',
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        toast.success('Audit request sent to contact@astria.co.in! We will contact you shortly.')
        setName('')
        setEmail('')
      } else {
        openModal()
      }
    } catch {
      openModal()
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id='join-us' className='overflow-hidden bg-joinus py-16 sm:py-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase mb-2'>
            FREE GROWTH AUDIT
          </p>
          <h2 className='!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-navy dark:text-white my-4 sm:my-6 leading-tight max-w-3xl mx-auto'>
            Ready to scale your ad spend profitably?
          </h2>
          <p className='text-black/60 dark:text-white/60 text-sm sm:text-base font-normal max-w-3xl mx-auto leading-relaxed'>
            Request a 30-minute deep-dive ad account audit with our performance marketing leads. We will identify wasted spend, tracking leaks, and untapped scaling opportunities.
          </p>
        </div>

        <div className='mx-auto max-w-4xl pt-6'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col sm:flex-row items-center p-3 sm:p-2 rounded-2xl justify-between bg-grey dark:bg-slate-800 sm:rounded-full shadow-lg gap-2 border border-slate-200/60 dark:border-slate-700/60'>
            <div className='w-full sm:w-auto flex-1'>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full py-3.5 sm:py-4 px-4 sm:pl-6 text-sm sm:text-base text-black dark:text-white bg-transparent focus:outline-hidden'
                placeholder='Your full name'
                autoComplete='name'
              />
            </div>
            <div className='w-full sm:w-auto flex-1'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full py-3.5 sm:py-4 px-4 sm:pl-6 text-sm sm:text-base text-black dark:text-white sm:border-l border-slate-300 dark:border-slate-700 bg-transparent focus:outline-hidden'
                placeholder='Your work email'
                autoComplete='email'
              />
            </div>
            <div className='w-full sm:w-auto sm:mr-1'>
              <button
                type='submit'
                disabled={loading}
                className='w-full sm:w-auto text-sm sm:text-base text-white font-bold text-center rounded-xl sm:rounded-full bg-primary hover:bg-navy py-3.5 sm:py-4 px-8 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2'>
                {loading ? (
                  <>
                    <Icon icon='tabler:loader-2' className='animate-spin' width='18' height='18' />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Claim Audit!</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Join

'use client'
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import Image from 'next/image'
import PlansSkeleton from '../../Skeleton/Plans'
import Link from 'next/link'
import { useContactModal } from '@/app/context/ContactModalContext'
import { useCurrency } from '@/app/context/CurrencyContext'

const Manage = () => {
  const { openModal } = useContactModal()
  const { currency, formatPrice, config } = useCurrency()
  const [plans, setPlans] = useState<any[]>([])
  const [loading, setLoding] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlans(data.PlansData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }
    fetchData()
  }, [])

  const [enabled, setEnabled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<
    'yearly' | 'monthly'
  >('monthly')

  const toggleEnabled = () => {
    // Toggle the enabled state
    setEnabled((prevEnabled) => !prevEnabled)

    // Update selected category based on the switch position
    setSelectedCategory((prevCategory) =>
      prevCategory === 'monthly' ? 'yearly' : 'monthly'
    )
  }

  const filteredData = plans.map((plan) => ({
    ...plan,
    price: plan.price[selectedCategory],
  }))

  return (
    <section id='services-section'>
      <div className='container mx-auto max-w-7xl px-4'>
        <p className='text-primary text-center text-xs sm:text-sm font-bold tracking-widest uppercase mb-3'>TRANSPARENT PRICING</p>
        <h2 className='text-center !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-navy dark:text-white leading-tight max-w-3xl mx-auto'>
          Growth Retainers Engineered for High ROI.
        </h2>
        {/*  */}
        <div className='flex sm:block'>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 md:justify-evenly mt-8 sm:mt-12 items-center sm:items-start mx-auto'>
            <div className='flex gap-3 sm:gap-5 items-center justify-center md:justify-start'>
              <Image
                src='/images/manage/right.svg'
                alt='right-icon'
                width={21}
                height={14}
              />
              <p className='text-sm sm:text-base md:text-lg font-semibold'>Weekly Creative Sprints</p>
            </div>
            <div className='flex gap-3 sm:gap-5 items-center justify-center md:justify-start'>
              <Image
                src='/images/manage/right.svg'
                alt='right-icon'
                width={21}
                height={14}
              />
              <p className='text-sm sm:text-base md:text-lg font-semibold'>CAPI & Server-Side Tracking</p>
            </div>
            <div className='flex gap-3 sm:gap-5 items-center justify-center md:justify-start'>
              <Image
                src='/images/manage/right.svg'
                alt='right-icon'
                width={21}
                height={14}
              />
              <p className='text-sm sm:text-base md:text-lg font-semibold'>No Long-Term Lock-in</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='mt-6 relative'>
          <div className='dance-text xl:-ml-80 lg:-ml-80 md:-ml-80 -ml-52  text-center -rotate-[10deg] mb-5'>
            Flat 10% OFF Yearly
          </div>
          <Image
            src='/images/manage/toggle.svg'
            alt='toggle-image'
            width={24}
            height={24}
            className='absolute left-[37%] top-8'
          />
          <div className='flex items-center justify-center'>
            <p className={`text-sm font-semibold mr-5 ${selectedCategory === 'monthly' ? 'text-primary' : 'text-black/60'}`}>
              Billed Monthly
            </p>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className='relative inline-flex h-6 w-11 items-center rounded-full bg-black cursor-pointer'>
              <span className='sr-only'>Toggle billing period</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </Switch>
            <p className={`text-sm font-semibold ml-5 ${selectedCategory === 'yearly' ? 'text-primary' : 'text-black/60'}`}>
              Billed Yearly (10% OFF)
            </p>
          </div>
          {/* Global Currency & Invoicing Badge */}
          <div className='flex items-center justify-center mt-6'>
            <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'>
              <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
              <span>Global Client Invoicing: USD ($), EUR (€), GBP (£) & INR (₹) • Stripe, Wise & Wire Accepted</span>
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 sm:mt-14 gap-6 sm:gap-8 md:gap-10 manage'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <PlansSkeleton key={i} />)
            : filteredData.map((items, i) => (
                <div
                  className='bg-white dark:bg-[#0f172a] shadow-lg border border-slate-200 dark:border-slate-800 text-center p-6 sm:p-8 md:p-9 rounded-xl flex flex-col justify-between hover:border-primary/50 transition-all'
                  key={i}>
                  <div>
                    <div className='flex items-center justify-between mb-3'>
                      <h5 className='font-extrabold text-2xl text-navy dark:text-white'>{items.heading}</h5>
                      {items.heading === 'Business' && (
                        <span className='text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-sm'>
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className='text-4xl sm:text-5xl font-black mb-1 text-navy dark:text-white tracking-tight'>
                      {formatPrice(items.heading as any, selectedCategory === 'yearly')}
                    </p>
                    <p className='text-xs font-semibold text-primary mb-2'>
                      Billed in {config.code} ({config.symbol.trim()}) • {selectedCategory === 'yearly' ? 'Annual Plan (10% Off)' : 'Monthly Retainer'}
                    </p>
                    <p className='text-xs font-medium mb-6 text-slate-500 dark:text-slate-400'>
                      Cancel or pause anytime. No lock-in.
                    </p>
                    <button
                      onClick={openModal}
                      className='w-full text-xs font-bold uppercase tracking-wider text-primary hover:text-white bg-transparent hover:bg-primary border-2 border-primary rounded-md py-3.5 px-6 mb-8 hover:cursor-pointer transition duration-200 shadow-sm'>
                      Select {items.heading} Retainer
                    </button>
                    {/* Map through the features object and render each key-value pair dynamically */}
                    <div className='space-y-3 text-left pt-2 border-t border-slate-100 dark:border-slate-800'>
                      {Object.values(items.features).map((feature: any, index) => (
                        <div key={index} className='flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300'>
                          <span className='text-primary font-bold mt-0.5'>✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Manage

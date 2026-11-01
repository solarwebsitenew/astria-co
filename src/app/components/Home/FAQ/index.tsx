'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-12 sm:py-16 md:py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <p className='text-xs sm:text-sm font-bold text-white/90 text-center mb-3 tracking-widest uppercase'>FAQ</p>
          <h2 className='!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-extrabold text-white text-center max-w-3xl mx-auto leading-tight px-4'>
            Frequently asked questions.
          </h2>
          <div className='w-full px-3 sm:px-4 pt-8 sm:pt-16'>
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-5 sm:p-6 md:p-8 bg-white mb-4 sm:mb-5 shadow-lg'>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className='flex w-full justify-between items-center text-left text-base sm:text-xl md:text-2xl font-semibold focus:outline-hidden hover:cursor-pointer gap-3'>
                      <span className='text-navy'>
                        What services and ad platforms do you specialize in?
                      </span>
                      <div
                        className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-sm sm:text-base text-black/65 font-normal text-left pt-4 mt-4 sm:mt-6 border-t border-slate-200 leading-relaxed'>
                      <div className='lg:max-w-70%'>
                        We specialize in Google Ads (Search, Shopping, Performance Max, YouTube), Meta Ads (Facebook & Instagram), Performance SEO for organic search ranking, and Global TikTok Ads for brands expanding into international markets (US, UK, UAE, Europe). We also handle full CRO, tracking setup (Server-Side GTM/CAPI), and performance creative production.
                      </div>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-5 sm:p-6 md:p-8 bg-white mb-4 sm:mb-5 shadow-lg'>
              <Disclosure as='div'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-base sm:text-xl md:text-2xl font-semibold focus:outline-hidden hover:cursor-pointer gap-3'>
                      <span className='text-navy'>How do you improve ROAS and reduce CAC?</span>
                      <div
                        className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-sm sm:text-base text-black/65 pt-4 mt-4 sm:mt-6 text-left border-t border-slate-200 leading-relaxed'>
                      <div className='lg:max-w-70%'>
                        We run a systematic creative testing matrix (testing 20+ hooks and visual angles weekly), implement robust Server-Side Tracking (GTM & CAPI) to avoid signal loss, and optimize post-click landing pages to turn incoming traffic into paying customers.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className='mx-auto w-full max-w-5xl rounded-2xl p-5 sm:p-6 md:p-8 bg-white mb-4 sm:mb-5 shadow-lg'>
              <Disclosure as='div'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-base sm:text-xl md:text-2xl font-semibold focus:outline-hidden hover:cursor-pointer gap-3'>
                      <span className='text-navy'>How quickly can we expect to see results?</span>
                      <div
                        className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-sm sm:text-base text-black/65 pt-4 mt-4 sm:mt-6 font-normal text-left border-t border-slate-200 leading-relaxed'>
                      <div className='lg:max-w-70%'>
                        Our onboarding, tracking audit, and initial campaign launch take 7-10 days. Most clients see initial improvements in CTR and CPA within the first 2-3 weeks, followed by aggressive scaling once winning creative and audience combinations are validated.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className='mx-auto w-full max-w-5xl rounded-2xl p-5 sm:p-6 md:p-8 bg-white shadow-lg'>
              <Disclosure as='div'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-base sm:text-xl md:text-2xl font-semibold focus:outline-hidden hover:cursor-pointer gap-3'>
                      <span className='text-navy'>Do you work with international clients across the US, Europe & UAE?</span>
                      <div
                        className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-sm sm:text-base text-black/65 pt-4 mt-4 sm:mt-6 font-normal text-left border-t border-slate-200 leading-relaxed'>
                      <div className='lg:max-w-70%'>
                        Yes, absolutely! We manage multi-currency ad spend ($ USD, € EUR, £ GBP, AED, INR) for clients across North America, the UK, Europe, UAE, and APAC. We support international time zones (EST, GMT, GST, IST), accept worldwide payments via Stripe, Wise and International Bank Wire, and deploy localized creative campaigns including Global TikTok Ads.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

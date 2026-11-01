'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const statsData = [
  {
    value: '₹13 Lakh+',
    label: 'Ad Spend Managed',
    sublabel: 'Meta & Google Ads',
    description:
      'Profitable ad spend strategically deployed across Meta Ads & Google Ads with consistent positive ROI.',
    icon: 'tabler:chart-arrows-vertical',
    badge: 'Paid Performance',
  },
  {
    value: '10,500+',
    label: 'Qualified Leads Generated',
    sublabel: 'Avg. CPL ₹110 – ₹130',
    description:
      'High-intent inquiries and verified business leads delivered across clients while keeping acquisition costs strictly optimized.',
    icon: 'tabler:users-group',
    badge: 'Lead Generation',
  },
  {
    value: '4.4x',
    label: 'Average Blended ROAS',
    sublabel: 'High ROI Campaigns',
    description:
      'Multi-channel conversion funnels and creative testing matrices engineered to multiply ad spend into predictable revenue.',
    icon: 'tabler:trending-up',
    badge: 'ROI / Profit',
  },
  {
    value: '250%+',
    label: 'SEO Organic Growth',
    sublabel: 'Compounding Search Traffic',
    description:
      'Top-page Google keyword dominance, technical SEO audits, and content clustering driving consistent inbound leads.',
    icon: 'tabler:search',
    badge: 'Organic Search',
  },
]

const Work = () => {
  return (
    <section
      id='impact'
      className="relative dark:bg-darkmode py-20 bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center after:absolute after:w-1/3 after:h-1/3 after:bg-[url('/images/wework/vector.svg')] after:bg-no-repeat after:top-28 after:-right-12 after:-z-10">
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <div className='inline-block py-2 px-5 bg-primary/15 rounded-full mb-4'>
            <p className='text-primary text-sm font-bold tracking-widest uppercase'>
              PROVEN TRACK RECORD & IMPACT
            </p>
          </div>
          <h2 className='text-black dark:text-white !text-2xl sm:!text-4xl lg:!text-5xl font-extrabold tracking-tight leading-tight'>
            Numbers That Define Our Global Performance.
          </h2>
          <p className='text-black/60 dark:text-white/60 text-base sm:text-lg mt-4 max-w-2xl mx-auto'>
            We don’t believe in vanity metrics. Here is the real impact we have delivered for scaling brands across North America, Europe, UAE & Asia across multi-market ad spend and conversion funnels.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {statsData.map((item, index) => (
            <div
              key={index}
              className='bg-white dark:bg-darkHeroBg border border-border/80 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group'>
              <div>
                <div className='flex items-center justify-between mb-6'>
                  <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                    <Icon icon={item.icon} width='28' height='28' />
                  </div>
                  <span className='text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 py-1 px-3 rounded-full'>
                    {item.badge}
                  </span>
                </div>

                <h3 className='text-4xl lg:text-5xl font-extrabold text-black dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-300'>
                  {item.value}
                </h3>
                <h4 className='text-lg font-bold text-black dark:text-white mb-1'>
                  {item.label}
                </h4>
                <p className='text-xs font-semibold text-primary mb-3'>
                  {item.sublabel}
                </p>
                <p className='text-sm text-black/60 dark:text-white/60 leading-relaxed'>
                  {item.description}
                </p>
              </div>

              <div className='mt-6 pt-4 border-t border-border/60 flex items-center text-xs font-semibold text-black/50 dark:text-white/50'>
                <Icon icon='tabler:circle-check-filled' className='text-green-500 mr-1.5' width='16' />
                <span>Verified Client Metrics</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className='mt-16 bg-gradient-to-r from-primary to-deep-slate rounded-3xl p-8 lg:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl'>
          <div>
            <h4 className='text-2xl lg:text-3xl font-extrabold mb-2 text-white'>
              Ready to grow your numbers with Astria & Co?
            </h4>
            <p className='text-white/80 text-base max-w-2xl'>
              Book a 1-on-1 strategy call with our growth team to audit your ad accounts and find untapped revenue opportunities.
            </p>
          </div>
          <Link
            href='#join-us'
            className='whitespace-nowrap bg-white text-primary hover:bg-black hover:text-white font-bold py-4 px-8 rounded-full text-base transition-all duration-300 shadow-md hover:cursor-pointer'>
            Get Free Audit
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Work

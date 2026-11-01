'use client'

import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import toast from 'react-hot-toast'
import { useCurrency } from '@/app/context/CurrencyContext'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const COUNTRY_CODES = [
  { code: '+1', country: 'US' },
  { code: '+44', country: 'UK' },
  { code: '+971', country: 'UAE' },
  { code: '+91', country: 'IN' },
  { code: '+49', country: 'DE' },
  { code: '+33', country: 'FR' },
  { code: '+31', country: 'NL' },
  { code: '+61', country: 'AU' },
  { code: '+65', country: 'SG' },
  { code: '+966', country: 'SA' },
  { code: '+353', country: 'IE' },
  { code: '+41', country: 'CH' },
  { code: '+64', country: 'NZ' },
]

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { currency, formatPrice } = useCurrency()
  const [countryCode, setCountryCode] = useState(currency === 'INR' ? '+91' : '+1')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    package: 'Startup Growth Retainer',
    budget: '$1,000 – $5,000 / mo',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      toast.error('Please enter your full name')
      return
    }
    const fullPhone = phoneNumber.trim() ? `${countryCode} ${phoneNumber.trim()}` : ''
    if (!fullPhone && !formData.email.trim()) {
      toast.error('Please provide either your phone number or email')
      return
    }

    setLoading(true)
    try {
      const payload = {
        name: formData.name,
        businessName: formData.businessName,
        phone: fullPhone,
        email: formData.email,
        service: formData.package,
        budget: formData.budget,
        message: formData.message,
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        toast.success('Inquiry submitted successfully!')
        setIsSuccess(true)
      } else {
        toast.error(data.error || 'Failed to submit form.')
      }
    } catch (err) {
      console.error('Contact form submission error:', err)
      toast.error('Something went wrong. Please connect with us directly on WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  const handleResetAndClose = () => {
    setIsSuccess(false)
    setPhoneNumber('')
    setFormData({
      name: '',
      businessName: '',
      email: '',
      package: 'Startup Growth Retainer',
      budget: '$1,000 – $5,000 / mo',
      message: '',
    })
    onClose()
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn'>
      <div
        className='relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-lg shadow-2xl p-5 sm:p-7 border border-slate-200 text-left my-auto'
        onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className='absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-800 p-1.5 rounded-md hover:bg-slate-100 transition-colors cursor-pointer'
          aria-label='Close Modal'>
          <Icon icon='tabler:x' width='20' height='20' />
        </button>

        {isSuccess ? (
          <div className='text-center py-4'>
            <div className='w-12 h-12 rounded-md bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-300'>
              <Icon icon='tabler:check' width='28' height='28' />
            </div>
            <h3 className='text-xl sm:text-2xl font-bold text-slate-900 mb-1.5 tracking-tight'>
              Growth Consultation Scheduled
            </h3>
            <p className='text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-5 leading-relaxed'>
              Your retainer inquiry has been logged. Our performance strategist will review your goals and reach out within 2 hours.
            </p>

            <div className='bg-slate-50 p-4 rounded-md mb-5 text-left border border-slate-200'>
              <p className='text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2'>
                Direct Communication Channels:
              </p>
              <div className='space-y-2 text-xs sm:text-sm'>
                <p className='flex items-center gap-2'>
                  <Icon icon='tabler:mail' className='text-primary shrink-0' width='16' height='16' />
                  <a href='mailto:contact@astria.co.in' className='hover:underline font-semibold text-slate-900'>
                    contact@astria.co.in
                  </a>
                </p>
                <p className='flex items-center gap-2'>
                  <Icon icon='tabler:brand-whatsapp' className='text-emerald-500 shrink-0' width='16' height='16' />
                  <a
                    href='https://wa.me/919220133918?text=Hi%20Astria%20%26%20Co%2C%20I%20have%20submitted%20the%20growth%20package%20inquiry.'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline font-semibold text-emerald-600'>
                    +91 92201 33918 (WhatsApp Business)
                  </a>
                </p>
                <p className='flex items-center gap-2'>
                  <Icon icon='tabler:brand-instagram' className='text-rose-500 shrink-0' width='16' height='16' />
                  <a
                    href='https://www.instagram.com/astriacreative.co/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline font-medium text-slate-900'>
                    @astriacreative.co
                  </a>
                </p>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className='w-full py-3 bg-primary hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-md'>
              Close
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className='mb-4 pr-6'>
              <span className='text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-sm inline-block mb-1'>
                Worldwide Growth Retainers
              </span>
              <h3 className='text-xl sm:text-2xl font-black text-slate-900 tracking-tight'>
                Astria & Co
              </h3>
              <p className='text-xs text-slate-500 mt-0.5'>
                Select your package below and our growth strategists will prepare your custom acquisition roadmap.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className='space-y-3'>
              {/* Full Name */}
              <div>
                <label className='block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1'>
                  Your Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  required
                  placeholder='Full Name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition'
                />
              </div>

              {/* Brand & Phone in 2 cols */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3'>
                <div>
                  <label className='block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1'>
                    Business / Brand Name
                  </label>
                  <input
                    type='text'
                    placeholder='Company Name'
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className='w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition'
                  />
                </div>

                <div>
                  <label className='block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1'>
                    Phone / WhatsApp <span className='text-red-500'>*</span>
                  </label>
                  <div className='flex'>
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className='px-2 py-2 bg-slate-100 border border-r-0 border-slate-300 rounded-l-md text-xs font-bold text-slate-800 cursor-pointer focus:outline-none shrink-0'>
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code + c.country} value={c.code}>
                          {c.code} ({c.country})
                        </option>
                      ))}
                    </select>
                    <input
                      type='tel'
                      required
                      placeholder='Phone number'
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className='grow min-w-0 px-3 py-2 border border-slate-300 rounded-r-md text-xs sm:text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition'
                    />
                  </div>
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label className='block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1'>
                  Work Email Address
                </label>
                <input
                  type='email'
                  placeholder='name@company.com'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition'
                />
              </div>

              {/* Package & Ad Budget */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3'>
                <div>
                  <label className='block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1'>
                    Select Growth Package
                  </label>
                  <select
                    value={formData.package}
                    onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                    className='w-full px-2.5 py-2 rounded-md border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary transition cursor-pointer font-medium'>
                    <option value='Startup Growth Retainer'>
                      Startup ({formatPrice('Startup', false)}/mo)
                    </option>
                    <option value='Business Scaling Retainer'>
                      Business ({formatPrice('Business', false)}/mo)
                    </option>
                    <option value='Enterprise Domination Retainer'>
                      Enterprise ({formatPrice('Enterprise', false)}/mo)
                    </option>
                    <option value='Custom Global Enterprise Scale'>
                      Custom Enterprise Scale
                    </option>
                  </select>
                </div>

                <div>
                  <label className='block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1'>
                    Monthly Ad Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className='w-full px-2.5 py-2 rounded-md border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary transition cursor-pointer font-medium'>
                    <option>Under $1,000 / mo</option>
                    <option>$1,000 – $5,000 / mo</option>
                    <option>$5,000 – $15,000 / mo</option>
                    <option>$15,000 – $50,000+ / mo</option>
                    <option>Flexible / Exploring Options</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA Button (Solid Blue with Bold White Text) */}
              <div className='pt-1.5'>
                <button
                  type='submit'
                  disabled={loading}
                  className='w-full py-3 bg-primary hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60'>
                  {loading ? (
                    <>
                      <Icon icon='tabler:loader-2' className='animate-spin' width='16' height='16' />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Retainer Proposal</span>
                      <Icon icon='tabler:arrow-right' width='16' height='16' />
                    </>
                  )}
                </button>
              </div>

              {/* Direct channels footer */}
              <div className='pt-1 flex flex-wrap items-center justify-center gap-2.5 text-[11px] text-slate-500'>
                <a
                  href='https://wa.me/919220133918?text=Hi%20Astria%20%26%20Co'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-emerald-600 font-semibold hover:underline flex items-center gap-1'>
                  <Icon icon='tabler:brand-whatsapp' width='13' height='13' />
                  <span>+91 92201 33918</span>
                </a>
                <span>•</span>
                <a href='mailto:contact@astria.co.in' className='text-primary font-semibold hover:underline'>
                  contact@astria.co.in
                </a>
                <span>•</span>
                <span className='text-slate-400'>Global Client Desk</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactModal

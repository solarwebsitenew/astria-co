'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useCurrency, CURRENCIES, CurrencyCode } from '@/app/context/CurrencyContext'
import { Icon } from '@iconify/react'

interface CurrencySelectorProps {
  variant?: 'light' | 'dark'
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ variant = 'light' }) => {
  const { currency, setCurrency, config } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isDark = variant === 'dark'

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md border text-xs font-bold transition-all cursor-pointer ${
          isDark
            ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
            : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
        }`}
        aria-label='Select Currency'>
        <Icon icon={config.flagIcon} width='16' height='16' className='rounded-full shrink-0' />
        <span className={isDark ? 'text-white font-bold' : 'text-slate-900 font-bold'}>
          {config.code}
        </span>
        <span className={`hidden sm:inline text-xs ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
          ({config.symbol.trim()})
        </span>
        <Icon
          icon='tabler:chevron-down'
          width='13'
          height='13'
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        />
      </button>

      {/* Dropdown Menu Popup */}
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-md shadow-2xl py-1.5 z-50 animate-fadeIn ${
            isDark
              ? 'bg-[#0f172a] border border-slate-700 text-white'
              : 'bg-white border border-slate-200 text-slate-900 shadow-slate-300/50'
          }`}>
          <div
            className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border-b ${
              isDark
                ? 'text-slate-400 border-slate-800'
                : 'text-slate-500 border-slate-100'
            }`}>
            Select Invoicing Currency
          </div>

          {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => {
            const item = CURRENCIES[c]
            const isSelected = c === currency
            return (
              <button
                key={c}
                onClick={() => {
                  setCurrency(c)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-primary/20 text-primary font-bold'
                      : 'bg-primary/10 text-primary font-bold'
                    : isDark
                    ? 'text-slate-200 hover:bg-white/10 hover:text-white'
                    : 'text-slate-800 hover:bg-slate-100 hover:text-slate-950'
                }`}>
                <span className='flex items-center gap-2.5'>
                  <Icon icon={item.flagIcon} width='18' height='18' className='rounded-full shrink-0' />
                  <span
                    className={`font-semibold ${
                      isSelected
                        ? 'text-primary font-bold'
                        : isDark
                        ? 'text-white'
                        : 'text-slate-900'
                    }`}>
                    {item.code}
                  </span>
                  <span
                    className={`text-[11px] ${
                      isSelected
                        ? 'text-primary/80 font-medium'
                        : isDark
                        ? 'text-slate-400'
                        : 'text-slate-500'
                    }`}>
                    ({item.symbol.trim()})
                  </span>
                </span>
                {isSelected && (
                  <Icon icon='tabler:check' width='16' height='16' className='text-primary shrink-0' />
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CurrencySelector

'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AED' | 'INR'

export interface CurrencyConfig {
  code: CurrencyCode
  symbol: string
  label: string
  flag: string
  flagIcon: string
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', label: 'USD ($)', flag: '🇺🇸', flagIcon: 'circle-flags:us' },
  EUR: { code: 'EUR', symbol: '€', label: 'EUR (€)', flag: '🇪🇺', flagIcon: 'circle-flags:eu' },
  GBP: { code: 'GBP', symbol: '£', label: 'GBP (£)', flag: '🇬🇧', flagIcon: 'circle-flags:gb' },
  AED: { code: 'AED', symbol: 'AED ', label: 'AED (د.إ)', flag: '🇦🇪', flagIcon: 'circle-flags:ae' },
  INR: { code: 'INR', symbol: '₹', label: 'INR (₹)', flag: '🇮🇳', flagIcon: 'circle-flags:in' },
}

export interface PlanPricing {
  Startup: { monthly: number; yearly: number }
  Business: { monthly: number; yearly: number }
  Enterprise: { monthly: number; yearly: number }
}

export const PLAN_PRICES: Record<CurrencyCode, PlanPricing> = {
  USD: {
    Startup: { monthly: 180, yearly: 162 },
    Business: { monthly: 300, yearly: 270 },
    Enterprise: { monthly: 600, yearly: 540 },
  },
  EUR: {
    Startup: { monthly: 165, yearly: 148 },
    Business: { monthly: 275, yearly: 248 },
    Enterprise: { monthly: 550, yearly: 495 },
  },
  GBP: {
    Startup: { monthly: 140, yearly: 126 },
    Business: { monthly: 235, yearly: 212 },
    Enterprise: { monthly: 470, yearly: 423 },
  },
  AED: {
    Startup: { monthly: 660, yearly: 594 },
    Business: { monthly: 1100, yearly: 990 },
    Enterprise: { monthly: 2200, yearly: 1980 },
  },
  INR: {
    Startup: { monthly: 15000, yearly: 13500 },
    Business: { monthly: 25000, yearly: 22500 },
    Enterprise: { monthly: 50000, yearly: 45000 },
  },
}

interface CurrencyContextType {
  currency: CurrencyCode
  setCurrency: (c: CurrencyCode) => void
  config: CurrencyConfig
  formatPrice: (plan: 'Startup' | 'Business' | 'Enterprise', isYearly: boolean) => string
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
  config: CURRENCIES.USD,
  formatPrice: () => '$180',
})

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<CurrencyCode>('USD')

  // Load from localStorage if present
  useEffect(() => {
    const saved = localStorage.getItem('astria_currency') as CurrencyCode
    if (saved && CURRENCIES[saved]) {
      setCurrency(saved)
    }
  }, [])

  const handleSetCurrency = (c: CurrencyCode) => {
    setCurrency(c)
    if (typeof window !== 'undefined') {
      localStorage.setItem('astria_currency', c)
    }
  }

  const formatPrice = (plan: 'Startup' | 'Business' | 'Enterprise', isYearly: boolean) => {
    const planObj = PLAN_PRICES[currency][plan]
    const amount = isYearly ? planObj.yearly : planObj.monthly
    const cfg = CURRENCIES[currency]
    const formattedNum = currency === 'INR' ? amount.toLocaleString('en-IN') : amount.toLocaleString('en-US')
    return `${cfg.symbol}${formattedNum}`
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency: handleSetCurrency,
        config: CURRENCIES[currency],
        formatPrice,
      }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => useContext(CurrencyContext)


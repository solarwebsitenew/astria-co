'use client'
import React, { createContext, useContext, useState } from 'react'
import ContactModal from '@/app/components/ContactModal'

interface ContactModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export const ContactModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  )
}

export const useContactModal = () => useContext(ContactModalContext)


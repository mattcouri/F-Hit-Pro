import React, { createContext, useContext, useState } from 'react'

interface PrivacyContextType {
  showValues: boolean
  togglePrivacy: () => void
}

const PrivacyContext = createContext<PrivacyContextType | undefined>(undefined)

export const PrivacyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showValues, setShowValues] = useState(false)

  const togglePrivacy = () => {
    setShowValues(prev => !prev)
  }

  return (
    <PrivacyContext.Provider value={{ showValues, togglePrivacy }}>
      {children}
    </PrivacyContext.Provider>
  )
}

export const usePrivacy = () => {
  const context = useContext(PrivacyContext)
  if (!context) {
    throw new Error('usePrivacy must be used within PrivacyProvider')
  }
  return context
}

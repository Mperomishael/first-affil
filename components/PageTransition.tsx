'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const loaderTimer = setTimeout(() => setIsLoading(false), 2000)
    const contentTimer = setTimeout(() => setShowContent(true), 2000)
    
    return () => {
      clearTimeout(loaderTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

function Loader() {
  return (
    <div className="fixed inset-0 bg-navy flex items-center justify-center">
      <div className="relative w-32 h-32">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-4 border-gold rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 2, 2],
              opacity: [1, 0.5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: 0,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: 0, ease: "linear" }}
        >
          <i className="fas fa-infinity text-4xl text-gold" />
        </motion.div>
      </div>
    </div>
  )
}


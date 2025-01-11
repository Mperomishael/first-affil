'use client'

import { motion } from 'framer-motion'

export default function LocationMap() {
  const openNJMap = () => {
    window.open('https://www.google.com/maps/@40.0583238,-74.4056612,8z/data=!3m1!1e3', '_blank')
  }

  return (
    <motion.div
      className="fixed bottom-20 right-4 z-40 bg-navy bg-opacity-90 p-3 rounded-full shadow-lg cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={openNJMap}
    >
      <i className="fas fa-map-marker-alt text-gold text-2xl" />
    </motion.div>
  )
}


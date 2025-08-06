import React from 'react'
import { motion } from 'framer-motion'

const LoadingSpinner = ({ size = 'md', color = 'primary' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const colorClasses = {
    primary: 'border-[#D4BF7E]',
    white: 'border-white',
    navy: 'border-[#192A55]'
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  )
}

export const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-[#192A55] via-[#1a2c5a] to-[#0f1a3a] flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-[#D4BF7E] to-[#E8D5A3] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#192A55]">D&D</span>
          </div>
          <h2 className="text-2xl font-bold gradient-text">DOt&Dash</h2>
        </motion.div>
        <LoadingSpinner size="lg" color="primary" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 mt-4"
        >
          Loading amazing experiences...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingSpinner

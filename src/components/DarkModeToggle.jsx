import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true) // Default to dark mode

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-r from-[#192A55] to-[#1a2c5a]' 
          : 'bg-gradient-to-r from-[#D4BF7E] to-[#E8D5A3]'
      }`}
      aria-label="Toggle dark mode"
    >
      <motion.div
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          isDark ? 'bg-[#D4BF7E]' : 'bg-[#192A55]'
        }`}
        animate={{
          x: isDark ? 0 : 24
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
      >
        {isDark ? (
          <Moon size={14} className="text-[#192A55]" />
        ) : (
          <Sun size={14} className="text-[#D4BF7E]" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default DarkModeToggle

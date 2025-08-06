import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

// Fade in animation component
export const FadeIn = ({ children, direction = 'up', delay = 0, duration = 0.6 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation
export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
export const StaggerItem = ({ children, className = '' }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

// Scale on hover component
export const ScaleOnHover = ({ children, scale = 1.05, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating animation component
export const FloatingElement = ({ children, duration = 6, delay = 0, amplitude = 20 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    >
      {children}
    </motion.div>
  )
}

// Parallax scroll component
export const ParallaxElement = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null)
  
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = scrolled * speed
      element.style.transform = `translateY(${parallax}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Typewriter effect component
export const TypewriterText = ({ text, delay = 0, speed = 50 }) => {
  const [displayText, setDisplayText] = React.useState('')
  const [currentIndex, setCurrentIndex] = React.useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, speed])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  )
}

// Magnetic button effect
export const MagneticButton = ({ children, strength = 0.3, className = '' }) => {
  const ref = useRef(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  FloatingElement,
  ParallaxElement,
  TypewriterText,
  MagneticButton
}

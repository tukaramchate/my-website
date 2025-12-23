import React, { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-5 w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 flex items-center justify-center bg-picto-primary hover:bg-picto-primary-dark text-white rounded-full transition-all duration-500 hover:scale-120 z-50 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <FiArrowUp size={24} />
    </button>
  )
}

export default ScrollToTop

import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { id: 1, name: 'Home', url: 'introduction' },
  { id: 2, name: 'About', url: 'profile' },
  { id: 3, name: 'Experience', url: 'experience' },
  { id: 4, name: 'Portfolio', url: 'portfolio' },
  { id: 5, name: 'Skills', url: 'skills' },
  { id: 6, name: 'Education', url: 'education' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-soft-white border-b border-gray-300' : 'bg-white'
      }`}
    >
      <div className="content">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-14 sm:h-14 bg-picto-primary rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-2xl">
              TC
            </div>
            <span className="text-2xl sm:text-[32px] font-semibold ml-3">Tukaram</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                spy={true}
                smooth={true}
                duration={1000}
                offset={-140}
                activeClass="!bg-picto-primary !text-white"
                className="px-5 py-3 mx-1 rounded-lg hover:text-picto-primary cursor-pointer transition-all duration-300 text-[16px] font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={900}
              className="ml-4 px-6 py-3 bg-picto-primary text-white rounded-lg hover:bg-picto-primary-dark transition-all duration-300 cursor-pointer font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                spy={true}
                smooth={true}
                duration={1000}
                offset={-140}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={900}
              onClick={() => setIsOpen(false)}
              className="block mt-2 px-4 py-3 bg-picto-primary text-white rounded-lg text-center cursor-pointer"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

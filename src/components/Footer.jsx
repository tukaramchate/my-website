import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

const Footer = () => {
  const navItems = [
    { id: 1, name: 'Home', url: 'introduction' },
    { id: 2, name: 'About', url: 'profile' },
    { id: 3, name: 'Experience', url: 'experience' },
    { id: 4, name: 'Portfolio', url: 'portfolio' },
    { id: 5, name: 'Skills', url: 'skills' },
    { id: 6, name: 'Education', url: 'education' },
    { id: 7, name: 'Contact', url: 'contact' },
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/tukaram-chate/' },
    { icon: <FaGithub />, url: 'https://github.com/tukaramchate' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/tukaramchate397' },
    { icon: <SiHackerrank />, url: 'https://www.hackerrank.com/profile/tukaramchate397' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-25 md:pt-40 content text-neutral-200">
      <div className="flex flex-col justify-center items-center h-full w-full space-y-6">
        {/* Logo and Navigation in one line */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
          {/* Logo */}
          <a href="#introduction" className="flex items-center">
            <div className="w-8 h-8 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center text-picto-primary font-bold text-lg sm:text-2xl">
              TC
            </div>
            <span className="text-2xl sm:text-[32px] font-semibold ml-3">Tukaram</span>
          </a>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.url}`}
                className="text-xs sm:text-base hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links & Credit */}
      <div className="flex flex-col items-center mt-8 space-y-4">
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white hover:text-picto-primary transition-all duration-300 text-lg"
            >
              {social.icon}
            </a>
          ))}
        </div>
        {/* Copyright */}
        <p className="text-white text-center text-xs sm:text-sm mt-4 pb-10">
          Copyright © {currentYear} Tukaram Chate. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

const About = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/tukaram-chate/' },
    { icon: <FaGithub />, url: 'https://github.com/tukaramchate' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/tukaramchate397' },
    { icon: <SiHackerrank />, url: 'https://www.hackerrank.com/profile/tukaramchate397' },
  ]

  return (
    <section
      id="profile"
      className="relative -bottom-20 lg:-bottom-28 z-10 mb-5 xl:mb-0"
    >
      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-10 md:p-16 lg:p-20 xl:p-28">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Profile Image */}
          <div className="w-full md:w-auto">
            <div className="max-w-106 h-117 rounded-xl overflow-hidden">
              <img
                src="/images/person.jpg"
                alt="Tukaram Chate Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social Media */}
            <div className="flex justify-center gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-soft-white rounded-full hover:bg-picto-primary hover:text-white transition-all duration-300 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Tukaram Manohar Chate
            </h2>
            <p className="text-picto-primary text-lg font-medium mb-4">
              Java Developer & Software Engineer
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Enthusiastic and curious final-year Computer Engineering student with a strong foundation in Java, Python, and SQL. Currently working as a Java Developer Intern at Infosys Springboard, contributing to automated test execution frameworks.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Passionate about software development, problem-solving, and continuously learning to build efficient and scalable solutions using Spring Boot, MySQL, and modern development practices.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-picto-primary text-white rounded-lg hover:bg-picto-primary-dark transition-all duration-300 font-medium text-center"
              >
                My Projects
              </a>
              <a
                href="/resume/cv.pdf"
                download
                className="px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-picto-primary hover:text-picto-primary transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

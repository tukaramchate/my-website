import React, { useState } from 'react'
import { FiMapPin, FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here (e.g., send to backend or email service)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', location: '', budget: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: 'Address',
      description: 'Pune, Maharashtra, India',
    },
    {
      icon: <FiMail />,
      title: 'My Email',
      description: 'tukaramchate397@gmail.com',
    },
    {
      icon: <FiPhone />,
      title: 'Call Me Now',
      description: '+91-9322942240',
    },
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/tukaram-chate/' },
    { icon: <FaGithub />, url: 'https://github.com/tukaramchate' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/tukaramchate397' },
    { icon: <SiHackerrank />, url: 'https://www.hackerrank.com/profile/tukaramchate397' },
  ]

  return (
    <section id="contact" className="relative -bottom-15 -mt-15 z-10 px-4">
      <div className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-25">
          {/* Left Side - Info */}
          <div className="flex-1">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-semibold text-[#132238] mb-4 text-center lg:text-left">
                Let's discuss your Project
              </h2>
              <p className="text-xs sm:text-sm md:text-lg text-center lg:text-left text-soft-dark mb-8">
                I'm available for freelance work. Drop me a line if you have a
                project you think I'd be a good fit for.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:flex sm:flex-wrap lg:flex-col sm:gap-8 lg:gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 sm:flex-1 lg:flex-none">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#EDD8FF80] text-[#A53DFF] rounded-lg text-xl flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">{info.title}</h3>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex justify-center lg:justify-start gap-4">
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

          {/* Right Side - Form */}
          <div className="flex-1 mb-8 lg:mb-0">
            <p className="text-xs sm:text-sm md:text-lg text-center lg:text-left text-soft-dark mb-6">
              I'm always open to discussing product design work or partnership
              opportunities.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 border-0 border-b-2 border-[#E6E8EB] focus:border-picto-primary focus:outline-none text-base placeholder:text-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 border-0 border-b-2 border-[#E6E8EB] focus:border-picto-primary focus:outline-none text-base placeholder:text-gray-400"
              />
              <input
                type="text"
                name="location"
                placeholder="Location*"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 border-0 border-b-2 border-[#E6E8EB] focus:border-picto-primary focus:outline-none text-base placeholder:text-gray-400"
              />
              <input
                type="text"
                name="budget"
                placeholder="Budget*"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 border-0 border-b-2 border-[#E6E8EB] focus:border-picto-primary focus:outline-none text-base placeholder:text-gray-400"
              />
              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-0 py-3 border-0 border-b-2 border-[#E6E8EB] focus:border-picto-primary focus:outline-none text-base placeholder:text-gray-400 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-picto-primary text-white rounded-lg hover:bg-picto-primary-dark transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-lg"
              >
                Submit Now <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

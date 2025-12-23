import React from 'react'
import { FiMonitor, FiLayout, FiCode } from 'react-icons/fi'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Java Development',
      description: 'Building robust backend applications using Java, Spring Boot, and OOP principles. Experienced in creating RESTful APIs, automated testing frameworks, and enterprise-grade solutions.',
      icon: <FiCode />,
    },
    {
      id: 2,
      title: 'Full-Stack Development',
      description: 'Developing end-to-end web applications with React.js frontend and Spring Boot backend. Proficient in creating responsive user interfaces and efficient database management with MySQL.',
      icon: <FiLayout />,
    },
    {
      id: 3,
      title: 'Problem Solving & DSA',
      description: 'Strong foundation in Data Structures and Algorithms with 230+ problems solved on LeetCode. Passionate about writing clean, efficient code and solving complex technical challenges.',
      icon: <FiMonitor />,
    },
  ]

  return (
    <section id="services" className="content grid md:grid-cols-2 py-10 md:py-15 lg:py-37.5">
      {/* Left Content */}
      <div className="flex flex-col justify-between h-fit md:pr-8 lg:pr-35.75 text-center md:text-left mb-8 md:mb-0">
        <h2 className="section-title">What I do?</h2>
        <div className="mt-6 text-sm">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in designing user experiences, crafting engaging
            interfaces, and building robust web applications that deliver value
            and usability.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="mailto:tukaramchate397@gmail.com"
          className="mt-5 md:mt-12.5 px-6 py-3 bg-picto-primary text-white rounded-lg hover:bg-picto-primary-dark transition-all duration-300 font-semibold inline-block w-fit mx-auto md:mx-0"
        >
          Say Hello!
        </a>
      </div>

      {/* Right Content - Services */}
      <div className="space-y-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-[#EDD8FF80] text-[#A53DFF] rounded-lg text-2xl flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

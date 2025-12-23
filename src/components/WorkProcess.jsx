import React, { useState } from 'react'
import { FiSearch, FiPenTool, FiCode, FiZap } from 'react-icons/fi'

const WorkProcess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const steps = [
    {
      id: 1,
      title: 'Research',
      description: 'Design meets function in every pixel, blending clarity with intuitive motion.',
      icon: <FiSearch />,
    },
    {
      id: 2,
      title: 'Analyze',
      description: 'Crafting clean, thoughtful interfaces where form flows seamlessly into function and clarity.',
      icon: <FiPenTool />,
    },
    {
      id: 3,
      title: 'Design',
      description: 'I craft digital products where thoughtful design meets performance-driven, responsive development.',
      icon: <FiCode />,
    },
    {
      id: 4,
      title: 'Launch',
      description: 'I craft digital products where thoughtful design meets performance-driven, responsive development.',
      icon: <FiZap />,
    },
  ]

  return (
    <section id="work-process" className="content grid xl:grid-cols-2 xl:items-center py-5 md:py-10 lg:py-25 xl:py-35">
      {/* Left Content */}
      <div className="lg:pr-10 xl:pr-35.75 mb-8 xl:mb-0">
        <h2 className="section-title text-center xl:text-left">Work Process</h2>
        <p className="mt-6 mb-4 text-sm md:text-[18px] font-normal text-center xl:text-left text-gray-500">
          Driven by design and powered by code, I create digital interfaces that
          feel intuitive and perform seamlessly. Every layout, animation, and
          component is crafted with intention — merging usability with visual
          clarity.
        </p>
        <p className="mt-6 text-sm md:text-[18px] font-normal text-center xl:text-left text-gray-500">
          From initial concept to polished product, I balance user needs with
          technical precision to deliver experiences that work beautifully across
          all devices.
        </p>
      </div>

      {/* Right Content - Steps */}
      <div className="grid sm:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-11 h-11 sm:w-18 sm:h-18 flex items-center justify-center rounded-md mb-4 transition-all duration-300 ${
                hoveredIndex === index ? 'bg-picto-primary text-white' : 'bg-[#EDD8FF80] text-[#A53DFF]'
              }`}
            >
              <span className="text-2xl sm:text-3xl">{step.icon}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkProcess

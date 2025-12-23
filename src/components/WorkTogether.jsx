import React from 'react'

const WorkTogether = () => {
  return (
    <section className="content py-20 md:py-30 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
          Let's work together on your next project
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-8">
          I'm available for freelance work. Let's collaborate and create something amazing together.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-white text-picto-primary rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}

export default WorkTogether

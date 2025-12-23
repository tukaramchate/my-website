import React from 'react'

const Hero = () => {
  const stats = [
    { id: 1, title: 'Experience', value: '1+ Y.' },
    { id: 2, title: 'Problems Solved', value: '230+' },
    { id: 3, title: 'Projects', value: '10+' },
  ]

  return (
    <section id="introduction" className="flex flex-col-reverse lg:flex-row justify-between items-center pt-10 lg:pt-31.5 lg:mb-27.5 gap-8">
      {/* Text Content */}
      <div className="w-full flex flex-col justify-between text-center lg:text-left">
        <div className="pt-13 w-full">
          <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            Hello, I'm
            <span className="block mt-2">Tukaram Chate</span>
          </p>
          <p className="text-sm sm:text-lg lg:text-[18px] my-6 text-gray-600">
            I'm a <span className="bg-highlight">Java Developer</span>{' '}
            and <span className="bg-highlight">Software Engineer</span> based in
            Pune, India. Enthusiastic final-year Computer Engineering student passionate about building efficient and scalable solutions through problem-solving and continuous learning.
          </p>
          <div className="text-center lg:text-left">
            <a
              href="mailto:tukaramchate397@gmail.com"
              className="inline-block px-6 py-3 bg-picto-primary text-white rounded-lg hover:bg-picto-primary-dark transition-all duration-300 font-medium"
            >
              Say Hello!
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-1 w-fit mx-auto lg:mx-0 mt-10">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center min-w-[100px] sm:min-w-[120px]"
              >
                <p className="text-2xl sm:text-3xl font-bold text-picto-primary">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:w-auto max-w-134 aspect-[536/636] relative">
        <img
          src="/images/person.jpg"
          alt="Tukaram Chate"
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  )
}

export default Hero

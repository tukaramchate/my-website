import React from 'react'

const Skills = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', color: 'bg-blue-50' },
    { name: 'HTML', icon: '🌐', color: 'bg-orange-50' },
    { name: 'CSS', icon: '🎨', color: 'bg-blue-50' },
    { name: 'Tailwind CSS', icon: '💨', color: 'bg-cyan-50' },
    { name: 'Next.js', icon: '▲', color: 'bg-gray-50' },
    { name: 'Bootstrap', icon: '🅱️', color: 'bg-purple-50' },
    { name: 'Express', icon: 'E', color: 'bg-gray-50' },
    { name: 'Firebase', icon: '🔥', color: 'bg-orange-50' },
    { name: 'GitHub', icon: '🐙', color: 'bg-gray-50' },
    { name: 'Git', icon: '📦', color: 'bg-orange-50' },
    { name: 'Heroku', icon: '☁️', color: 'bg-purple-50' },
    { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-50' },
    { name: 'jQuery', icon: 'jQ', color: 'bg-blue-50' },
    { name: 'Markdown', icon: '📝', color: 'bg-gray-50' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-50' },
    { name: 'MySQL', icon: '🐬', color: 'bg-blue-50' },
    { name: 'npm', icon: '📦', color: 'bg-red-50' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-50' },
  ]

  return (
    <section id="skills" className="content py-25 bg-soft-white">
      <div className="max-w-135 text-center mx-auto pb-12">
        <h2 className="section-title">I have experience with these technologies</h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`${tech.color} rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <p className="text-sm font-semibold text-gray-700 text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

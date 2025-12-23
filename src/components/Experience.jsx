import React from 'react'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Java Developer Intern',
      company: 'Infosys Springboard',
      period: 'Nov 2025 – Present',
      location: 'Remote',
      type: 'Internship',
      current: true,
      responsibilities: [
        'Contributing to an Automated Test Execution Framework using Java, OOP concepts, and automation workflows',
        'Participating in daily technical sessions on SDLC, automation practices, and quality engineering',
      ],
      technologies: ['Java', 'OOP', 'Spring Boot', 'Maven', 'SDLC', 'Automation Testing'],
    },
    {
      id: 2,
      role: 'Software Engineer Intern',
      company: 'Cub to King IT Solutions',
      period: 'July 2025 – Dec 2025',
      location: 'Pune, India',
      type: 'Internship',
      current: false,
      responsibilities: [
        'Developed and maintained web applications using modern frameworks and technologies',
        'Collaborated with senior developers on full-stack development projects',
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Git', 'REST APIs'],
    },
    {
      id: 3,
      role: 'Management Team Lead',
      company: 'IEEE Student Branch, GHRCEM',
      period: 'Feb 2025 – Present',
      location: 'Pune, India',
      type: 'Volunteer',
      current: true,
      responsibilities: [
        'Organized 5+ technical and cultural events',
        'Supported key student engagement initiatives and achieved Volunteer of the Month recognition three times',
      ],
      technologies: ['Leadership', 'Event Management', 'Team Coordination', 'Public Speaking'],
    },
  ]

  return (
    <section id="experience" className="bg-soft-white py-25">
      <div className="content">
        <div className="text-center mx-auto max-w-144.25 mb-16 pt-20">
          <h2 className="section-title">Work Experience</h2>
          <p className="font-normal text-sm sm:text-[18px] pt-6 text-gray-400">
            Professional journey and hands-on industry experience
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-picto-primary to-transparent"></div>

            {/* Experience Items */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-picto-primary rounded-full border-4 border-white shadow-lg z-10">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-picto-primary animate-ping opacity-75"></span>
                    )}
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 mt-24 md:mt-32">
                    {/* Header */}
                    <div className={`p-5 text-white relative overflow-hidden ${exp.current
                      ? 'bg-gradient-to-br from-picto-primary to-purple-600'
                      : exp.type === 'Volunteer'
                        ? 'bg-gradient-to-br from-green-600 to-green-800'
                        : 'bg-gradient-to-br from-gray-700 to-gray-900'
                      }`}>
                      {exp.current && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                            Current
                          </span>
                        </div>
                      )}
                      <h3 className="text-lg font-bold mb-2 pr-16">{exp.role}</h3>
                      <p className="text-sm opacity-95 mb-3">{exp.company}</p>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center gap-2">
                          <FiCalendar className="text-sm" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin className="text-sm" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiBriefcase className="text-sm" />
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4 className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-4 h-4 flex items-center justify-center bg-picto-primary/10 text-picto-primary rounded-full flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold">✓</span>
                            </div>
                            <p className="text-gray-700 text-xs leading-relaxed">{responsibility}</p>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-purple-50 text-picto-primary rounded text-xs font-medium border border-purple-100 hover:bg-picto-primary hover:text-white hover:border-picto-primary transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            Open to new opportunities and internships in{' '}
            <span className="text-picto-primary font-semibold">
              Java Development, Full-Stack Development, and Software Engineering
            </span>
          </p>
        </div>
      </div>
    </section >
  )
}

export default Experience

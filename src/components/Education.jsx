import React from 'react'
import { FiAward } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'B.Tech - Computer Engineering',
      institution: 'GH Raisoni College of Engineering and Management, Pune',
      period: 'Nov 2022 – July 2026',
      grade: 'CGPA 7.7',
      location: 'Pune, MH',
    },
    {
      id: 2,
      degree: 'HSC (Higher Secondary Certificate)',
      institution: 'Yogeshwari Mahavidyalaya, Ambajogai',
      period: 'June 2020 – March 2022',
      grade: '80%',
      location: 'Ambajogai, MH',
    },
    {
      id: 3,
      degree: 'SSC (Secondary School Certificate)',
      institution: 'Jijamata Vidyalaya, Dharmapuri',
      period: 'June 2015 – March 2020',
      grade: '88%',
      location: 'Dharmapuri, MH',
    },
  ]

  return (
    <section id="education" className="bg-soft-white py-10 md:py-20 lg:py-25">
      <div className="content">
        <div className="text-center mx-auto max-w-144.25 mb-12">
          <h2 className="section-title">Education</h2>
          <p className="font-normal text-sm sm:text-[18px] pt-6 text-gray-400">
            My academic journey and educational qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-picto-primary"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#EDD8FF80] text-[#A53DFF] rounded-lg flex-shrink-0">
                      <FiAward className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-picto-primary font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 text-sm mb-1">
                        📍 {edu.location}
                      </p>
                      <p className="text-gray-500 text-sm">
                        📅 {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:text-right">
                  <span className="inline-block px-4 py-2 bg-picto-primary text-white rounded-full font-semibold text-sm">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

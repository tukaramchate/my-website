import React from 'react'
import { FiAward, FiStar, FiCode, FiTrendingUp } from 'react-icons/fi'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Java Foundation',
      issuer: 'Infosys Springboard',
      icon: <FiAward />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Enterprise-grade AI',
      issuer: 'IBM',
      icon: <FiTrendingUp />,
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: '5 Star in SQL',
      issuer: 'HackerRank',
      icon: <FiStar />,
      color: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: '230+ Problems Solved',
      issuer: 'LeetCode',
      icon: <FiCode />,
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const volunteer = {
    role: 'Management Team Lead',
    organization: 'IEEE Student Branch, GHRCEM',
    period: 'Feb 2025 – Present',
    achievements: [
      'Organized 5+ technical and cultural events',
      'Supported key student engagement initiatives',
      'Achieved Volunteer of the Month recognition three times',
    ],
  }

  return (
    <section id="achievements" className="bg-white py-25">
      <div className="content">
        {/* Achievements */}
        <div className="text-center mx-auto max-w-144.25 mb-12">
          <h2 className="section-title">Achievements</h2>
          <p className="font-normal text-sm sm:text-[18px] pt-6 text-gray-400">
            Recognition and milestones in my learning journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${achievement.color} text-white rounded-xl mb-4 text-2xl mx-auto`}
              >
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">{achievement.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

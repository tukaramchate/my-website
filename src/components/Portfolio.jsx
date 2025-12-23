import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: 'BACKEND DEVELOPMENT',
      title: 'E-Commerce REST API',
      description: 'Full-featured Spring Boot e-commerce backend with JWT authentication, role-based authorization, product management, shopping cart, and order processing. Built with Spring Security, JPA/Hibernate, and MySQL.',
      image: '/images/projects/ecommerce.jpg',
      githubLink: 'https://github.com/tukaramchate/Ecommerce_Project',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
    },
    {
      id: 2,
      category: 'FULL STACK APPLICATION',
      title: 'Quiz App (Spring Boot)',
      description: 'Interactive quiz platform with dynamic question generation, instant scoring, and persistent storage. Features random quiz creation, multiple-choice questions, and RESTful API architecture using Spring Data JPA.',
      image: '/images/projects/quiz-app.jpg',
      githubLink: 'https://github.com/tukaramchate/Quiz-App-Spring',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Spring MVC', 'Lombok'],
    },
    {
      id: 3,
      category: 'DESKTOP APPLICATION',
      title: 'Bank Management System',
      description: 'Console-based banking system with account creation, fund deposits, withdrawals, transfers, and account tracking. Implements core banking operations with persistent data storage and transaction validation.',
      image: '/images/projects/bank-system.jpg',
      githubLink: 'https://github.com/tukaramchate/Bank-Management-System',
      technologies: ['Java', 'MySQL', 'JDBC', 'Swing GUI'],
    },
    {
      id: 4,
      category: 'REAL-TIME APPLICATION',
      title: 'Chat Application',
      description: 'Real-time messaging application built with Spring Boot and WebSocket technology. Features instant message delivery, user presence tracking, and clean, responsive UI for seamless communication.',
      image: '/images/projects/chat-app.jpg',
      githubLink: 'https://github.com/tukaramchate/Chat-App',
      technologies: ['Java', 'Spring Boot', 'WebSocket', 'HTML/CSS'],
    },
    {
      id: 5,
      category: 'FRONTEND DEVELOPMENT',
      title: 'AgriConnect Platform',
      description: 'Modern agricultural platform frontend built with React, Vite, and Tailwind CSS. Features responsive design, optimized performance, and intuitive user interface for connecting farmers with resources.',
      image: '/images/projects/agriconnect.jpg',
      githubLink: 'https://github.com/tukaramchate/Forntend_AgriConnect',
      demoLink: 'https://forntend-agri-connect.vercel.app/',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    },
    {
      id: 6,
      category: 'FRONTEND DEVELOPMENT',
      title: 'E-Commerce Frontend',
      description: 'Modern e-commerce storefront built with React, Vite, and Tailwind CSS. Responsive design with product catalog, shopping cart, and seamless user experience. Deployed on Vercel for optimal performance.',
      image: '/images/projects/ecom-frontend.jpg',
      githubLink: 'https://github.com/tukaramchate/E-com-Frontend',
      demoLink: 'https://bazzar-beryl.vercel.app/',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    },
  ]

  return (
    <section id="portfolio" className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25">
      <div className="text-center mx-auto max-w-144.25 mb-8 xl:mb-17.5">
        <h2 className="section-title">Portfolio</h2>
        <p className="font-normal text-sm sm:text-[18px] pt-6 text-gray-400">
          A showcase of my recent projects, demonstrating full-stack development skills
          with Java, Spring Boot, React, and modern web technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            {/* Project Image */}
            <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-gray-400 z-10">
                <div className="text-4xl mb-2">💻</div>
                <p className="text-xs font-semibold">{project.title}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/10 to-pink-500/10 group-hover:from-picto-primary/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
            </div>

            {/* Project Info */}
            <div className="p-4 sm:p-6">
              <p className="text-picto-primary text-xs font-medium uppercase">{project.category}</p>
              <h3 className="text-gray-900 text-base sm:text-lg font-semibold pt-1 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-5 mb-4">
                {project.description}
              </p>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-50 text-picto-primary text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold text-sm"
                >
                  View Code
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-picto-primary text-white rounded-lg hover:bg-picto-primary-dark transition-all duration-300 font-semibold text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://github.com/tukaramchate?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-picto-primary text-white rounded-lg hover:bg-picto-primary-dark transition-all duration-300 font-semibold"
        >
          View All Projects on GitHub
        </a>
      </div>
    </section>
  )
}

export default Portfolio

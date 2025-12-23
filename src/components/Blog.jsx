import React from 'react'
import { FiMessageCircle } from 'react-icons/fi'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: '22 Oct, 2020',
      comments: 246,
      title: 'Optimizing Interface Components for Performance',
      image: '/images/blog1.jpg',
      link: '#!',
    },
    {
      id: 2,
      date: '22 Oct, 2020',
      comments: 246,
      title: 'Tips for Effective Dashboard Layouts and Usability',
      image: '/images/blog2.jpg',
      link: '#!',
    },
    {
      id: 3,
      date: '22 Oct, 2020',
      comments: 246,
      title: 'How to Visualize Data for Better Product Decisions',
      image: '/images/blog3.jpg',
      link: '#!',
    },
    {
      id: 4,
      date: '22 Oct, 2020',
      comments: 246,
      title: 'Responsive Design: Adapting to All Devices Seamlessly',
      image: '/images/blog4.jpg',
      link: '#!',
    },
  ]

  return (
    <section id="blog" className="content py-25 relative">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <h2 className="section-title">Blog</h2>
        <p className="text-xs sm:text-[16px] md:text-lg text-gray-400 mt-6">
          Check out my recent blog posts where I share insights on design,
          development, and the latest industry trends.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Blog Image */}
            <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">📝</div>
                <p className="text-xs">Blog {post.id}</p>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <FiMessageCircle /> {post.comments}
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-4 group-hover:text-picto-primary transition-colors duration-300">
                {post.title}
              </h3>
              <a
                href={post.link}
                className="text-picto-primary font-medium text-sm hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog

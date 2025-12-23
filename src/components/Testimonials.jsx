import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      message: 'Working with this team was a fantastic experience. Their attention to detail and commitment to quality exceeded our expectations.',
      quote: 'From the initial consultation to the final delivery, every step was handled professionally. The end result was a product that not only met our needs but also impressed our stakeholders. Highly recommended!',
      name: 'Esther Howard',
      designation: 'Managing Director, ABC Company',
    },
    {
      id: 2,
      message: 'Their expertise in UI/UX design helped us transform our digital presence and improve user engagement.',
      quote: 'The team demonstrated a deep understanding of our requirements and delivered a solution that was both visually appealing and highly functional. Communication was clear throughout the project.',
      name: 'Ali Haider',
      designation: 'COO, XYZ Company',
    },
    {
      id: 3,
      message: 'Professional, reliable, and creative—everything you want in a development partner.',
      quote: 'They delivered our project on time and went above and beyond to ensure our satisfaction. The new features have made a significant difference for our users. We look forward to working together again.',
      name: 'Elon Max',
      designation: 'Managing Director, KFC Company',
    },
  ]

  return (
    <section className="max-w-218 mx-auto px-4 py-10 md:py-25">
      <h2 className="section-title text-center mb-10">Testimonial</h2>
      
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col h-full text-center max-w-144.25 mx-auto">
              <p className="text-xs sm:text-sm md:text-lg pb-5 sm:pb-10 md:pb-14 text-soft-dark">
                {testimonial.message}
              </p>
              <div className="text-center">
                <p className="text-sm sm:text-lg font-medium pb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mx-auto">
                  <p className="text-sm sm:text-base md:text-lg font-medium mb-2">
                    {testimonial.name}
                  </p>
                  <p className="text-sm md:text-base font-light text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials

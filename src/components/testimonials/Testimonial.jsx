import React from 'react'
import './testimonial.css'
import AVTR1 from '../../images/nelson.jfif'
import AVTR2 from '../../images/avatar4.jpg'
import AVTR3 from '../../images/avatar3.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const Testimonial = () => {
  return (
    <section>
      <h5>Review from Previous Employers</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testiomanials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
   
      >
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='Juie-Ann Pearson'/>
          </div>
          <h5 className='client__name'>Prof. Peter Freere</h5>
            <small className='client__review'>
            As a professor, I have had the privilege of working with many engineers, but none have impressed me as much as Siphelele. Their tireless work ethic and dedication to their craft are unparalleled. They are a true asset to any team and an inspiration to all aspiring engineers.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt='Juie-Ann Pearson'/>
          </div>
          <h5 className='client__name'>Julie-Ann Pearson</h5>
            <small className='client__review'>
            Siphelele is an exceptional employee who consistently provides excellent service to our customers. Her positive attitude, attention to detail, and dedication to her job make her an invaluable member of our team.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt='Juie-Ann Pearson'/>
          </div>
          <h5 className='client__name'>Athabile Mnqunqu</h5>
            <small className='client__review'>
            Working alongside Siphe has been an absolute pleasure. Their skill and attention to detail are unmatched, and their ability to problem-solve on the fly is nothing short of impressive. They are a true master of their craft."
            </small>
        </SwiperSlide>

   
      </Swiper>
    </section>
  )
}

export default Testimonial
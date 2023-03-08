import React from 'react' ; 
import './about.css'; 
import ME from '../../images/sips.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='About Me'/>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>

          <article className='about__card'>
          <FiUsers className='about__icon' />
            <h5>Employers</h5>
            <small>4+ Employers</small>
          </article>

          <article className='about__card'>
          <VscFolderOpened className='about__icon' />
            <h5>Projects Completed</h5>
            <small>20+</small>
          </article>
        </div>
        <p>
          I'm a Welding Artisan and Tech Support at Milisa Technology. 
          I currently hold a National Diploma in Electrical Engineering (Light Current).
        </p>
        <a href='#about' className='btn btn-primary'>Talk to Me</a>
      </div>
    </div>
    </section>
  )
}

export default About
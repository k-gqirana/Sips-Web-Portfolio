import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs' 

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>MBSA</h3>
          <div className='expereince__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Robotics</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Basic PLC</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HMI Panels</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Electrical Troubleshooting</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Research</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Milisa</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>FMEAs</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>GDP</h4>
              <small className='text-light'>In-Progress</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Welding Technology</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            {/* <article className='experience__details'>
              <BsPatchCheckFill />
            <div>
            <h4>Mechanical Joining</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article> */}

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Welding Tech Maintenance</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
          </div>
        </div>

        {/* <div className='Milisa'></div> */}
      </div>
    </section>
  )
}

export default Experience
import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>MBSA</h3>
          <div className="expereince__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Basic Robotics</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Basic PLC</h4>
              </div>
            </article>

            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HMI Panels</h4>
              </div>
            </article> */}

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Technical Troubleshooting</h4>
              </div>
            </article>

            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Research</h4>
              </div>
            </article> */}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Milisa</h3>
          <div className="experience__content">
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>FMEAs</h4>
              </div>
            </article> */}

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GDP - Welding Technology</h4>
              </div>
            </article>

            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Welding Technology</h4>
              </div>
            </article> */}

            {/* <article className='experience__details'>
              <BsPatchCheckFill />
            <div>
            <h4>Mechanical Joining</h4>
            
            </div>
            </article> */}

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Welding Artisan</h4>
              </div>
            </article>
          </div>
        </div>

        {/* <div className='Milisa'></div> */}
      </div>
    </section>
  );
};

export default Experience;

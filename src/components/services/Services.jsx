import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Electrical</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Programming DC Drives</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Circuit Design</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Electrical Installations & Wiring</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Troubleshooting</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Welding</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Spot Welding Technology Maintenance</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Welding Support</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Bosch 7000</p>
            </li>

            {/*  <li> 
              <BiCheck className='service__list-icon' />
              <p>Welding Gun Force Calibration</p>
            </li> */}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Robotics</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic Sequencing and Programming</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Driving Industrial Robots</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Troubleshooting</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Robotics equipment and functionality</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

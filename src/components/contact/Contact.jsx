import React from 'react'
import './contact.css'; 
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
   const form = useRef()
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p8civo8', 'template_wkzv1je', form.current, 'uLbXjAQf7BdKESAeS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }; 
  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>siphelelelolwana@gmail.com</h5>
            <a href='mailto:siphelelelolwana@gmail.com' target='_blank'>Send me an email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Siphelele Lolwana</h5>
            <a href='https://www.messenger.com/' target='_blank'>DM me on Messenger</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+27 12 345 6789</h5>
            <a href='https://api.whatsapp.com/send?phone=+27766897972' target='_blank'>Whatsapp Me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Enter Your Email' required></input>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
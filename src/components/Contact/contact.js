import React, { useRef } from 'react';
import "./contact.css";
import Facebook from "../../assets/facebook-icon.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';
import nature1 from "../../assets/nature1.jpg"
import nature2 from"../../assets/nature2.jpg"
import nature3 from"../../assets/nature3.jpg"
import nature4 from"../../assets/nature4.jpg"
import nature5 from"../../assets/nature5.jpg"
import nature6 from"../../assets/nature6.jpg"
import nature7 from"../../assets/nature7.jpg"
import nature8 from"../../assets/nature8.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_mfqt54a', 'template_oa2vvk1', form.current, 'ZKNn3pNvNWk6yRWB7')
      .then(() => {
        alert("Email Sent!");
        form.current.reset();
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };

  const albumImages = [
    nature1,
    nature2,
    nature3,
    nature4,
    nature5,
    nature6,
    nature7,
    nature8
  
  ]; 

  return (
    <section id='contactPage'>
      <div className='album'>

      <h2 className='albumHeading'>My Albums</h2>
      <p className='albumDesc'>I Love to make memories and click pictures.Some of the good photos that I clicked.</p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {albumImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Album ${index}`} className="album-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>Please fill out the form to discuss any work opportunity</span>
      
      <form id="myForm" className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='from_name' />
        <input type='email' className='email' placeholder='Your Email' name='from_email' />
        <textarea className="msg" name='message' rows="5" placeholder='Your Message'></textarea> 
        <button type='submit' className='submitBtn'>Submit</button>
        <div className='links'>
          <a href='https://www.instagram.com/nikhilsingh.2701/.com' target='_blank' rel='noopener noreferrer'>
            <img src={Instagram} alt='Instagram' className='link' />
          </a>
          <a href='https://www.linkedin.com/in/nikhil-kumar-39026a227/' target='_blank' rel='noopener noreferrer'>
            <img src={Facebook} alt='Facebook' className='link' />
          </a>
          <a href='https://wa.me/message/7QYIDNUMZP6KE1' target='_blank' rel='noopener noreferrer'>
            <img src={Twitter} alt='Whatsapp' className='link' />
          </a>
        </div>             
      </form>
    </section>
  );
};

export default Contact;

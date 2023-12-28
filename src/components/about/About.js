import React from 'react'
import './about.css'
import MeAbout from '../../assets/me-about.jpeg'
import { FaGraduationCap } from "react-icons/fa";
import { LuWebhook } from "react-icons/lu";
import { FiTool } from "react-icons/fi";


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={MeAbout} alt=''/> 
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h4>Education</h4>
              <h5>MSc and BSc</h5>
            </article>
            
            <article className='about__card'>
              <LuWebhook className='about__icon' />
              <h4>Technologies</h4>
              <h5>Java, JavaScript</h5>
            </article>
           
            <article className='about__card'>
              <FiTool className='about__icon' />
              <h4>Soft Skills</h4>
              <h5>Leadership</h5>
            </article>

          </div>

          <p>
            lorem ipsum
          </p>

        </div>
      </div>

    </section>
   
  )
}

export default About

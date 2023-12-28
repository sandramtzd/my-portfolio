import React from 'react'
import './header.css'
import CV from '../../assets/Sandra_CV.pdf'
import MyPhoto from '../../assets/Profile.jpg'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
          <div className='header_content'>
            <h4>Hello World! My name is </h4>
            <h1>Sandra</h1>
            <h4 className='text-light'>Fullstack Developer</h4>

            <div className='header__buttons'>
                <a href={CV} download className='btn'>Download CV</a>
                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
          </div>

          <div className='header__image'>
              <img src={MyPhoto} alt='sandra'/>
          </div>
      
        </div>
    </header>
  )
}

export default Header

import React from 'react'
import CV from '../../assets/Sandra_CV.pdf'
import MyPhoto from '../../assets/Profile.jpg'

const Header = () => {
  return (


        <div className="container header__container">
          <h4>Hello World! My name is </h4>
          <h1>Sandra</h1>
          <h4 className="text-light">FullStack Developer</h4>
          <div className="header__buttons">
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        </div>

        

        // {/* <div className="my_photo">
        //   <img src={MyPhoto} alt='myphoto'/>
        // </div> */}
      




  )
}

export default Header

import React, { useState} from 'react';
import Loader from './components/loader/Loader'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import Socials from './components/socials/Socials'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom';



const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
  }
  return (
    <Router>
      <Loader finishLoading={finishLoading} />
      <Navbar />
      <Socials isFooter={false} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App

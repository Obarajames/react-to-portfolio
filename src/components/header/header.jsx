import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons'

function header() {
  return (
    <section className='hero-container'>
      <div className="left-side">
        <h2>
          Full Stack MERN Developer👋🏽
        </h2>
        <p>
          Hi, I'm James Omwoyo. A passionate Full Stack MERN Developer based at Nairobi,Kenya. 📍
        </p>
        <div className="links">
          <a href="https://www.linkedin.com/in/james-omwoyo-4a6385266/" target='blank'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/Obarajames" target='blank'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
      <div className="right-side">
        <div className="blob"></div>
      </div>
    </section>
  )
}

export default header
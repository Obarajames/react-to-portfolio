import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons'


function footer() {
  return (
    <div className='footer'>
    <div>
    <a href="https://www.linkedin.com/in/james-omwoyo-4a6385266/" target='blank'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/Obarajames" target='blank'><FontAwesomeIcon icon={faGithub} /></a>
    </div>
    <p>Copyright&copy; 2023 James.dev</p>
    </div>
  )
}

export default footer
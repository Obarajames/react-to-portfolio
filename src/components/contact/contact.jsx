import React from 'react'
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin , faGlideG } from '@fortawesome/free-brands-svg-icons'

function contact() {
  return (
    <div className='contact'>
      <div className="title">
      <h3>Contact</h3>
      <h2>Don't be shy ! Hit me up!🤙</h2>
      </div>
      <div className="contact-icon">
      <p> <FontAwesomeIcon icon={faLinkedin} /><a href="https://www.linkedin.com/in/james-omwoyo-4a6385266/">Connect With me</a></p>
      <p> <FontAwesomeIcon icon={faGlideG} /><a href="mailto:omwoyoobara@gmail.com">Mail Me .</a></p>
      </div>
      
    </div>
  )
}

export default contact
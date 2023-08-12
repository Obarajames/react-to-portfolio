import React from 'react'
import "./about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Laptop from "../../assets/laptop.jpg"

import { faHtml5, faCss3, faReact, faNode, faPython } from '@fortawesome/free-brands-svg-icons'


function about() {
  return (
    <div className='about'>
      <div className="task">
        <h3>Tech Stack</h3>
        <p> <FontAwesomeIcon icon={faHtml5} /></p>
        <p> <FontAwesomeIcon icon={faCss3} /></p>
        <p> <FontAwesomeIcon icon={faReact} /></p>
        <p> <FontAwesomeIcon icon={faNode} /></p>
        <p> <FontAwesomeIcon icon={faPython} /></p>
      </div>
      <div className="detail">
        <div className="img">
          <img src={Laptop} />
        </div>
        <div className="paragraph">
          <h3>About Me</h3>
          <h2>A dedicated Front-end Developer
            based at Nairobi,Kenya</h2>
          <p>As a Junior Full Stack MERN Developer, I possess a versatile skill set that encompasses a range of technologies vital for modern web development. With a solid foundation in HTML, CSS, and JavaScript, I am adept at crafting intuitive user interfaces that provide exceptional user experiences.However, my capabilities don't stop at the front end. With a passion for full stack development, I have honed my skills in the MERN (MongoDB, Express.js, React, Node.js) stack, allowing me to create end-to-end web applications. Leveraging the power of Node.js and Express.js, I proficiently manage server-side logic and APIs, while my mastery of MongoDB ensures efficient data storage and retrieval.</p>

        </div>
      </div>

    </div>
  )
}

export default about
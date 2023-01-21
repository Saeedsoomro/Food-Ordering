import "./about.css"

import React from 'react'

const About = () => {
  return (
    <>
      <div className="about_us">
        <div className="teamMember">
            <div className="member_image">
            <img src="../images/saeed1.jpeg" alt="" />
            </div>
            <h1>Saeed Ali</h1>
            <h2>Software Engineer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quidem tenetur consectetur suscipit, laboriosam cum cumque. Repudiandae blanditiis harum error magni id minima sequi, cumque velit quod consequuntur commodi? Corrupti.</p>
        </div>
        <div className="teamMember">
            <div className="member_image">
            <img src="../images/wahid.jpeg" alt="" />
            </div>
            <h1>Abdul Wahid</h1>
            <h2>Software Engineer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quidem tenetur consectetur suscipit, laboriosam cum cumque. Repudiandae blanditiis harum error magni id minima sequi, cumque velit quod consequuntur commodi? Corrupti.</p>
        </div>
        <div className="teamMember">
            <div className="member_image">
            <img src="../images/abrar.jpeg" alt="" />
            </div>
            <h1>Abrar Ahmed</h1>
            <h2>Software Engineer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quidem tenetur consectetur suscipit, laboriosam cum cumque. Repudiandae blanditiis harum error magni id minima sequi, cumque velit quod consequuntur commodi? Corrupti.</p>
        </div>
      </div>
    </>
  )
}

export default About
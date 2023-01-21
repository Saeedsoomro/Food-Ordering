import './contact.css'
import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container">
        <form action="action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

        {/* <label for="country">Country</label> */}


        <label for="subject">Subject</label>
        <textarea
          id="subject"
           name="subject" 
           placeholder="Write something.." style={{height:'200px'}}
        />
        {/* <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"/> */}

        <input type="submit" value="Submit"/>


        </form>
      </div>
    </>
  )
}

export default Contact
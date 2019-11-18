import React from 'react'

const About = (props) => {
  return (
    <div>
      {/* if needed to access param from url {props.match.params.id} */}
      <h1 className="display-4">About Contact manager</h1>
      <p className='lead'>Simple app to manage contacts</p>
      <p className="text-secondary">v1.0.0</p>
    </div>
  )
}

export default About;

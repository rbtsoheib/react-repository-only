import React from "react";

function About() {

  let aboutStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: 'center',
    marginTop: '100px',
  };

  return (
    <div style={aboutStyle}>
      <h1>Welcome to the About Page</h1>
      <p>We reserve this place to display some information about our company</p>
    </div>
  );
  
}

export default About;
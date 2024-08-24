import React from "react";

function Home() {

  let homeStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center", 
    color: "violet",
  };


  return (
    <div style={homeStyle}>
      <h1>Welcome to the homepage</h1>
      <p>In this place, you will find all you need for your new website</p>
    </div>
  );
}

export default Home;
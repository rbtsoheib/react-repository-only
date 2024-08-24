import React from "react";

function Dashboard() {

  let dashboardStyle = {

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "yellow",
  };

  return (

    <div style={dashboardStyle}>
      <h1>Welcome to the DASHBOARD</h1>
      <p>We reserve this place to display some statistics about our website</p>
    </div>

  );
}

export default Dashboard;

import React from "react";
import { Outlet, useNavigate } from "react-router";

function Dashboard() {

  let dashboardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const navigate = useNavigate();
   return (
   <>
  
   <button
   style={buttonStyle}
   onClick={() => {
   navigate(-1);
  }}
  >
  Go Back
   </button>
      <div style={dashboardStyle}>
        <h1>Welcome to the DASHBOARD</h1>
        <p>
          We reserve this place to display some statistics about our website
        </p>
        <Outlet />
      </div>
    </>
   );

}

export default Dashboard;

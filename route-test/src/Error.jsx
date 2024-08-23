import React from "react";

function Error() {
    let errorStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    };
    return (
      <div style={errorStyle}>
        <h1>404 Error: Page Not Found</h1>
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p>We're sorry, the page you requested could not be found.</p>
      </div>
    );
  }
  
  export default Error;
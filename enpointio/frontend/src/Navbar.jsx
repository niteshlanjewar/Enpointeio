import React from "react";
function NavBar(props) {
  var divStyle = {
    padding: "20px",
    backgroundColor: "black",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
  };
  var aStyle = {
    textAlign: "start",
    color: "white",
    marginRight: "50px",
    textDecoration: "none",
  };
  return (
    <>
      <div style={divStyle}>
        <h1 style={aStyle}>EPBank </h1>
    
      </div>
    </>
  );
}

export default NavBar;

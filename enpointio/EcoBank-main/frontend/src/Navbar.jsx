import React from "react";
function NavBar(props) {
  var divStyle = {
    padding: "20px",
    backgroundColor: "white",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
  };
  var aStyle = {
    textAlign: "start",
    color: "black",
    marginRight: "50px",
    textDecoration: "none",
  };
  return (
    <>
      <div style={divStyle}>
        <h1 style={aStyle}>Eco Bank</h1>
        
      </div>
    </>
  );
}

export default NavBar;

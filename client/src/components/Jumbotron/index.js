import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return (
      <div
        style={{ height: 550, clear: "both", paddingTop: 30 }}
        className="jumbotron"
      ><div className="jum-container">
        {children}
        </div>
      </div>
    );
  }

export default Jumbotron;
import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return (
      <div
        style={{ height: 400, clear: "both", paddingTop: 50 }}
        className="jumbotron"
      ><div className="jum-container">
        {children}
        </div>
      </div>
    );
  }

export default Jumbotron;
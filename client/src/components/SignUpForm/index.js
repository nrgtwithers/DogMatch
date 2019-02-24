import React from "react";
import "./style.css";

function SignUpForm() {
    return (
        <div>
        <form id="signupForm">
        <h6 className="signup">Sign up for an account</h6>
        <div classsName="form-group">
          <label for="userEmail">Email address</label>
          <input type="email" classsName="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
          {/* <small id="emailHelp" classsName="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div classsName="form-group">
          <label for="userPassword">Password</label>
          <input type="password" classsName="form-control" id="userPassword" placeholder="Password"/>
        </div>
    
        <button type="submit" id="loginButton" classsName="submitButton">Submit</button>
      </form>
      </div>
    );
}

export default SignUpForm;

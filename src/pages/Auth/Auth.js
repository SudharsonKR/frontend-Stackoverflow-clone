import React, { useState } from "react";
import "./Auth.css";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";
import { login, signup } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className="auth-section">
        {isSignup && <AboutAuth/>}
      <div className="auth-container-2">
        {!isSignup && (
          <img
            src={icon}
            alt="stack overflow"
            className="login-logo"
            width="50"
          />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h3>Display Name</h3>
              <input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value);}}/>
            </label>
          )}
          <label htmlFor="email">
            <h3>Email</h3>
            <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value);}}/>
          </label>
          <label htmlFor="password">
            <div style={{display: 'flex', justifyContent:'space-between'}}> 
              <h3>Password</h3>
              {!isSignup && <p style={{color:'#007ac6'}}>forget password?</p>}
            </div>
            <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value);}}/>
            {isSignup && (
              <p style={{color:"#666767"}}>
                Passwords must contain at least eight characters,
                <br />
                including at least 1 letter and 1 number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{color:"#666767"}}>
                Opt-in to receive occasional product <br />
                updates, user research invitations, company <br />
                announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
          {isSignup && (
            <p style={{color:"#666767"}}>
              By clicking “Sign up”, you agree to our <span style={{color:'#007ac6'}}>
                terms of <br/>service </span>and acknowledge that you have read and <br/>
              understand our <span style={{color:'#007ac6'}}>privacy policy</span> and <span style={{color:'#007ac6'}}>
                code of <br />
                conduct
              </span>
              .
            </p>
          )}
        </form>
        <p>
          {isSignup ? "already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
            
          >
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;

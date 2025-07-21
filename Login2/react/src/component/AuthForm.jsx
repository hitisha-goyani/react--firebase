import React, { useState } from 'react'
import "./AuthForm.css"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);

   const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };


  function handleSubmit(e) {
      e.preventDefault();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("login successfuly...");
          // ...
        })
        .catch((error) => {
          console.log(error);
          alert("invalid password...");
        });
    }

    function handleSubmit1(e) {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            alert("signup sucessfully");
          })
          .catch((error) => {
            console.log(error);
    
            // ..
          });
      }

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="title login">Login Form</div>
        <div className="title signup">Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={!isSignup} readOnly />
          <input type="radio" name="slide" id="signup" checked={isSignup} readOnly />
          <label
            htmlFor="login"
            className="slide login"
            onClick={() => setIsSignup(false)}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className="slide signup"
            onClick={() => setIsSignup(true)}
          >
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>

        <div
          className="form-inner"
          style={{ marginLeft: isSignup ? '-100%' : '0%' }}
        >
          {/* Login Form */}
          <form className="login" onSubmit={handleSubmit}>
            <div className="field">
              <input type="text" placeholder="Email Address"  onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="#" onClick={toggleForm}>Signup now</a>
            </div>
          </form>

          {/* Signup Form */}
          <form className="signup" onSubmit={handleSubmit1}>
            <div className="field">
              <input type="text" placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required  onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

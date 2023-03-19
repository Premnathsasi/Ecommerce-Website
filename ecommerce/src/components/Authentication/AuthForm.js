import { useState, useRef, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import AuthContext from "./AuthContext";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const navigate = useNavigate();

  const [isLoading, setisLoading] = useState(false);

  const authCtx = useContext(AuthContext)

  const emailInput = useRef();
  const passwordInput = useRef();
  const submitHandler = async function(e) {
    e.preventDefault();
    const enteredMail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;
    setisLoading(true);

    try {
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbPUzHTIrzC1b_7sfYfKpf8FaR_yyocBc", {
      method: "POST",
      body: JSON.stringify({
        email: enteredMail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    setisLoading(false)
    if (!response.ok) {
      let errMsg = 'Authentication Failed';
          throw new Error(errMsg)
    }
    const data = await response.json();
    authCtx.logIn(data.idToken)
    navigate('/store')
    } catch(error) {
      alert(error.message)
    }
  };


  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInput} />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>Login</button>
          )}
          {isLoading && <p>Sending Request</p>}

        </div>
      </form>
    </section>
  );
};

export default AuthForm;

import { useState, useRef, useContext } from "react";
import {useHistory} from 'react-router-dom';
import AuthContext from "../../store/AuthContext";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();

  const [isLogin, setIsLogin] = useState(true);
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
      let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbPUzHTIrzC1b_7sfYfKpf8FaR_yyocBc";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbPUzHTIrzC1b_7sfYfKpf8FaR_yyocBc";
    }
    const response = await fetch(url, {
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
    history.replace('/')
    } catch(error) {
      alert(error.message)
    }
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
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
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending Request</p>}

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;

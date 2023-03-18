import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setisLoading] = useState(false)
  const emailInput = useRef();
  const passwordInput = useRef();
  const submitHandler = (e) => {
   
    e.preventDefault();
    const enteredMail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;
    setisLoading(true)
    if (isLogin) {
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbPUzHTIrzC1b_7sfYfKpf8FaR_yyocBc",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredMail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setisLoading(false)
        if (res.ok) {
        } else {
          return res.json().then((data) => {
            alert(data.error.message);  
          });
        }
      });
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
        {!isLoading && <button>{isLogin? 'Login' : 'Create Account'}</button>}
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

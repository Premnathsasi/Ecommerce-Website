import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext)

  const newPassRef = useRef();

  const passwordSubmitHandler = async(e) => {
    e.preventDefault();
    const newPassword = newPassRef.current.value;
    try {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBbPUzHTIrzC1b_7sfYfKpf8FaR_yyocBc',{
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password:newPassword,
          returnSecureToken: false
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      history.replace('/')

    } catch(error) {
        console.log(error.message)
    }
  }

  return (
    <form className={classes.form} onSubmit={passwordSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;

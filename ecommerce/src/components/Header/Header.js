import React, {useContext} from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderCartButton from './HeaderCartButton';
import AuthContext from '../Authentication/AuthContext';
import classes from './Header.module.css';
import { Button } from 'react-bootstrap';

const Header = props => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const isLoggedIn = authCtx.isLoggedIn;

  const logOutHandler= ()=> {
    authCtx.logOut();
    navigate('/auth')

  }
    return (
       <React.Fragment>
         <Navbar bg="dark" variant="dark" className='text-white position-relative p-3' >
          <Nav className="h5 m-auto container d-flex justify-content-center ">
            <NavLink to="/" className={({isActive}) => isActive ? classes.active : classes.normal}>HOME</NavLink>
            {isLoggedIn && <NavLink to="/store" className={({isActive}) => isActive ? classes.active : classes.normal} >STORE</NavLink>}
            <NavLink to="/about" className={({isActive}) => isActive ? classes.active : classes.normal}>ABOUT</NavLink>
            {isLoggedIn && <NavLink to="/contact" className={({isActive}) => isActive ? classes.active : classes.normal}>CONTACT</NavLink>}
             {!isLoggedIn && <NavLink to="/auth" className={({isActive}) => isActive ? classes.active : classes.normal}>LOGIN</NavLink>}
             {isLoggedIn && <Button className=' position-absolute bottom-0 start-0' onClick={logOutHandler}>Logout</Button>}
          </Nav>
          <div className='me-3 position-absolute bottom-0 end-0'> 
          {isLoggedIn && <HeaderCartButton onClick={props.onClick} />}
          </div>
      </Navbar>
      <h1 className={classes.heading}> The Generics</h1>
      </React.Fragment>

        
    )
};

export default Header;
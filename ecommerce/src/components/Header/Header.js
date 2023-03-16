import React from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {
    return (
       <React.Fragment>
         <Navbar bg="dark" variant="dark" className='text-white' >
          <Nav className="h5 m-auto ">
          <NavLink to="" className={({isActive}) => isActive ? classes.active : classes.normal}>HOME</NavLink>
            <NavLink to="/" className={({isActive}) => isActive ? classes.active : classes.normal} >STORE</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? classes.active : classes.normal}>ABOUT</NavLink>
          </Nav>
          <div className='me-3'> 
          <HeaderCartButton onClick={props.onClick} />
          </div>
      </Navbar>
      <h1 className={classes.heading}> The Generics</h1>
      </React.Fragment>

        
    )
};

export default Header;
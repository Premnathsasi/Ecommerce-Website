import React, {useContext} from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderCartButton from './HeaderCartButton';
import AuthContext from '../Authentication/AuthContext';
import classes from './Header.module.css';
import { Button,Container } from 'react-bootstrap';

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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><NavLink to="/" className={({isActive}) => isActive ? classes.active : classes.normal}>HOME</NavLink></Nav.Link>
            {isLoggedIn && <Nav.Link><NavLink to="/store" className={({isActive}) => isActive ? classes.active : classes.normal} >STORE</NavLink></Nav.Link>}
            <Nav.Link><NavLink to="/about" className={({isActive}) => isActive ? classes.active : classes.normal}>ABOUT</NavLink></Nav.Link>
            {isLoggedIn && <Nav.Link><NavLink to="/contact" className={({isActive}) => isActive ? classes.active : classes.normal}>CONTACT</NavLink></Nav.Link>}
             {!isLoggedIn && <Nav.Link><NavLink to="/auth" className={({isActive}) => isActive ? classes.active : classes.normal}>LOGIN</NavLink></Nav.Link>}
             
          </Nav>
          <Nav >
          {isLoggedIn && <Nav.Link><HeaderCartButton onClick={props.onClick} /></Nav.Link>}
          {isLoggedIn && <Nav.Link><Button onClick={logOutHandler}>Logout</Button></Nav.Link>}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <h1 className={classes.heading}> The Generics</h1>
      </React.Fragment>

        
    )
};

export default Header;
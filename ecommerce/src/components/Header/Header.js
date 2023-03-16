import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <React.Fragment>
         <Navbar bg="dark" variant="dark" className='text-white' >
          <Nav className="h5 m-auto">
            <Nav.Link href="#home"  className='me-5'>HOME</Nav.Link>
            <Nav.Link href="#store" className='me-5'>STORE</Nav.Link>
            <Nav.Link href="#about" >ABOUT</Nav.Link>
          </Nav>
          <div className='me-3'> 
          <HeaderCartButton onClick={props.onClick} />
          </div>
      </Navbar>

        </React.Fragment>
    )
};

export default Header;
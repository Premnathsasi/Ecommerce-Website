import React from 'react';
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Tshirt World</h1>
            <HeaderButton onClick={props.onShowCart}/>
        </header>
    </React.Fragment>
};

export default Header;
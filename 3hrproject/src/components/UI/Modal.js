import React from "react";
import  ReactDOM  from "react-dom";
import classes from './Modal.module.css';


const BackDrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick} />
};

const OverLay = props => {
    return <div className={classes.modal} >
        <div>{props.children}</div>
    </div>
}

const Modal = (props) => {
    return (
        <React.Fragment>
        {ReactDOM.createPortal(
            <BackDrop onClick={props.onClose}/>, document.getElementById('overlay')
        )}
        {ReactDOM.createPortal(
            <OverLay>{props.children}</OverLay>, document.getElementById('overlay')
        )}
    
    </React.Fragment>
)};

export default Modal;
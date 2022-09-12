import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './FormPop.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const FormOverlay = (props) => {
  return (
    <div className={classes.forme}>
      <div >{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlaysForm');

const Forme = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <FormOverlay>{props.children}</FormOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Forme;

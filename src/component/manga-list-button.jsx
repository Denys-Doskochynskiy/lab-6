import './style/catalog.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function NavigationButton(props) {
    return (
        <Link to={props.rref} className={props.class}>
            <img className="info" src="https://img.icons8.com/pastel-glyph/64/000000/info--v1.png" />
        </Link>
    );
}

export default NavigationButton;

function NavigationButtonBuy(props) {
    return (
        <a onClick={props.clickFunction}  className={props.class}>
            {props.text} 
        </a>
    ); 
}
export {NavigationButtonBuy}
import React from "react";
import classes from "./AddItemButton.module.css";

export default function AddItemButton(props) {
 
  return <button onClick={props.onClick} className={classes.button}>AddItemButton</button>;
}

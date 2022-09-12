import * as React from "react";
import { useEffect, useState } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Forme from "../../UI/FormPop";
import classes from "./AddItem.module.css";
const ariaLabel = { "aria-label": "description" };

export default function Inputs(props) {
  // const nameInput = useRef();
  // const priceInput = useRef();
  // const descInput = useRef();

  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [DescInput, setDescInput] = useState("");

  const nameHandler = (event) => {
    setNameInput(event.target.value);
    console.log(nameInput);
  };
  const priceHandler = (event) => {
    setPriceInput(event.target.value);
    console.log(priceInput);
  };
  const descHandler = (event) => {
    setDescInput(event.target.value);
    console.log(DescInput);
  };
  let obj = { name: "", price: "", description: "" };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    obj = { name: nameInput, price: priceInput, description: DescInput };
    // console.log(obj);

    (async () => {
      const rawResponse = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const content = await rawResponse.json();

      console.log(content);
    })();
  };

  return (
    <Forme onClose={props.onClose}>
      <form className={classes.foorm} onSubmit={onSubmitHandler}>
        <Input
          placeholder="Name"
          inputProps={ariaLabel}
          onChange={nameHandler}
        />
        <Input
          placeholder="Price"
          inputProps={ariaLabel}
          type="number"
          onChange={priceHandler}
        />

        <Input
          placeholder="Description"
          inputProps={ariaLabel}
          onChange={descHandler}
        />

        <Button color="primary" variant="contained" type="submit">
          Add Item+
        </Button>
        <Button color="error" variant="contained" onClick={props.onClose}>
          Close
        </Button>
      </form>
    </Forme>
  );
}

// import history to enable router navigation
import { useHistory } from "react-router-dom";

// import state to enable inputValue rendering
import { useState, useEffect } from "react";

// import dispatch to enable reducer dispatch
import { useDispatch } from "react-redux";

// import mui components
import {
  Button,
  Slider,
  TextField,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

function Form({ formType }) {
  // history constant
  const history = useHistory();
  // dispatch constant
  const dispatch = useDispatch();

  // variables to customize form text and type
  let headerText = "";
  let labelText = "";
  let inputType = "number";
  let dispatchType = "";
  let prevPath = "";
  let nextPath = "";
  let requiredBool = true;

  // use formType property to determine displayed HTML
  switch (formType) {
    case "feeling":
      headerText = "How are you feeling today?";
      dispatchType = "SET_FEELING";
      nextPath = "/understanding";
      break;
    case "understanding":
      headerText = "How well are you understanding the content?";
      dispatchType = "SET_UNDERSTANDING";
      prevPath = "/";
      nextPath = "/support";
      break;
    case "support":
      headerText = "How well are you feeling supported in your learning?";
      dispatchType = "SET_SUPPORT";
      prevPath = "/understanding";
      nextPath = "/comments";
      break;
    case "comments":
      headerText = "Any additional comments you'd like to add?";
      dispatchType = "SET_COMMENTS";
      prevPath = "/support";
      nextPath = "/review";
      inputType = "text";
      requiredBool = false;
      break;
  }

  // form input value
  const [inputValue, setInputValue] = useState(3);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: dispatchType, payload: inputValue });
    history.push(nextPath);
  };

  const handleBackClick = () => {
    history.push(prevPath);
  };

  // marks array for slider component
  const marks = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];

  // on render, make sure that the text input field is initially blank
  useEffect(() => {
    if (inputType === "text") {
      setInputValue("");
    }
  });

  return (
    <>
      <Paper elevation={3}>
        <h3>{headerText}</h3>
        <form onSubmit={handleSubmit}>
          {inputType === "number" ? (
            <Slider
              sx={{ width: "25%" }}
              aria-label={labelText}
              defaultValue={3}
              step={1}
              marks={marks}
              valueLabelDisplay="auto"
              min={1}
              max={5}
              width={100}
              onChange={(e) => setInputValue(e.target.value)}
              value={Number(inputValue)}
            />
          ) : (
            <TextField
              label="Comments"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}

          {prevPath && <Button onClick={handleBackClick}>BACK</Button>}
          <Button type="submit">NEXT</Button>
        </form>
      </Paper>
    </>
  );
}

export default Form;

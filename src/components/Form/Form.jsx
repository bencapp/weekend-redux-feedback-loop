// import history to enable router navigation
import { useHistory } from "react-router-dom";

// import state to enable inputValue rendering
import { useState } from "react";

// import dispatch to enable reducer dispatch
import { useDispatch } from "react-redux";

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
      labelText = "Feeling (1-5):";
      dispatchType = "SET_FEELING";
      nextPath = "/understanding";
      break;
    case "understanding":
      headerText = "How well are you understanding the content?";
      labelText = "Understanding (1-5):";
      dispatchType = "SET_UNDERSTANDING";
      prevPath = "/";
      nextPath = "/support";
      break;
    case "support":
      headerText = "How well are you feeling supported in your learning?";
      labelText = "Support (1-5):";
      dispatchType = "SET_SUPPORT";
      prevPath = "/understanding";
      nextPath = "/comments";
      break;
    case "comments":
      headerText = "Any additional comments you'd like to add?";
      labelText = "Comments:";
      dispatchType = "SET_COMMENTS";
      prevPath = "/support";
      nextPath = "/review";
      inputType = "text";
      requiredBool = false;
      break;
  }

  // form input value
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // if there is a value in the input field and it is required for this page,
    // store data in reducer and move to the next page
    if (inputValue || !requiredBool) {
      //TODO: save input data to reducer
      dispatch({ type: dispatchType, payload: inputValue });
      history.push(nextPath);
    }
  };

  const handleBackClick = () => {
    history.push(prevPath);
  };

  return (
    <>
      <h3>{headerText}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating-input">{labelText}</label>
        <input
          type={inputType}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          min="1"
          max="5"
          name="rating-input"
        />
        {prevPath && <button onClick={handleBackClick}>BACK</button>}
        <button type="submit">NEXT</button>
      </form>
    </>
  );
}

export default Form;

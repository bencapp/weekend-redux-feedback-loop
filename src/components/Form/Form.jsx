// import history to enable router navigation
import { useHistory } from "react-router-dom";

function Form({ formType }) {
  // history constant
  const history = useHistory();

  // variables to customize form text and type
  let headerText = "";
  let labelText = "";
  let inputType = "number";
  let nextPath = "";
  let requiredBool = true;

  // use formType property to determine displayed HTML
  switch (formType) {
    case "feeling":
      headerText = "How are you feeling today?";
      labelText = "Feeling (1-5):";
      nextPath = "/understanding";
      break;
    case "understanding":
      headerText = "How well are you understanding the content?";
      labelText = "Understanding (1-5):";
      nextPath = "/support";
      break;
    case "support":
      headerText = "How well are you feeling supported in your learning?";
      labelText = "Support (1-5):";
      nextPath = "/comments";
      break;
    case "comments":
      headerText = "Any additional comments you'd like to add?";
      labelText = "Comments:";
      nextPath = "/review";
      inputType = "text";
      requiredBool = false;
      break;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //TODO: save input data to reducer

    history.push(nextPath);
  };

  return (
    <>
      <h3>{headerText}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating-input">{labelText}</label>
        <input type={inputType} min="1" max="5" name="rating-input" />
        <button type="submit">NEXT</button>
      </form>
    </>
  );
}

export default Form;

import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import axios from "axios";

function Review() {
  const history = useHistory();
  const feedback = useSelector((store) => store.feedback);

  const handleClick = () => {
    //TODO: post information to the database
    history.push("/success");

    axios
      .post("/feedback", feedback)
      .then()
      .catch((err) => console.log("Error in client POST:", err));
  };
  return (
    <div>
      <h3>Review Your Feedback</h3>
      <p>Feelings: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.support}</p>
      <p>Comments: {feedback.comments}</p>
      <button onClick={handleClick}>SUBMIT</button>
    </div>
  );
}

export default Review;

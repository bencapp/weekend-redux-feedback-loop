import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { Button, ButtonGroup, Paper } from "@mui/material";

import axios from "axios";

function Review() {
  const history = useHistory();
  const feedback = useSelector((store) => store.feedback);

  const handleClick = () => {
    history.push("/success");

    axios
      .post("/feedback", feedback)
      .then()
      .catch((err) => console.log("Error in client POST:", err));
  };

  const handleBackClick = () => {
    history.push("/comments");
  };

  return (
    <Paper elevation={3} className="paper">
      <h3>Review Your Feedback</h3>
      <p>Feelings: {feedback.feeling}/5</p>
      <p>Understanding: {feedback.understanding}/5</p>
      <p>Support: {feedback.support}/5</p>
      <p>Comments: {feedback.comments}</p>
      <ButtonGroup>
        <Button onClick={handleBackClick}>BACK</Button>
        <Button onClick={handleClick}>SUBMIT</Button>
      </ButtonGroup>
    </Paper>
  );
}

export default Review;

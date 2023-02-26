import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Button } from "@mui/material";

function Success() {
  const history = useHistory();
  const dispatch = useDispatch();
  // button clears reducer and takes user to the first form
  const handleClick = () => {
    dispatch({ type: "CLEAR_FEEDBACK" });
    history.push("/");
  };
  return (
    <div>
      <h3>Your feedback has been submitted!</h3>
      <Button onClick={handleClick}>Leave New Review</Button>
    </div>
  );
}

export default Success;

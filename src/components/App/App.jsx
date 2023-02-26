import React from "react";
import "./App.css";

// Import react router
import { HashRouter as Router, Route } from "react-router-dom";

// Import other components
import Form from "../Form/Form";
import Review from "../Review/Review";
import Success from "../Success/Success";

// Import MUI components
import { AppBar } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar color="secondary" position="sticky">
          <h1 className="App-title">Feedback!</h1>
          <h4 className="App-subtitle">Don't forget it!</h4>
        </AppBar>
        <Route path="/" exact>
          <Form formType={"feeling"} />
        </Route>
        <Route path="/understanding" exact>
          <Form formType={"understanding"} />
        </Route>
        <Route path="/support" exact>
          <Form formType={"support"} />
        </Route>
        <Route path="/comments" exact>
          <Form formType={"comments"} />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Router>
    </div>
  );
}

export default App;

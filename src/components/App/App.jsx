import React from "react";
import axios from "axios";
import "./App.css";

// Import react router
import { HashRouter as Router, Route } from "react-router-dom";

// Import other components
import Form from "../Form/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
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
          {/* <Review /> */}
        </Route>
      </Router>
    </div>
  );
}

export default App;

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
        <Route path="/">
          <Form />
        </Route>
        <Route path="/understanding">
          <Form />
        </Route>
        <Route path="/support">
          <Form />
        </Route>
        <Route path="/comments">
          <Form />
        </Route>
        <Route path="/review">{/* <Review /> */}</Route>
      </Router>
    </div>
  );
}

export default App;

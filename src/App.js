import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/App.css";
import HomePage from './pages/HomePage';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';

function App() {

  return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contacts" component={Contacts} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;

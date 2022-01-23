import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { Container, Button } from "react-bootstrap";
// Views
import SurveyView from "./views/SurveyView"
import Sumary from "./views/Sumary"

function App() {
  return (
    <Router>
      <Container className="main pad-t">
        <Switch>
          <Route path="/survey/:id" render={props => <SurveyView surveyId={Number(props.match.params.id)} /> }/>
          <Route path="/sumary/" render={props => <Sumary /> }/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
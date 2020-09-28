import React from 'react';
import "./App.css";
import Movies from './components/Movies';
import MovieDescription from "./components/MovieDescription";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App bg-blue-100 max-w-full h-screen min-w-sm bg text-center">
      <Router>
        <Switch>
          <Route path="/" exact  component={Movies} />
          <Route path="/:movieid" exact component={MovieDescription} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

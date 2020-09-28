import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/main.css";
import MoviesContextProvider from "./components/MovieContextProvider";
import App from './App';

ReactDOM.render(
  <MoviesContextProvider>
    <App />
  </MoviesContextProvider>,
  document.getElementById("root")
);
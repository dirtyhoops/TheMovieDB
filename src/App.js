import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/layout/AppNavbar";
import MoviesBoard from "./components/layout/MoviesBoard";
import MovieDetails from "./components/pages/MovieDetails";

import Home from "./components/pages/Home/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            {/* <Searchbar /> */}

            <Switch>
              {/* change the moviesboard to home */}
              <Route exact path="/" component={Home} />
              <Route exact path="/movie/:id" component={MovieDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/layout/AppNavbar";
import MovieInfoPage from "./components/pages/MovieInfoPage/MovieInfoPage";

import Home from "./components/pages/Home/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movie/:id" component={MovieInfoPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

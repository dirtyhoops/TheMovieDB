import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/pages/Home/Home";
import MovieInfoPage from "./components/pages/MovieInfoPage/MovieInfoPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
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

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header />
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/:id">
                <SinglePage />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

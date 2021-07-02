import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Containers/Services";
import Clients from "./Containers/Clients";
import Blogs from "./Containers/Blogs";
import Contact from "./Containers/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Slider />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/clients" component={Clients} exact />
          <Route path="/blogs" component={Blogs} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

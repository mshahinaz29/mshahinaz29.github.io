import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Ibotika from "./components/Projects/ProjectList/Ibotika";
import Krisland from "./components/Projects/ProjectList/Krisland";
import Winedepot from "./components/Projects/ProjectList/Winedepot";
import Ncmc from "./components/Projects/ProjectList/Ncmc";
import Sjck from "./components/Projects/ProjectList/Sjck";
import Tlg from "./components/Projects/ProjectList/Tlg";
import Up2nine from "./components/Projects/ProjectList/Up2nine";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />

          <Route path="/projects/krisland" component={Krisland} />
          <Route path="/projects/winedepot" component={Winedepot} />
          <Route path="/projects/ibotika" component={Ibotika} />
          <Route path="/projects/supply-management" component={Up2nine} />
          <Route path="/projects/ncmc" component={Ncmc} />
          <Route path="/projects/sjck" component={Sjck} />
          <Route path="/projects/tlg" component={Tlg} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

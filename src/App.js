import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./style.css";

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </div>
      <Footer />
    </Router>
  );
}

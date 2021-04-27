import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer"

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/about">
          <div>About</div>
        </Route>
        <Route path="/Contact">
          <div>Contact</div>
        </Route>
      </div>
      <Footer />
    </Router>
  );
}

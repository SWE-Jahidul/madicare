import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import Footer from "./Component/Footer/Footer";
import Doctors from "./Component/Doctors/Doctors";
import Contact from "./Component/Contact/Contact";
import Signin from "./Component/Signin/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/singin">
            <Signin></Signin>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

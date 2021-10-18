import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import Doctors from "./Component/Doctors/Doctors";
import Contact from "./Component/Contact/Contact";
import Signin from "./Component/Signin/Signin";
import Service from "./Component/Service/Service";
import SingUp from "./Component/SingUp/SingUp";
import DoctorDetails from "./Component/DoctorDetails/DoctorDetails";

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

          <Route path="/service">
            <Service></Service>
          </Route>

          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>

          <Route path="/doctordetails/:doctorsId">
            <DoctorDetails></DoctorDetails>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/singin">
            <Signin></Signin>
          </Route>

          <Route path="/signup">
            <SingUp></SingUp>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

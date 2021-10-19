import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import Doctors from "./Component/Doctors/Doctors";
import Contact from "./Component/Contact/Contact";
import Service from "./Component/Service/Service";
import SingUp from "./Component/SingUp/SingUp";
import DoctorDetails from "./Component/DoctorDetails/DoctorDetails";
import NotFound from "./Component/NotFound/NotFound";
import AuthProvider from "./Component/Context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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

            {/* <Route path="/singin">
              <Signin></Signin>
            </Route> */}

            <Route path="/signup">
              <SingUp></SingUp>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

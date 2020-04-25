import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Specialities from "./components/Specialities";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import TableBook from "./components/TableBook";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        <AboutUs />
        <Specialities />
        <Menu />
        <Reservation />
        <ContactUs />
        {/* <Menu /> */}
        {/* <TableBook /> */}
        {/* <Router>
          <Route exact path="/" component={Welcome} />
          <Route path="/specialities" component={Specialities} />
          <Route path="/menu" component={Menu} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
        </Router> */}
      </div>
    );
  }
}
export default App;

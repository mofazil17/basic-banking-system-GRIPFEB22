import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Navigationbar from "./components/Navigationbar";

import Home from "./components/Home/Home";
import CreateNewCustomer from "./components/CreateNewUser/CreateNewUser";
import CustomerTable from "./components/CustomerTable/CustomerTable";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Contact from "./components/Contact/Contact";
import TransferMoney from "./components/TransferMoney/TransferMoney";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content-wrap">
        <Navigationbar />
        
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/createnewuser" component={CreateNewCustomer}></Route>
            <Route
              path="/customertable"
              exact
              component={CustomerTable}
            ></Route>
            <Route path="/customertable/:id" component={TransferMoney}></Route>
            <Route
              path="/transactionhistory"
              component={TransactionHistory}
            ></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

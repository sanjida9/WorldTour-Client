import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import NavigationBar from "./components/NavigationBar/NavigationBar";

import AuthProvider from "./context/AuthProvider";
import Register from "./components/Register/Register";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import MyOrders from "./components/MyOrders/MyOrders";
import NewSpot from "./components/NewSpot/NewSpot";
import Tours from "./components/Tours/Tours";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/spot/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/spot">
              <Tours></Tours>
            </Route>
            <PrivateRoute path="/newSpot">
              <NewSpot></NewSpot>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

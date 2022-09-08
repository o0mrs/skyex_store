import react from "react";
import NavBar from "./NavBar";
import Home from "./home";
import { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashBoard from "./admin/dashboard";
import Try from "./try";
import Front from './Front'
import Product from "./product";
import LoginToAdmin from './LoginToAdmin.js'
function App() {
  return (
    <>
<Router>
  <Route path='/a' component={LoginToAdmin}/>
  <Switch>
    <Route path='/' exact component={Front}/>
    <Route path='/d' component={DashBoard}/>
    <Route path='/shop' component={Product}/>
    <Route path='/d/account'></Route>
    <Route path='/test' component={Try}/>
  </Switch>
</Router>

</>
  )
}

export default App;

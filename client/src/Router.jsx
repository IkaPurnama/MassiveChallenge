import React from 'react'
import { Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { PrivateRoute } from "./components/PrivateRoute"
import Root from "./pages/Root"

const Router = () => {
  return(
    <Switch>
      <Route path="/"exact component={Login} />
      <Route path="/register" component={Register}/>
      <PrivateRoute path="/" component={Root}/>
    </Switch>
  )
}

export default Router
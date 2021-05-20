import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
  import App from './App'
import Form from './component/Form';
import Form2 from './component/Form2'
export default class Home extends Component {
    render() {
        return (
          <BrowserRouter>
          <Switch>
            <Route path='/' exact component={App}></Route>
            <Route path='/Form' exact component={Form}></Route>
            <Route path='/Form2' exact component={Form2}></Route>


          </Switch>

          </BrowserRouter>
        )
    }
}

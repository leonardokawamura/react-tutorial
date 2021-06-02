import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch, 
  Link
} from "react-router-dom";
import Clock from './pages/Clock';
import ConsumingAPI from './pages/ConsumingAPI';
import TodoList from './pages/TodoList'

export function Routes() {

  return (
    <Router>      
      <div className="contianer-fluid" id="wrapper">
        <div className="row">
          <div className="col-md-2" id="sidebar">
            <h1 className="sidebar-title">PROJETOS</h1>
            <nav className="navbar">
              <ul>                
                <li className="nav-item">
                  <Link to="/todo-list">- TodoList</Link>
                </li>
                <li className="nav-item">
                  <Link to="/consuming-api">- Consuming API</Link>
                </li>
                <li className="nav-item">
                  <Link to="/clock">- Clock</Link>
                </li>
              </ul>
            </nav> 
          </div>
          <div className="col-md-10 col-md-offset-2" id="main">
            <Switch>        
              <Route path="/todo-list">
                <TodoList />
              </Route>
              <Route path="/consuming-api">
                <ConsumingAPI />
              </Route>
              <Route path="/clock">
                <Clock />
              </Route>
            </Switch>
          </div>
        </div>
      </div>      
    </Router>
  )
  
}
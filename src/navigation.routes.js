import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch, 
  Link
} from "react-router-dom";
import Clock from './pages/Clock';
import ConsumingAPI from './pages/ConsumingAPI';
import FilterableProductTable from './pages/FilterableProductTable';
import ListComponent from './pages/ListComponent';
import LoginControl from './pages/LoginControl';
import TodoList from './pages/TodoList'
import WaterBoilCalculator from './pages/WaterBoilCalculator';

const data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

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
                <li className="nav-item">
                  <Link to="/login-control">- LoginControl</Link>
                </li>
                <li className="nav-item">
                  <Link to="/list-component">- ListComponent</Link>
                </li>
                <li className="nav-item">
                  <Link to="/water-boil-calculator">- WalterBoilCalculator</Link>
                </li>
                <li className="nav-item">
                  <Link to="/filterable-product-table">- FilterableProductTable</Link>
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
              <Route path="/login-control">
                <LoginControl />
              </Route>
              <Route path="/list-component">
                <ListComponent />
              </Route>
              <Route path="/water-boil-calculator">
                <WaterBoilCalculator />
              </Route>
              <Route path="/filterable-product-table">
                <FilterableProductTable products={data} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>      
    </Router>
  )
  
}
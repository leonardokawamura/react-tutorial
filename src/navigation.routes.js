import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch, 
  Link,
  useRouteMatch
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

const links = [  
  {
    path: '/',
    label: 'TodoList',
    page: <TodoList />
  },
  {
    path: '/consuming-api',
    label: 'Consuming API',
    page: <ConsumingAPI />
  },
  {
    path: '/clock',
    label: 'Clock',
    page: <Clock />
  },
  {
    path: '/login-control',
    label: 'LoginControl',
    page: <LoginControl />
  },
  {
    path: '/list-component',
    label: 'ListComponent',
    page: <ListComponent />
  },
  {
    path: '/water-boil-calculator',
    label: 'WaterBoilCalculator',
    page: <WaterBoilCalculator />
  },
  {
    path: '/filterable-product-table',
    label: 'FilterableProductTable',
    page: <FilterableProductTable products={data} />
  },  
]

export function Routes() {

  function CustomMenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <div className={match ? "active" : ""}>        
        <Link to={to}>{label}</Link>
      </div>
    );
  }

  return (
    <Router>      
      <div className="contianer-fluid" id="wrapper">
        <div className="row">
          <div className="col-md-2" id="sidebar">
            <h1 className="sidebar-title">PROJETOS</h1>
            <nav className="navbar">
              <ul>    
                {
                  links.map((link, index) => (
                    <li key={index} className="nav-item">
                      <CustomMenuLink to={link.path} label={link.label} activeOnlyWhenExact={true} />
                    </li>
                  ))
                } 
              </ul>
            </nav> 
          </div>
          <div className="col-md-10 col-md-offset-2" id="main">
            <Switch>   
              {
                links.map((link, index) => (
                  <Route key={index} exact path={link.path}>
                    {link.page}
                  </Route>
                ))
              }
            </Switch>
          </div>
        </div>
      </div>      
    </Router>
  )
  
}
import React from 'react';
import { NavDropdown, MenuItem, Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';
import CourseItem from './common/courseItem.jsx';
import Search from './common/search.jsx';
import CategoryList from './common/categoryList.jsx';

import Logo from '../../assets/logo.svg';

import './app.scss';

const item = {
  name: 'Science',
  description: 'lalalalalalaala, werwerew, werwerwe. Hallo ik ben sjaak',
  category: 'History',
  price: '100'
};

const categories = ['Calculus', 'Language', 'History'];

const App = () => (
  <div className="app">
    <Navbar className="header" inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Redux</NavItem>
          <NavItem eventKey={2} href="#">React</NavItem>
          <NavDropdown eventKey={3} title="State" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="body">
      <div className="filter">
            <h3>Search:</h3>
            <Search />
            <h3>by Category</h3>
            <CategoryList categories={categories} />
            <h3>by Price:</h3>
            <input type="range" id="myRange" value="90" />

      </div>
      <div className="content">
                <CourseItem item={item} />
                <CourseItem item={item} />
                <CourseItem item={item} />
                <CourseItem item={item} />

      </div>
    </div>
    <div className="footer">
      &copy; 2017
    </div>
  </div>
);

export default App;

import React from 'react';
import { NavDropdown, MenuItem, Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';

import CoursesContainer from '../containers/courses.js';
import SearchFilter from '../containers/searchFilter.js';
import PriceFilter from '../containers/priceFilter.js';

import Logo from '../../assets/logo.svg';
import './app.scss';

const App = () => (
  <div className="app">
    <Navbar className="navbar" inverse collapseOnSelect>
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
    <Grid className="content">
      <Row>
        <Col xs={12} sm={12} md={3} className="filter-container">
          <h3>Filter by search:</h3>
          <SearchFilter />
          <h3>Filter by Price:</h3>
          <PriceFilter />
        </Col>
        <Col xs={12} sm={12} md={9} className="results-container">
          <CoursesContainer />
        </Col>
      </Row>
    </Grid>
    <div className="footer">
      &copy; 2017
    </div>
  </div>
);

export default App;

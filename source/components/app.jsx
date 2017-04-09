import React from 'react';
import { NavDropdown, MenuItem, Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';
import SearchContainer from '../containers/search.js';
import CoursesContainer from '../containers/courses.js';

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
        <Col xs={12} sm={3} md={3} className="filter-container">
          <h3>Search:</h3>
          <SearchContainer />
          <h3>by Price:</h3>
        </Col>
        <Col xs={12} sm={9} md={9}>
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

import React from 'react';
import {Card, CardBody, CardTitle, Collapse, ListGroup, ListGroupItem, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar fixed="top">
          <Nav navbar>
            <NavItem className="bolded">Graden Olson</NavItem>
            <NavItem>
              <a href="https://linkedin.com/in/graden-olson-54061a244/" target='_blank'>Linkedin</a>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/gradono' target='_blank'>Github</NavLink>
            </NavItem>
            <NavItem>gradenolson@gmail.com</NavItem>
            <NavItem>gho9644@rit.edu</NavItem>
          </Nav>
        </Navbar>
      </div>
      <div className="Cards">
        <div className="Experience">
          <Card>
            <CardBody>
              <CardTitle>Experience</CardTitle>
              <ListGroup>
                <ListGroupItem>Java(JUnit, SpringBoot)</ListGroupItem>
                <ListGroupItem>Python(Flask, pytest)</ListGroupItem>
                <ListGroupItem>JavaScript(React)</ListGroupItem>
                <ListGroupItem>Angular</ListGroupItem>
                <ListGroupItem>C, C++</ListGroupItem>
                <ListGroupItem>C#(Unity)</ListGroupItem>
                <ListGroupItem>SQL(PostgreSQL, pgAdmin)</ListGroupItem>
                <ListGroupItem>Agile</ListGroupItem>
                <ListGroupItem>Git</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </div>
        <div className="Projects">
          <Card>
            <CardBody>
              <CardTitle>Projects</CardTitle>
              <ListGroup>
                
              </ListGroup>
            </CardBody>
          </Card>
        </div>
      </div>
      
    </div>
  );
}

export default App;

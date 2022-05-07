import { useAuthenticator } from '@aws-amplify/ui-react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import ReactRotatingText from "react-rotating-text";
import './App.css';

import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

function App() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  let allTheThings = [
    "Fishing 🎣",
    "Swimming 🏊",
    "to an Art show 🎨",
    "do some burnouts 🚓",
    "mountain biking 🚴",
    "UFO spotting 🛸 👽",
    "Running 🏃",
  ];
  let accountNav;

  if(user) {
    console.log('user: ', user);
    accountNav = <>
      <Nav.Link >Welcome, {user.attributes.nickname}!</Nav.Link>;
      <Nav.Link onClick={signOut}>Sign Out</Nav.Link>;
    </>
  } else {
    accountNav = <Nav.Link href="">SignIn / SignUp</Nav.Link>;
  }
    

  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow mb-2">
        <Container>
          <Navbar.Brand>Lets Go</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/addcat">AddCat</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-end">
              {accountNav}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      Lets Go <ReactRotatingText items={allTheThings} />
      <Outlet />
      <div className="my-2 p-3 bg-dark text-light">&copy; 2022 Lets Go</div>
    </Container>
  );
}

export default withAuthenticator(App);

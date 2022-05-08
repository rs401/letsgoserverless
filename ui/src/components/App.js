import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import ReactRotatingText from "react-rotating-text";
// import { getCurrentUser } from "../services/user";

// import 'cross-fetch/polyfill';
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import { CognitoUserPool } from "amazon-cognito-identity-js";

var poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_POOL_ID,
  ClientId: process.env.REACT_APP_APP_CLIENT_ID,
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var cognitoUser = userPool.getCurrentUser();
console.log("current user", cognitoUser);

const logUser = () => {
  console.log("current user", cognitoUser.getUsername());
}

const logOutUser = () => {
  console.log("Logging out user: ", cognitoUser.getUsername());
  cognitoUser.signOut();
}

function getCurrentUser() {
  const userPool = new CognitoUserPool({
   UserPoolId: process.env.REACT_APP_COGNITO_POOL_ID,
   ClientId: process.env.REACT_APP_APP_CLIENT_ID,
  });
  return userPool.getCurrentUser();
 }

function App() {
  let allTheThings = [
    "Fishing 🎣",
    "Swimming 🏊",
    "to an Art show 🎨",
    "do some burnouts 🚓",
    "mountain biking 🚴",
    "UFO spotting 🛸 👽",
    "Running 🏃",
  ];
  console.log('getCurrentUser: ', getCurrentUser());
  let accountNav;
  if(cognitoUser !== null) {
    accountNav = <>
      <Nav.Link onClick={logUser}>accountName</Nav.Link>;
      <Nav.Link onClick={logOutUser}>LogOut</Nav.Link>;
    </>
  } else {
    accountNav = <Nav.Link href="https://letsgo.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=2fr657m7c1s5trjo4du4snae8c&redirect_uri=http://localhost:3000/auth">SignIn / SignUp</Nav.Link>;
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
              <Nav.Link href="#link">Link</Nav.Link>
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

export default App;

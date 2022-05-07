import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Auth } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const Account = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [nickname, setNickname] = useState("");
  const [picture, setPicture] = useState("");
  const [showsuccess, setShowsuccess] = useState(false);
  const [showerr, setShowerr] = useState(false);
  const [errmsg, setErrmsg] = useState('');

  useEffect(() => {
    if (user) {
      setNickname(user.attributes.nickname);
      setPicture(user.attributes.picture);
    }
  }, [user]);

  async function handleSaveAccountChanges(e) {
    e.preventDefault();
    if (nickname.trim() === "") {
      setErrmsg("Display Name cannot be empty.")
      setShowerr(true);
      return;
    }
    await Auth.updateUserAttributes(user, {
      nickname: nickname,
      picture: picture,
    }).then(() => {
      setShowsuccess(true);
    }).catch((err) => {
      console.log('error updating user attributes: ', err);
      setErrmsg("An error occurred.")
      setShowerr(true);
    });
  }

  if (user) {
    return (
      <Authenticator>
        {({ signOut, user }) => (
          <Container>
            <h4>Hello {user.attributes.nickname}</h4>
            <Container className="p-2 border">
              <Form
                onSubmit={(e) => {
                  handleSaveAccountChanges(e);
                }}
              >
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formProfilePicture"
                >
                  <Form.Label column sm="2">
                    <img src={picture} alt="profile" />
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      value={picture}
                      onChange={(e) => {
                        setPicture(e.target.value);
                      }}
                    />
                    <Form.Text className="text-muted">
                      URL of your profile picture
                    </Form.Text>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={user.attributes.email}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextNickname"
                >
                  <Form.Label column sm="2">
                    Display Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      value={nickname}
                      onChange={(e) => {
                        setNickname(e.target.value);
                      }}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextNickname"
                >
                  <Form.Label column sm="2"></Form.Label>
                  <Col sm="10">
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
              <ToastContainer className="p-3" position="middle-center">
                <Toast
                  bg="danger"
                  show={showerr}
                  onClose={() => setShowerr(false)}
                  delay={5000}
                  autohide
                >
                  <Toast.Header>
                    <strong className="me-auto">Error</strong>
                  </Toast.Header>
                  <Toast.Body>
                    <h4>{errmsg}</h4>
                  </Toast.Body>
                </Toast>
              </ToastContainer>
              <ToastContainer className="p-3" position="middle-center">
                <Toast
                  bg="success"
                  show={showsuccess}
                  onClose={() => setShowsuccess(false)}
                  delay={5000}
                  autohide
                >
                  <Toast.Header>
                    <strong className="me-auto">Success</strong>
                  </Toast.Header>
                  <Toast.Body>
                    <h4>Successfully updated your profile.</h4>
                  </Toast.Body>
                </Toast>
              </ToastContainer>
            </Container>
          </Container>
        )}
      </Authenticator>
    );
  } else {
    return (
      <>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
      </>
    );
  }
};

export default Account;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, API } from 'aws-amplify';
import awsExports from '../aws-exports';
import { createThread } from "../graphql/mutations";
import { getStates } from "../services/categorySvc";

Amplify.configure(awsExports);

const NewThread = () => {
  let states = getStates();
  let params = useParams();
  let catId = params.catId;
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState(''); 
  const [usstate, setUsstate] = useState('');

  async function handleAddThread(e) {
    e.preventDefault();
    if(title.trim() === "" || message.trim() === "" || usstate.trim() === "") {
      console.log('error: values cannot be empty for: title, message, state.');
      return;
    }
    let t = {
      title: title,
      message: message,
      categoryThreadsId: catId,
      state: usstate,
    };
    console.log('submitting new thread: ', t);
    const newThread = await API.graphql({ query: createThread, variables: {input: t}});
    console.log("newThread.data", newThread.data);
    // const newTodo = await API.graphql({ query: mutations.createTodo, variables: {input: todoDetails}});
  }
  
  return (
    <div className="py-4">
      <Form
        onSubmit={(e) => {
          handleAddThread(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formThreadState">
        <Form.Label>Thread State</Form.Label>
        <Form.Select
        className="shadow-sm"
        onChange={e => { setUsstate(e.target.value)}}
        aria-label="Filter by state"
      >
        <option value="">Select your State</option>
        {states.map((state) => {
          return (
            <option key={state} value={state}>
              {state}
            </option>
          );
        })}
      </Form.Select>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formThreadTitle">
          <Form.Label>Thread Title</Form.Label>
          <Form.Control type="text" value={title} onChange={e => { setTitle(e.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formThreadMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} value={message} onChange={e => { setMessage(e.target.value)}} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );

};

export default withAuthenticator(NewThread);

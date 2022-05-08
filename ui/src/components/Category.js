import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams, Link } from "react-router-dom";
import { getCategory, getStates, getThreads, getPostCount } from "../data";

function Category() {
  let params = useParams();
  let cat = getCategory(params.catId);
  let threads = getThreads(cat.id);
  let filteredThreads = [];
  let states = getStates();
  const [location, setLocation] = useState("");

  function filterByState(e) {
    if (e.target.value === "") {
      setLocation("");
    } else {
      setLocation(e.target.value);
    }
    threads.filter((thread) => thread.state === location);
  }

  if(location === "") {
    filteredThreads = threads;
  }
  if(location !== "") {
    filteredThreads = threads.filter((thread) => thread.state === location);
  }

  return (
    <div>
      <Form.Select
        className="shadow-sm"
        onChange={filterByState}
        aria-label="Filter by state"
      >
        <option value="">Filter by state</option>
        {states.map((state) => {
          return (
            <option key={state} value={state}>
              {state}
            </option>
          );
        })}
      </Form.Select>
      <Card className="my-2 shadow-sm">
        <Card.Body>
          ID: {cat.id} Name: {cat.name}
        </Card.Body>
      </Card>

      <ListGroup className="shadow-sm">
        {filteredThreads.map((thread, index) => {
          return (
            <Link
              key={index}
              to={`/thread/${thread.id}`}
              style={{ textDecoration: "none" }}
            >
              <ListGroup.Item
                action
                variant="light"
                className="p-3 d-flex justify-content-between align-items-start"
              >
                <div>{thread.title}</div>
                <div>
                  <span>{thread.state}</span>
                  {"  "}
                  <Badge bg="primary" pill>
                    {getPostCount(thread.id)}
                  </Badge>
                </div>
              </ListGroup.Item>
            </Link>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default Category;

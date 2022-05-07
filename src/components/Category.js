import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams, Link } from "react-router-dom";
import { getStates } from "../services/categorySvc";
import { listThreads, getCategory } from "../graphql/queries";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

function Category() {
  let params = useParams();
  let filteredThreads = [];
  let states = getStates();
  const [location, setLocation] = useState("");
  const [cat, setCat] = useState({});
  const [threads, setThreads] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function fetchCategory() {
    try {
      const catData = await API.graphql(
        graphqlOperation(getCategory, { id: params.catId })
      );
      const item = catData.data.getCategory;
      setCat(item);
    } catch (err) {
      console.log("error fetching cat.", err);
    }
  }
  async function fetchThreads() {
    try {
      const threadsData = await API.graphql(
        graphqlOperation(listThreads, {
          filter: { categoryThreadsId: { eq: params.catId } },
        })
      );
      const items = threadsData.data.listThreads.items;
      items.sort((a, b) => {
        return a.updatedAt > b.updatedAt ? 1 : -1;
      });
      setThreads(items);
    } catch (err) {
      console.log("error fetching threads.", err);
    }
  }

  useEffect(() => {
    if (!fetched) {
      setFetched(true);
      fetchCategory();
      fetchThreads();
    }
  }, []);

  function filterByState(e) {
    if (e.target.value === "") {
      setLocation("");
    } else {
      setLocation(e.target.value);
    }
    threads.filter((thread) => thread.state === location);
  }

  if (location === "") {
    filteredThreads = threads;
  }
  if (location !== "") {
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
          <div className="p-3">Category: <h3>{cat.name}</h3></div>
          <div className="justify-content-end">
            <Button href={`/newthread/${cat.id}`} variant="outline-primary">
              New Thread
            </Button>{" "}
          </div>
        </Card.Body>
      </Card>

      <ListGroup className="shadow-sm">
        {filteredThreads.map((thread, index) => {
          return (
            <Link
              key={thread.id}
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
                    1
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

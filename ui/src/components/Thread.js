import React from "react";
import Post from "./Post";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import { getThread, getPosts } from "../data";

function Thread() {
  let params = useParams();
  let thread = getThread(params.threadId);
  let posts = getPosts(thread.id);

  return (
    <div>
      <Card className="p-2 mb-2 shadow">
        <Card.Body>
          <Card.Title>{thread.title}</Card.Title>
          <Card.Text>{thread.body}</Card.Text>
        </Card.Body>
      </Card>
      <ListGroup className="shadow">
        {posts.map((post, index) => {
          return (
            <ListGroup.Item key={index} variant="light" className="p-3">
              <Post post={post} />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default Thread;

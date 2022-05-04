import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Placeholder from "react-bootstrap/Placeholder";
import { Link } from "react-router-dom";
import { getForums } from "../services/forum";

const CatList = () => {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    let mounted = true;
    getForums().then((items) => {
      if (mounted) {
        items.sort((a, b) => {
          return a.forum_name > b.forum_name ? 1 : -1;
        });
        setForums(items);
      }
    });

    return () => (mounted = false);
  }, []);

  if (forums.length === 0) {
    return (
      <div className="mt-3">
        <h3>Categories</h3>
        <ListGroup>
          <ListGroup.Item>
            <Placeholder xs={12}>
              <Placeholder as="p" animation="glow" />
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder xs={12}>
              <Placeholder as="p" animation="glow" />
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder xs={12}>
              <Placeholder as="p" animation="glow" />
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder xs={12}>
              <Placeholder as="p" animation="glow" />
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder xs={12}>
              <Placeholder as="p" animation="glow" />
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder xs={12}>
              <Placeholder as="p" animation="glow" />
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder xs={12}>
              <Placeholder as="p" animation="glow" />
            </Placeholder>
          </ListGroup.Item>
          <ListGroup.Item>
            <Placeholder xs={12}>
              <Placeholder as="p" animation="glow" />
            </Placeholder>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  } else {
    return (
      <div className="mt-3">
        <h3>Categories</h3>
        <ListGroup>
          {forums.map((cat, index) => {
            return (
              <Link
                key={index}
                to={`/category/${cat.forum_name}`}
                style={{ textDecoration: "none" }}
              >
                <ListGroup.Item
                  action
                  variant="light"
                  className="p-3 d-flex justify-content-between align-items-start"
                >
                  <div>{cat.forum_name}</div>
                  <div>
                    <small className="pe-3">Threads:{cat.threads}</small>
                    <small className="pe-3">Messages: {cat.messages}</small>
                    <small className="pe-3">Views: {cat.views}</small>
                  </div>
                </ListGroup.Item>
              </Link>
            );
          })}
        </ListGroup>
      </div>
    );
  }
};

export default CatList;

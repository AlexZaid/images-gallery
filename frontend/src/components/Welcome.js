import React from 'react';
import { Card } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Card>
      <Card.Header>Image Searcher</Card.Header>
      <Card.Body>
        <Card.Title>Search a random image in seconds</Card.Title>
        <Card.Text>
          Type in the input text and then click on search button.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Welcome;

import React from "react";
import { Container,Row,Col,Form,Button } from "react-bootstrap";

const Search = ({word, setWord, handleSubmit}) => {
    return(
            <Container className="mt-4">
              <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Row className="align-items-center">
                              <Col xs={9} className="my-1">
                                <Form.Control 
                                  type="text"
                                  value={word}
                                  onChange={(e)=> setWord(e.target.value)}
                                  id="inlineFormInputName"                                 
                                  placeholder="Search" 
                                />
                              </Col>
                              <Col xs="auto" className="my-1">
                                <Button type="submit">Search</Button>
                              </Col>
                        </Row>
                    </Form>
                </Col>
              </Row>
            </Container>
    );
};

export default Search;
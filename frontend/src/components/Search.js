import React from "react";
import { Container,Row,Col,Form,Button } from "react-bootstrap";

const Search = () => {
    return(
            <Container>
              <Row>
                <Col><Form>
                        <Row className="align-items-center">
                              <Col sm={3} className="my-1">
                                <Form.Control id="inlineFormInputName" placeholder="Search" />
                              </Col>
                              <Col xs="auto" className="my-1">
                                <Button type="submit">Search</Button>
                              </Col>
                            </Row>
                    </Form></Col>
              </Row>
            </Container>
    );
};

export default Search;
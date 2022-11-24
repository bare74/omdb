// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import React, { useState } from "react";

const NavBar = ({ searchHandler }: { searchHandler: any }) => {
  // const [message, setMessage] = useState("");

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   //prevent page refresh
  //   event.preventDefault();
  //   searchHandler(message);
  // };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">MOVIE & SERIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Hjem</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Film</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Serie</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Topp 10 filmer
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />

            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

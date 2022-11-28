import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

const SearchInput = ({ searchHandler }: { searchHandler: any }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //prevent page refresh
    event.preventDefault();
    searchHandler(message);
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        id="search-form"
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
    </Form>
  );
};

export default SearchInput;

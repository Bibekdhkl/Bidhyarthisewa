import './index.css'
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5 px-3"
        style={{ width: "20rem", borderColor: "black",backgroundColor: "#951E19",borderRadius: "50px" }}
      ></Form.Control>
      <Button
        type="submit"
        className="p-2"
        style={{
          color: "black",
          fontWeight: 900,
          backgroundColor: "#951E19",
          // backgroundColor: 'red',
          borderColor: "#951E19",
        }}
      >Search
      </Button>
    </Form>
  );
};

export default SearchBox;

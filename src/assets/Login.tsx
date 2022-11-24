import * as React from "react";
import LoginDetail from "./LoginDetail";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
// import AppService from "../components/AppService";
// import { BrowserRouter as Route } from "react-router-dom";
// import path from ".path";
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Route } from "react-router-dom";
// import AppService from "../components/AppService";

interface LoginState {
  password: string;
  username: string;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
}

type LoginAction =
  | { type: "login" | "success" | "error" | "logout" }
  | { type: "field"; fieldName: string; payload: string };

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    }
    case "success": {
      return { ...state, error: "", isLoading: false, isLoggedIn: true };
    }
    case "error": {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
        error: "Incorrect username or password!",
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

const initialState: LoginState = {
  password: "",
  username: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export default function Login() {
  const [state, dispatch] = React.useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      await LoginDetail({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                {isLoggedIn ? (
                  <>
                    <Button
                      type="button"
                      onClick={() => dispatch({ type: "logout" })}
                    >
                      Log out
                    </Button>
                  </>
                ) : (
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">
                      OMDB Movies & Series
                    </h2>
                    <Form className="d-flex" onSubmit={onSubmit}>
                      {error && <p className="error">{error}</p>}
                      <p className=" mb-5"> PLease Login!</p>

                      <Form.Control
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) =>
                          dispatch({
                            type: "field",
                            fieldName: "username",
                            payload: e.currentTarget.value,
                          })
                        }
                      />
                      <Form.Control
                        type="password"
                        placeholder="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) =>
                          dispatch({
                            type: "field",
                            fieldName: "password",
                            payload: e.currentTarget.value,
                          })
                        }
                      />
                      <Button
                        type="submit"
                        className="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? "Loggin in....." : "Login In"}
                      </Button>
                    </Form>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

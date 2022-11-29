import React from "react";
import LoginDetail from "./LoginDetail";
import "./Login.css";
import DashBoard from "../components/DashBoard";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import { useEffect } from "react";

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

console.log("field");

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

  // const loggedIn = "admin";

  //   if (loggedIn === username) {
  //   () => dispatch({ type: "success" })
  //   }
  // );

  // console.log(isLoading);

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
    <div className="Login">
      <div className="login-container">
        {isLoggedIn ? (
          <div className="TEST">
            <DashBoard />
            <div className="App_button">
              <Button
                type="button"
                onClick={() => dispatch({ type: "logout" })}
              >
                Log out
              </Button>
            </div>
          </div>
        ) : (
          <Form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>
              <strong>LOGIN</strong>
            </p>
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
            <Button type="submit" className="submit" disabled={isLoading}>
              {isLoading ? "Loggin in....." : "Login In"}
            </Button>
            <p> LOGIN detail Username = "admin" Password = "admin"</p>
          </Form>
        )}
      </div>
    </div>
  );
}
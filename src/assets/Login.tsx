import React from "react";
import LoginDetail from "./LoginDetail";
import "./Login.css";
import AppService from "../components/AppService";
import { useEffect } from "react";

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

  console.log(username);
  console.log(isLoggedIn);
  console.log(isLoading);

  useEffect(() => {
    localStorage.setItem("userLogged", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const stillLoggedIn = JSON.parse(localStorage.getItem("userLogged") as any);
  console.log(stillLoggedIn);

  //TEST TEST
  //TEST TEST
  // localStorage?.setItem("test", JSON.stringify(isLoggedIn));
  // let result = JSON.parse(localStorage?.getItem("test"));

  // console.log(result);

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
        {stillLoggedIn || isLoggedIn ? (
          <div className="TEST">
            <AppService />
            <button type="button" onClick={() => dispatch({ type: "logout" })}>
              Log out
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p> PLease Login!</p>
            <input
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
            <input
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
            <button type="submit" className="submit" disabled={isLoading}>
              {isLoading ? "Loggin in....." : "Login In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
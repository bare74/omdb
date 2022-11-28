import React from "react";
import LoginDetail from "./LoginDetail";
import "./Login.css";
import DashBoard from "../components/DashBoard";
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
  console.log(initialState);

  useEffect(() => {
    localStorage.setItem("userLogged", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const stillLoggedIn = JSON.parse(localStorage.getItem("userLogged") as any);
  console.log(stillLoggedIn);

  console.log(process.env.REACT_APP_BASE_URL);

  //   //TEST TEST
  //   //TEST TEST
  //   // localStorage?.setItem("test", JSON.stringify(isLoggedIn));
  //   // let result = JSON.parse(localStorage?.getItem("test"));

  //   // console.log(result);

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
            <DashBoard />
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

// import { Component } from "react";
// import "./Login.css";
// import { Navigate } from "react-router-dom";

// class Login extends Component<{}, { islogged: boolean; loginParams: any }> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       islogged: false,
//       loginParams: {
//         user_id: "",
//         user_password: "",
//       },
//     };
//   }
//   handleFormChange = (event: any) => {
//     let loginParamsNew = { ...this.state.loginParams };
//     let val = event.target.value;
//     loginParamsNew[event.target.name] = val;
//     this.setState({
//       loginParams: loginParamsNew,
//     });
//   };
//   login = (event: any) => {
//     let user_id = this.state.loginParams.user_id;
//     let user_password = this.state.loginParams.user_password;
//     if (user_id === "admin" && user_password === "123") {
//       localStorage.setItem("token", "T");
//       this.setState({
//         islogged: true,
//       });
//     }
//     event.preventDefault();
//   };
//   render() {
//     if (localStorage.getItem("token")) {
//       return <Navigate to="/app" />;
//     }
//     return (
//       <div className="login">
//         <form onSubmit={this.login} className="form-signin">
//           <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

//           <div className="row">
//             <div className="col1">
//               <input
//                 className="input-login"
//                 type="text"
//                 name="user_id"
//                 onChange={this.handleFormChange}
//                 placeholder="Enter Username"
//               />

//               <input
//                 className="input-login"
//                 type="password"
//                 name="user_password"
//                 onChange={this.handleFormChange}
//                 placeholder="Enter Password"
//               />

//               <input className="input-login" type="submit" value="Login" />
//             </div>
//           </div>
//           <br />
//           <br />
//           <br />
//           <p>username = admin & password = 123</p>
//         </form>
//       </div>
//     );
//   }
// }
// export default Login;

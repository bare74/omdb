import { useState } from "react";

function LoginForm({ Login, error }: { Login: any; error: any }) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e: any) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form>
      <div className="login__wrapper">
        <div className="login__content">
          <h2>Log in</h2>

          {error !== "" ? <div>{error}</div> : ""}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            ></input>
          </div>
          <button onClick={submitHandler}>Log in</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;

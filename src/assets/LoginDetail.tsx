import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../assets/LoginForm";

function LoginDetail() {
  const adminUser = {
    username: "admin",
    password: "admin",
  };

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Login = (details: any) => {
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      setUser({
        username: details.username,
        password: details.password,
      } as any);
      localStorage.setItem("username", details.username);
      localStorage.setItem("authenticated", "true");

      navigate("/display");
    } else {
      setError("Wrong username or password !");
    }
  };

  return (
    <div>
      {user.username !== "" ? (
        <div>
          <h2>
            Welcome <span>{user.username}</span>
          </h2>
          <hr />
          {/* <button onClick={Logout}>Log out</button> */}
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default LoginDetail;

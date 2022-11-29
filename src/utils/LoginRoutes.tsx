import { useNavigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const admin = localStorage.getItem("username") as string;
  if (admin) {
    return "true";
  } else {
    return "false";
  }
};

const LoginRoutes = (props: null) => {
  const navigate = useNavigate();
  const auth = useAuth();
  return auth ? <Outlet /> : navigate("/app");
};

export default LoginRoutes;

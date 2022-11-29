import Signup from "./assets/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../src/contexts/AuthContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./assets/Dashboard";
import Login from "./assets/Login";
import PrivateRoute from "./utils/PrivateRoute";
import ForgotPassword from "./assets/ForgotPassword";
import UpdateProfile from "./assets/UpdateProfile";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Router>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Router>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;

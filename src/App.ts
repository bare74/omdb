import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PrivateRoute } from "./app/PrivateRoute";
import { history } from "./helpers/history";
import { LoginPage, UsersListPage, DynamicFormPage } from "./app/pages";
// import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dynamic-form" component={DynamicFormPage} />
        <PrivateRoute exact path="/">
          <Navigate to={{ pathname: "/v1" }} />
        </PrivateRoute>
        <PrivateRoute path="/v1" component={UsersListPage} />
      </Routes>
    </Router>
  );
}

export default App;

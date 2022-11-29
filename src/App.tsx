import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppService from "./components/DashBoard";
import LoginDetail from "./assets/LoginDetail";
import LoginRoutes from "./utils/LoginRoutes";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginDetail />} />
          <Route element={<LoginRoutes />}></Route>
          <Route path="/app" element={<AppService />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

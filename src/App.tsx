import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/Login";
import AppService from "./components/AppService";

function App() {
  return (
    <div className="navBar">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movie&series" element={<AppService />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

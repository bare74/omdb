import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./assets/Login";
import Sandbox from "./components/Test";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test" element={<Sandbox />} />
      </Routes>
    </>
  );
};

export default App;

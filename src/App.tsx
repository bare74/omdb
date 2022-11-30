import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./assets/Login";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;

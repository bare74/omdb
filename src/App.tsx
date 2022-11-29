import "./App.css";
import { Route, Routes } from "react-router";

import Sandbox from "./components/Test";
import AppService from "./components/DashBoard";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/test" element={<Sandbox />} />
        <Route path="/app" element={<AppService />} />
      </Routes>
    </>
  );
};

export default App;

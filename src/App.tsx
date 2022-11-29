import "./App.css";
import { Route, Routes } from "react-router";

import AppService from "./components/DashBoard";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppService />} />
      </Routes>
    </>
  );
};

export default App;

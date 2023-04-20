import logo from "./logo.svg";
import "./App.css";
import HomePage from "./page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import { NotifPage } from "./page/NotifPage/NotifPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/notif" element={<NotifPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

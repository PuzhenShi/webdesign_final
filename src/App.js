import "./App.css";
import MainPage from "./component/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import LoginPage from "./component/LoginPage/LoginPage";
import RegisterPage from "./component/RegisterPage/RegisterPage";
import VedioPage from "./component/VideoPage/VedioPage";
import AboutPage from "./component/AboutPage/AboutPage";
import AdminPage from "./component/AdminPage/AdminPage";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/video" element={<VedioPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { AplicationsPage } from "./pages/AplicationsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/aplications" element={<AplicationsPage />}></Route>
        <Route path="/errorPage" element={<ErrorPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

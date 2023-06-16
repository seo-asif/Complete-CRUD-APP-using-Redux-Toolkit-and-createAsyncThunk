import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Welcome from "./components/Welcome";
import Read from "./components/Read";

function App() {
  return (
    <div className="app min-vh-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

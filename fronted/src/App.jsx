import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginModel from './components/LoginModel';
import Main from "./components/Main";
import Master from "./components/Master";
import ShabatTruma from "./components/ShabatTruma";
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/LoginModel" element={<LoginModel />} />
        <Route path="/Master" element={<Master />} />
        <Route path="/ShabatTruma" element={<ShabatTruma />} />
      </Routes>
    </Router>

  );
}

export default App;

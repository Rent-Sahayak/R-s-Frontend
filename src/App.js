import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import './App.css';
import IndexPage from "./components/Property/IndexPage";
import ViewProperty from "./components/Property/PropertyList/ViewProperty";
import ForgetPassword from "./components/Auth/ForgetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/house" element={<IndexPage/>}/>
        <Route path="/propertylist" element={<ViewProperty/>}/>
      </Routes>
    </Router>
  );
}

export default App;

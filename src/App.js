import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Property from "./components/Property/Property";
import RenterBoard from "./components/Dashboard/Renterdashboard/RenterBoard";
import './App.css';
import IndexPage from "./components/Property/IndexPage";
import ViewProperty from "./components/Property/PropertyList/ViewProperty";
import ForgetPassword from "./components/Auth/ForgetPassword";
import Index from "./components/Dashboard/Index";
import { OTP } from "./components/Auth/OTP";
import ResetPassword from "./components/Auth/ResetPassword";
import GoogleMap from "./components/Property/PropertyList/GoogleMap";
import ProfileScreen from "./components/Dashboard/screens/ProfileScreen/ProfileScreen";
import OtpRegister from "./components/Auth/OtpRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/otpcode' element={<OTP/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Index/>}/>
        <Route path="/renterdashboard" element={<RenterBoard/>}/>
        <Route path="/house" element={<IndexPage/>}/>
        <Route path="/propertylist" element={<ViewProperty/>}/>
        <Route path='/userprofile' element={<ProfileScreen/>}/>
        <Route path='/otpregister' element={<OtpRegister/>}/>
      </Routes>
    </Router>
  );
}

export default App;

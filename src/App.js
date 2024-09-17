import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Listings from "./pages/Listings";
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import About from "./pages/About";

function App() {
  return(
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/listings" element={<Listings/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/log-in" element={<LogIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>
        
      </Router>
    </>
  ); 
}

export default App;

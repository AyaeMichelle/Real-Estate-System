import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import SignUp from "./pages/SignUp.jsx";
import Header from "./components/Header.jsx";
import Listings from "./pages/Listings.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LogIn from "./pages/LogIn.jsx";
import About from "./pages/About.jsx";

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

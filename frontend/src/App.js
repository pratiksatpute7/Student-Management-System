import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header'; 
import LoginSignup from './Components/LoginSIgnup/loginsignup';
import AddStudentForm from './Components/AddStudent/AddStudent';
import CreateCourseForm from './Components/CreateCourse/CreateCourseForm';
import DisplayStudentProfile from './Components/DisplayStudentProfile/displaystudentprofile';
import CourseDashboard from './Components/CourseDashboard/coursedashboard';
import Login from './Components/Login/login';
function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/LoginSignup" element={<LoginSignup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/AddStudent" element={<AddStudentForm/>} />
        <Route path="/CreateCourse" element={<CreateCourseForm/>} />
        <Route path="/DisplayStudentProfile" element={<DisplayStudentProfile/>} />
        <Route path="/coursedashboard" element={<CourseDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;

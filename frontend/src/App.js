import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header'; 
import LoginSignup from './Components/LoginSIgnup/loginsignup';
import AddStudentForm from './Components/AddStudent/AddStudent';
import CreateCourseForm from './Components/CreateCourse/CreateCourseForm';
import DisplayStudentProfile from './Components/DisplayStudentProfile/displaystudentprofile';
import CourseDashboard from './Components/courseDashboard/coursedashboard';
import Login from './Components/Login/login';
import AdminDashboard from './Components/AdminDashboard/admindashboard';
import StudentDashboard from './Components/StudentDashboard/studentdashboard';

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
        <Route path="/admindashboard" element={<AdminDashboard/>} />
        <Route path="/studentdashboard" element={<StudentDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;

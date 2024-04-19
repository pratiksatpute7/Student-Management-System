import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSIgnup/loginsignup';
import AddStudentForm from './Components/AddStudent/AddStudent';
import CreateCourseForm from './Components/CreateCourse/CreateCourseForm';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginSignup" element={<LoginSignup/>} />
        <Route path="/AddStudent" element={<AddStudentForm/>} />
        <Route path="/CreateCourse" element={<CreateCourseForm/>} />
      </Routes>
    </Router>
  );
}

export default App;

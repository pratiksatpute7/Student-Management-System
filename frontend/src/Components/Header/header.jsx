import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {getUserFromLocalStorage} from '../../Utils/utils'; // Adjust the path based on the actual folder structure


const Header = () => {

  const checkuser = () => {//same
    const userData = getUserFromLocalStorage()
    if(userData){
      return true;

    }
    return false;
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/LoginSignup">Login/Signup</Button>
        
        <Button color="inherit" component={Link} to="/AddStudent" style={{display: checkuser() ? 'block' : 'none' }} >Add Student</Button>
        <Button color="inherit" component={Link} to="/CreateCourse">Create Course</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

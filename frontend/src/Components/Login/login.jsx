import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';

const Login = () => { //diff
  const userLoginModel = {
    userName: '',
    password: ''
  };

  const [data, setData] = useState(userLoginModel);//same

  const handleInputChange = (e) => {//same
    const { name, value } = e.target;
    // Update the state with the new value while preserving other properties
    setData({
      ...data,
      [name]: value
    })};


  const handleLogin = async (e) => {//same
    e.preventDefault(); // Prevent default form submission behavior
    // Call the onLogin function passed as a prop, passing username and password
    await fetch('http://localhost:5244/login/student',{ //diff
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(r=>r.json()).then(res=>{
      if(res){
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res));
      }})
      .catch(error =>{
          console.log(error)
      })
  };

  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar style={{ margin: 8, backgroundColor: 'secondary' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form style={{ width: '100%', marginTop: 3 }} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="userName"
            autoComplete="email"
            autoFocus
            onChange={handleInputChange} 
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 3, marginBottom: 2 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Don\'t have an account? '}
          <Link color="inherit" href="#">
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;

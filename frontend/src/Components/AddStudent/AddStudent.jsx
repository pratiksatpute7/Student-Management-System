import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Grid } from '@mui/material';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';
const AddStudentForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to backend 

        console.log(formData);
        // Clear form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            age: ''
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}></div>
            <Avatar style={{ margin: 8, backgroundColor: 'secondary' }}>
                <PersonAddRoundedIcon />
            </Avatar>
            <Typography variant="h5" component="h1">
                Add Student
                {/* <PersonAddRoundedIcon sx={{ mr: 1 }} /> Add Student */}
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    type="number"
                    margin="normal"
                />
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                        Add Student to System
                    </Button>
                </Box>
            </form>
        </Container>
        
    );
};

export default AddStudentForm;

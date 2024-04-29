import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const StudentDashboard = () => {
  // Placeholder data 
  const courses = [
    {
      title: 'Course 1',
      description: 'Description for Course 1',
      credits: 3,
      instructor: 'Instructor 1',
      maxCapacity: 50,
      currentEnrollments: 30
    },
    {
      title: 'Course 2',
      description: 'Description for Course 2',
      credits: 4,
      instructor: 'Instructor 2',
      maxCapacity: 40,
      currentEnrollments: 20
    },
    {
      title: 'Course 3',
      description: 'Description for Course 3',
      credits: 2,
      instructor: 'Instructor 3',
      maxCapacity: 60,
      currentEnrollments: 45
    }
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        Courses Available for Enrollment
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body1">
                  <strong>Description:</strong> {course.description}
                </Typography>
                <Typography variant="body1">
                  <strong>Credits:</strong> {course.credits}
                </Typography>
                <Typography variant="body1">
                  <strong>Instructor:</strong> {course.instructor}
                </Typography>
                <Typography variant="body1">
                  <strong>Max Capacity:</strong> {course.maxCapacity}
                </Typography>
                <Typography variant="body1">
                  <strong>Current Enrollments:</strong> {course.currentEnrollments}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  Enroll
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StudentDashboard;

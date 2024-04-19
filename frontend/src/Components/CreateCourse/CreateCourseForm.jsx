import React, { useState } from 'react';
import './CreateCourseForm.css'; // Import the CSS file

const CreateCourseForm = () => {
    const [formData, setFormData] = useState({
        courseName: '',
        description: '',
        courseCode: '',
        maxCapacity: 0,
        credits: 0,
        departmentId: 'ECS' // Default department
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
        // Send formData to backend for processing
        console.log(formData);
        // Clear form after submission
        setFormData({
            courseName: '',
            description: '',
            courseCode: '',
            maxCapacity: 0,
            credits: 0,
            departmentId: 'ECS' // Reset to default department
        });
    };

    return (
        <div className="container">
            <h2>Create Course</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Course Name:</label>
                    <input
                        type="text"
                        name="courseName"
                        value={formData.courseName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Course Code:</label>
                    <input
                        type="text"
                        name="courseCode"
                        value={formData.courseCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Max Capacity:</label>
                    <input
                        type="number"
                        name="maxCapacity"
                        value={formData.maxCapacity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Credits:</label>
                    <input
                        type="number"
                        name="credits"
                        value={formData.credits}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <select
                        name="departmentId"
                        value={formData.departmentId}
                        onChange={handleChange}
                        required
                    >
                        <option value="ECS">ECS</option>
                        <option value="MATH">MATH</option>
                        <option value="PHY">PHY</option>
                        <option value="BIO">BIO</option>
                    </select>
                </div>
                <button type="submit">Create Course</button>
            </form>
        </div>
    );
};

export default CreateCourseForm;

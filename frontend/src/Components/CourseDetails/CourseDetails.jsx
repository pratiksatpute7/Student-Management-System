import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function CourseDetails() {
    const [courseData, setCourseData] = useState(null);
    const [error, setError] = useState('');
    const [searchParams] = useSearchParams();
   
    const [courseId, setCourseId] = useState('');

    useEffect(() => {
        
        const id = searchParams.get('courseId');
        if (id) {
            setCourseId(id);
            getCourseDetails(id); 
        } else {
            setError('No course ID provided in the URL.');
        }
    }, [searchParams]); 

    const getCourseDetails = async (id) => {
        console.log("Fetching course details for ID:", id);
        try {
            const url = `https://localhost:7167/api/course/details?courseId=${id}`;
            const response = await axios.get(url);
            console.log("Data received:", response.data);
            setCourseData(response.data);
        } catch (err) {
            console.error("Error during fetch:", err);
            setError(`Error fetching course details: ${err.response ? err.response.data : err.message}`);
            setCourseData(null);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                placeholder="Enter Course ID"
            />
            <button onClick={() => getCourseDetails(courseId)}>Get Course Details</button>
            {error && <p className="error">{error}</p>}
            {courseData && (
                <div>
                    <h3>Course Details</h3>
                    <pre>{JSON.stringify(courseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default CourseDetails;

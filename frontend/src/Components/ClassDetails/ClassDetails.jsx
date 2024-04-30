import React, { useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function ClassDetails() {
    const [classData, setClassData] = useState(null);
    const [error, setError] = useState('');
    const [searchParams] = useSearchParams();

    const getClassDetails = async () => {
        const classId = searchParams.get('classId');
        console.log("Requested class ID:", classId); 

        if (!classId) {
            setError('No class ID provided');
            console.error('No class ID provided in the query parameters.'); 
            return;
        }

        console.log("Fetching class details..."); 
        try {
            const url = `https://localhost:7167/class/details?classId=${classId}`;
            const response = await axios.get(url);
            console.log("Data received:", response.data); 
            setClassData(response.data);
        } catch (err) {
            console.error("Error during fetch:", err); // 打印捕获到的错误
            setError(`Error fetching class details: ${err.response ? err.response.data : err.message}`);
            setClassData(null);
        }
    };

    return (
        <div>
            <button onClick={getClassDetails}>Get Class Details</button>
            {error && <p className="error">{error}</p>}
            {classData && (
                <div>
                    <h3>Class Details</h3>
                    <pre>{JSON.stringify(classData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default ClassDetails;

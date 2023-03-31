import React, { useEffect, useState } from 'react';
import './ReadTime.css'
const ReadTime = ({ readTime }) => {
    console.log(readTime);
    const [time, setTime] = useState(readTime);
    console.log(time);
    useEffect(() => {
        const getReadTime = localStorage.getItem('readTime')
        setTime(getReadTime)
    },[readTime])

    return (
        <div className='text-center rounded-lg flex justify-center items-center border-blue-800 border' style={{ background: 'rgba(96, 71, 236, 0.1)', height: '80px' }}>
            <h3 className='text-xl font-bold text-blue-600'>Spent time on read: {time ? time : 0} min</h3>
        </div>
    );
};

export default ReadTime;
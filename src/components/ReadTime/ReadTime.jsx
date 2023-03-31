import React from 'react';
import './ReadTime.css'
const ReadTime = () => {
    return (
        <div className='text-center rounded-lg flex justify-center items-center border-blue-800 border' style={{ background: 'rgba(96, 71, 236, 0.1)', height: '80px' }}>
            <h3 className='text-xl font-bold text-blue-600'>Spent time on read: 150 min</h3>
        </div>
    );
};

export default ReadTime;
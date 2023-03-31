import React, { useEffect, useState } from 'react';
import BookmarkItem from '../BookmarkItem/BookmarkItem';

const BookMarked = ({ bmBlogs }) => {
    return (
        <div className='rounded-lg my-4 p-5' style={{ background: 'rgba(17, 17, 17, 0.05)' }}>
            <h2 className='text-xl font-bold'>Bookmarked Blogs: {bmBlogs.length}</h2>
            {
                bmBlogs.map((blog, index) => <BookmarkItem blog={blog} key={index}></BookmarkItem>)
            }
        </div>
    );
};

export default BookMarked;
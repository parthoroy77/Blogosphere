import React, { useEffect, useState } from 'react';
import BookmarkItem from '../BookmarkItem/BookmarkItem';

const BookMarked = ({ bmBlogs }) => {
    return (
        <div className='rounded-lg my-4 p-5 md:sticky md:top-24' style={{ background: 'rgba(17, 17, 17, 0.05)' }}>
            <h2 className='text-xl font-bold'>Bookmarked Blogs: {bmBlogs.length}</h2>
            {
                bmBlogs.map(blog => <BookmarkItem blog={blog}></BookmarkItem>)
            }
        </div>
    );
};

export default BookMarked;
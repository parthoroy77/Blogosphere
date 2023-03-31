import React from 'react';
import BookmarkItem from '../BookmarkItem/BookmarkItem';

const BookMarked = () => {
    return (
        <div className='rounded-lg my-4 p-5' style={{ background: 'rgba(17, 17, 17, 0.05)' }}>
            <h2 className='text-xl font-bold'>Bookmarked Blogs: 8</h2>
            <BookmarkItem></BookmarkItem>
            <BookmarkItem></BookmarkItem>
            <BookmarkItem></BookmarkItem>
        </div>
    );
};

export default BookMarked;
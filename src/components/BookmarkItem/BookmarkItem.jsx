import React from 'react';

const BookmarkItem = ({blog}) => {
    return (
        <div className='mt-4'>
            <div className="card w-full bg-base-100 shadow-md">
                <div className="card-body p-4">
                    <h3 className='text-md font-semibold'>{blog.blog_title}</h3>
                </div>
            </div>
        </div>
    );
};

export default BookmarkItem;
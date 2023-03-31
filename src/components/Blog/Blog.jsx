import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = ({ blog, handleBookMark, handleReadTime }) => {
  const {
    _id,
    blog_title,
    author_img,
    blog_img,
    publish_date,
    read_time,
    author_name,
  } = blog;
  return (
    <div className="px-8 my-3">
      <div className="card w-full bg-base-100 shadow-md">
        <div className="p-4">
          <img className="w-full rounded-xl" src={blog_img} alt="" />
        </div>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img className="w-16 rounded-full" src={author_img} alt="" />
              <div>
                <h4 className="font-bold text-xl">{author_name}</h4>
                <p className="text-zinc-500-700">{publish_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p>{read_time} min read</p>
              <button onClick={() => handleBookMark(_id)}>
                <FontAwesomeIcon icon={faBookmark} style={{fontSize:'30px'}} />
              </button>
            </div>
          </div>
          <h2 className="card-title text-4xl my-4 font-semibold font-serif">{blog_title}</h2>
          <p className="text-cyan-700">#beginners #programming</p>
          <div className="card-actions justify-start">
            <button onClick={() => handleReadTime(read_time)} className="text-blue-800 font-bold underline mt-4">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
  console.log(props.blog);
  const {
    _id,
    blog_title,
    author_img,
    blog_img,
    publish_date,
    read_time,
    author_name,
  } = props.blog;
  return (
    <div className="p-8">
      <div className="card w-full bg-base-100 shadow-md">
        <div className="p-4">
          <img className="w-full rounded-xl" src={blog_img} alt="" />
        </div>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img className="w-16 rounded-full" src={author_img} alt="" />
              <div>
                <h4>{author_name}</h4>
                <p>{publish_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p>{read_time} min read</p>
              <button>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
          <h2 className="card-title text-4xl my-4 font-semibold font-serif">{blog_title}</h2>
          <p>#beginners #programming</p>
          <div className="card-actions justify-start">
            <a className="text-blue-800 font-bold underline mt-4" href="/link">Mark as read</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

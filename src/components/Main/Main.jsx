import React, { useEffect, useState } from "react";
import "./Main.css";
import Blog from "../Blog/Blog";
import ReadTime from "../ReadTime/ReadTime";
import BookMarked from "../BookMarked/BookMarked";
const Main = () => {
  const [data, setData] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bmBlogs, setBmBlogs] = useState([])
  const handleReadTime = (time) => {
    const storedTime = JSON.parse(localStorage.getItem('readTime'));
    if (storedTime) {
      const newTime = storedTime + time;
      localStorage.setItem('readTime', newTime);
      setReadTime(newTime)
    }
    else {
      localStorage.setItem('readTime', time);
      setReadTime(time)
    }
  }
  console.log(bmBlogs);
  let bookmarkArr = [];
  const handleBookMark = (id) => {
    const bookmarkedBlog = data.find(blog => blog._id === id);
    setBmBlogs([...bmBlogs, bookmarkedBlog])
  }
  useEffect(() => {
    fetch('data.json').then(res => res.json()).then(data => setData(data))
  },[])
  return (
    <div className="main-container">
      <div className="blog-container">
        {
          data.map(singleData => <Blog blog={singleData} handleReadTime={handleReadTime} handleBookMark={handleBookMark} key={singleData._id}></Blog>)
        }
      </div>
      <div className="bookmark-container px-8 relative">
        <ReadTime readTime={readTime}></ReadTime>
        <BookMarked bmBlogs={bmBlogs}></BookMarked>
      </div>
    </div>
  );
};

export default Main;

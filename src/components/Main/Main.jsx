import React, { useEffect, useState } from "react";
import "./Main.css";
import Blog from "../Blog/Blog";
import ReadTime from "../ReadTime/ReadTime";
import BookMarked from "../BookMarked/BookMarked";
const Main = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('data.json').then(res => res.json()).then(data => setData(data))
  },[])
  return (
    <div className="main-container">
      <div className="blog-container">
        {
          data.map(singleData => <Blog blog={singleData} key={singleData._id}></Blog>)
        }
      </div>
      <div className="bookmark-container px-8">
        <ReadTime></ReadTime>
        <BookMarked></BookMarked>
      </div>
    </div>
  );
};

export default Main;

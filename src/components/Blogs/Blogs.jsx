import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://blogs.free.beeceptor.com/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="blogs-bookmark-container">
      <div>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog._id}></Blog>
        ))}
      </div>
      <div>hi</div>
    </div>
  );
};

export default Blogs;

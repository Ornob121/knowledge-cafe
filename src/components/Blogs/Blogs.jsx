import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const setBookmark = (blog) => {
    const newBookmark = [...bookmarked, blog];
    setBookmarked(newBookmark);
  };

  const readTime = (time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
  };

  return (
    <div className="blogs-bookmark-container">
      <div>
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            key={blog._id}
            setBookmark={setBookmark}
            readTime={readTime}
          ></Blog>
        ))}
      </div>
      <div className="ml-6">
        <div className="text-center">
          <h4
            className="px-10  text-2xl font-bold py-5 rounded-lg"
            style={{ color: "#6047EC", background: "rgba(96, 71, 236, 0.1)" }}
          >
            Spent time on read: {readingTime} min
          </h4>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-2xl">
            Bookmarked Blogs :{bookmarked.length}
          </h3>
          {bookmarked.map((bookmark) => (
            <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
  //   console.log(props.blog);
  const { name, picture, profile, time, title, publish_date } = props.blog;
  const setBookmark = props.setBookmark;
  const readTime = props.readTime;
  return (
    <div style={{ width: "845px" }}>
      <img
        style={{
          height: "450px",
          width: "845px",
          borderRadius: "8px",
          marginBottom: "34px",
        }}
        src={picture}
        alt=""
      />
      <div className="flex justify-between">
        <div>
          <div className="flex items-center">
            <img className="h-14 w-14 mr-6 rounded-full" src={profile} alt="" />
            <div>
              <h5 className="font-bold text-2xl">{name}</h5>
              <p
                style={{ color: " rgba(17, 17, 17, 0.6)" }}
                className="font-semibold"
              >
                {publish_date}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <p
            style={{ color: " rgba(17, 17, 17, 0.6)" }}
            className="font-semibold mr-3"
          >
            {time} min read
          </p>
          <button onClick={() => setBookmark(props.blog)}>
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
      <h2
        className="text-4xl font-bold mt-6"
        style={{ lineHeight: "64px", width: "737px" }}
      >
        {title}
      </h2>
      <p style={{ color: " rgba(17, 17, 17, 0.6)" }} className="font-semibold">
        #beginners #programming
      </p>
      <button
        className="px-0 btn btn-link mb-10"
        onClick={() => readTime(time)}
      >
        Mark as read
      </button>
      <hr
        style={{
          border: "1px solid rgba(17, 17, 17, 0.15)",
          marginBottom: "40px",
        }}
      />
    </div>
  );
};

export default Blog;

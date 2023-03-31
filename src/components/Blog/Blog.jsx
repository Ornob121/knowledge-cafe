import React from "react";

const Blog = ({ blog }) => {
  console.log(blog);
  const { name, picture, profile, time, title } = blog;
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
                Feb 2 (3 days ago)
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <p
            style={{ color: " rgba(17, 17, 17, 0.6)" }}
            className="font-semibold"
          >
            {time} min read
          </p>
          <button></button>
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
    </div>
  );
};

export default Blog;

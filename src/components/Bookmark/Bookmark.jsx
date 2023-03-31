import React from "react";

const Bookmark = ({ bookmark }) => {
  return (
    <div className="mx-4 drop-shadow mb-4 bg-white rounded-lg">
      <h5 className="text-xl font-semibold px-5 py-5">{bookmark.title}</h5>
    </div>
  );
};

export default Bookmark;

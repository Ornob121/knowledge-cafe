import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between mx-auto mt-12 mb-12 items-center font-bold">
        <h1 className="text-4xl">Knowledge Cafe</h1>
        <img
          className="h-14 w-14 rounded-full"
          src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
          alt=""
        />
      </div>
      <hr style={{ border: "1px solid rgba(17, 17, 17, 0.15)" }} />
    </div>
  );
};

export default Header;

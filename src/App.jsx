import React from "react";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Answers from "./components/Answers/Answers";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Answers></Answers>
    </div>
  );
};

export default App;

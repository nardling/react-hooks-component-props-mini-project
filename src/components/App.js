import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList.js"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about} imgSrc={blogData.image}/>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

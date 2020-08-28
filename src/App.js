import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>Welcome!</h1>
      <Post
        username="Lucian"
        caption="Caption here"
        imageUrl="https://miro.medium.com/max/3000/1*3f7gyFnHcBqrwXUe7bDILw.jpeg"
      />
      <Post
        username="Lucian"
        caption="Caption here"
        imageUrl="https://miro.medium.com/max/3000/1*3f7gyFnHcBqrwXUe7bDILw.jpeg"
      />
      <Post
        username="Lucian"
        caption="Caption here"
        imageUrl="https://miro.medium.com/max/3000/1*3f7gyFnHcBqrwXUe7bDILw.jpeg"
      />
      <Post
        username="Lucian"
        caption="Caption here"
        imageUrl="https://miro.medium.com/max/3000/1*3f7gyFnHcBqrwXUe7bDILw.jpeg"
      />
    </div>
  );
}

export default App;

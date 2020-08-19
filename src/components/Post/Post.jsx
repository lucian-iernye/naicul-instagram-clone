import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

const Post = () => {
  return (
    <>
      <div className="post">
        <div className="post__header">
          <Avatar
            className="post__avatar"
            alt="username"
            src="/static/images/avatar"
          />
          <h3>Lucian</h3>
        </div>
        <img
          className="post__image"
          src="https://miro.medium.com/max/3000/1*3f7gyFnHcBqrwXUe7bDILw.jpeg"
          alt=""
        />
        <h4 className="post__text">
          <strong>Lucian</strong> caption
        </h4>
      </div>
    </>
  );
};

export default Post;

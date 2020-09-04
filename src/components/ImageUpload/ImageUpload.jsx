import React, { useState } from "react";
import "./ImageUpload.css";
import { Button } from "@material-ui/core";
import { storage, db } from "../../firebase";

const ImageUpload = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {};

  return (
    <>
      <div>
        {/* I want to have : */}
        {/* Caption input */}
        {/* File picker */}
        {/* Post button */}
        <h2>Create post</h2>
        <input
          type="text"
          placeholder="Enter a caption..."
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
        />
        <input
          type="file"
          name="file-upload"
          id="file-upload"
          onChange={handleChange}
        />
        <Button onClick={handleUpload}>Upload</Button>
      </div>
    </>
  );
};

export default ImageUpload;

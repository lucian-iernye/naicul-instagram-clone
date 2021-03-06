import React, { useState } from "react";
import "./ImageUpload.css";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { storage, db } from "../../firebase";

const ImageUpload = ({ username }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // error function
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // post image inside db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <>
      <div className="imageUpload">
        <h2>Create post</h2>
        <progress
          className="imageUpload__progress"
          value={progress}
          max="100"
        />
        <input
          type="text"
          placeholder="Enter a caption..."
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
        />
        <hr />

        <div className="fileInput">
          <input
            type="file"
            className="custom-file-input"
            name="file-upload"
            onChange={handleChange}
            aria-label="File browser example"
          />
        </div>

        <Button onClick={handleUpload}>Upload</Button>
      </div>
    </>
  );
};

export default ImageUpload;

import { useEffect, useInsertionEffect, useState } from "react";
import axios from "axios";
import Post from "../Components/Post";

function ExamplePost() {
  const [src, setSrc] = useState("");
  //const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState("david");
  const [currentPost, setCurrentPost] = useState("");
  const [caption, setCaption] = useState("");
  const [author, setAuthor] = useState("");

  const fetchImage = () => {
    fetch("http://localhost:4000/api/posts/get-all-user-posts/" + currentUser)
      .then((res) => res.json())
      .then((data) => {
        let userPost = data[0];
        setCurrentPost(userPost);
        setCaption(userPost.Caption);
        setAuthor(userPost.PostedBy);
        console.log(currentPost);
      });

    axios
      .get("http://localhost:4000/api/posts/get-post-image", {
        responseType: "blob",
        headers: {
          PostData: currentPost.PostData, // pass in post id
        },
      })
      .then((res) => {
        var imageUrl = URL.createObjectURL(res.data);
        console.log(imageUrl);
        setSrc(imageUrl);
      });
  };

  useEffect(() => {
    fetchImage();
  }, [2]);

  return <Post src={src} caption={caption} author={author} />;
}

export default ExamplePost;

import { useEffect, useState } from "react";
import Heart from "react-animated-heart";
import "../css/Post.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Post({ src, caption, author, postType, id, votes }) {
  const [imageURL, setImageURL] = useState(null);
  const [isClick, setClick] = useState(false);
  const [num, setVotes] = useState(0);

  const POST_TYPE_IMAGE = 0;
  const POST_TYPE_TEXT = 1;

  const updateUI = () => {
    let likedPosts = JSON.parse(localStorage.getItem("likes"));
    console.log(likedPosts);
    for (let i = 0; i < likedPosts.length; i++) {
      if (id == likedPosts[i]) {
        setClick(true);
      }
    }
  };
  const likePost = async () => {
    if (!isClick) {
      console.log(id);
      fetch("http://173.255.210.209:4002/api/posts/like-post/" + id, {
        method: "PUT",
      });

      let arr = localStorage.getItem("likes");
      let parsedarr = JSON.parse(arr);
      parsedarr.push(id);
      let newarr = JSON.stringify(parsedarr);
      localStorage.setItem("likes", newarr);
      setVotes((previousState) => previousState + 1);
    } else if (isClick) {
      console.log(id);
      fetch("http://173.255.210.209:4002/api/posts/unlike-post/" + id, {
        method: "PUT",
      });
      let arr = localStorage.getItem("likes");
      let parsedarr = JSON.parse(arr);

      for (let i = 0; i < parsedarr.length; i++) {
        if (parsedarr[i] == id) {
          parsedarr.splice(i, 1);
        }
      }
      let newarr = JSON.stringify(parsedarr);
      localStorage.setItem("likes", newarr);

      setVotes((previousState) => previousState - 1);
    }
  };

  useEffect(() => {
    if (postType == POST_TYPE_IMAGE) {
      axios
        .get("http://173.255.210.209:4002/api/posts/send-post-image/" + src, {
          responseType: "blob",
        })
        .then((res) => {
          var imageUrl = URL.createObjectURL(res.data);
          //console.log(posts);

          //console.log(post);

          setImageURL(imageUrl);
          //console.log(posts);
        });
    }
    setVotes(votes);
    updateUI();
  }, []);

  if (postType == POST_TYPE_IMAGE) {
    return (
      // picture posts

      <div className="Post">
        <div className="caption">{caption}</div>
        <img
          src={imageURL}
          alt=""
          height="auto"
          width="90%"
          className="image"
        />

        <div>
          <Heart
            isClick={isClick}
            onClick={() => {
              setClick(!isClick);
              likePost();
            }}
          />
          <p className="post-votes">Likes: {num}</p>
        </div>

        <p className="user-id">Post By: {author}</p>
      </div>
    );
  } else {
    // for text posts
    return (
      <div className="Post">
        <div className="caption">{caption}</div>
        <p>{src}</p>
        <div>
          <Heart isclick={isClick} onClick={() => setClick(!isClick)} />
          <p className="post-votes">Likes: {num}</p>
        </div>
        <div className="post-data">
          <p className="user-id">Post By: {author}</p>
        </div>
      </div>
    );
  }
}

export default Post;

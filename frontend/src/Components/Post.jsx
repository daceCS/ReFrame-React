import { useEffect, useState } from "react";
import Heart from "react-animated-heart";
import "../css/Post.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Post({ src, caption, author, postType, id }) {
  const [imageURL, setImageURL] = useState(null);
  const [isClick, setClick] = useState(false);
  const POST_TYPE_IMAGE = 0;
  const POST_TYPE_TEXT = 1;
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
  }, []);

  const likePost = async () => {
    if (isClick) {
      console.log(id);
      fetch("http://173.255.210.209:4002/api/posts/like-post/" + id, {
        method: "PUT",
      });
    }
  };

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
          <p className="post-votes">Likes: </p>
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
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
          <p className="post-votes">Likes: </p>
        </div>
        <div className="post-data">
          <p className="user-id">Post By: {author}</p>
        </div>
      </div>
    );
  }
}

export default Post;

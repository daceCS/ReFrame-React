import { useEffect, useState } from "react";
import "../css/Post.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Post({ src, caption, author, postType }) {
  const [imageURL, setImageURL] = useState(null);
  const POST_TYPE_IMAGE = 0;
  const POST_TYPE_TEXT = 1;
  useEffect(() => {
    if (postType == POST_TYPE_IMAGE) {
      axios
        .get("http://localhost:4000/api/posts/send-post-image/" + src, {
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
        <div className="post-interaction">
          <button className="button-like" value="Like" id="like-button">
            <i className="fa fa-heart"></i>
            <span></span>
          </button>
          <div>
            <p className="post-votes">Likes: </p>
            <Link />
          </div>
        </div>
        <div className="post-data">
          <p className="user-id">Post By: {author}</p>
        </div>
      </div>
    );
  } else {
    // for text posts
    return (
      <div className="Post">
        <div className="caption">{caption}</div>
        <p>{src}</p>
        <div className="post-interaction">
          <button className="button-like" value="Like" id="like-button">
            <i className="fa fa-heart"></i>
            <span></span>
          </button>
          <div>
            <p className="post-votes">Likes: </p>
            <Link />
          </div>
        </div>
        <div className="post-data">
          <p className="user-id">Post By: {author}</p>
        </div>
      </div>
    );
  }
}

export default Post;

import "../css/Post.css";
import { Link } from "react-router-dom";
function Post({ src, caption, author }) {
  return (
    <div className="Post">
      <div className="caption">{caption}</div>
      <img src={src} alt="" height="auto" width="90%" className="image" />
      <div className="post-interaction">
        <button className="button-like" value="Like" id="like-button">
          <i className="fa fa-heart"></i>
          <span></span>
        </button>
        <div>
          <p class="post-votes">Likes: </p>
          <Link />
        </div>
      </div>
      <div className="post-data">
        <p className="user-id">Post By: {author}</p>
      </div>
    </div>
  );
}

export default Post;

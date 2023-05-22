import "../css/Post.css";
import { Link } from "react-router-dom";
function Post({ caption, src }) {
  return (
    <div className="Post">
      <div className="caption">{caption}</div>
      <img src={src} alt="" height="auto" width="10%" />
      <div className="post-interaction">
        <button>Like Post</button>
        <div>
          <p></p>
          <Link />
        </div>
      </div>
      <div className="post-data">
        <p></p>
      </div>
    </div>
  );
}

export default Post;

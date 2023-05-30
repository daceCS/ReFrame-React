import { useEffect, useState } from "react";
import Post from "../Components/Post";

function ExamplePost() {
  const [currentPost, setCurrentPost] = useState(null);
  const [imgURL, setImageURL] = useState(null);
  const [posts, setPosts] = useState(null);
  //let posts = [];

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "http://localhost:4000/api/posts/get-all-user-posts/" + "mike"
      );
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {console.log(posts)}
      {posts &&
        posts.map((post) => (
          <Post
            key={post.PostId}
            author={post.PostedBy}
            caption={post.Caption}
            src={post.PostData}
            postType={post.PostType}
          />
        ))}
    </div>
  );
}

export default ExamplePost;

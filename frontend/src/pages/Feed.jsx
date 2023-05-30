import "../css/feed.css";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import ContentOptions from "../Components/ContentOptions";
import CreatePost from "../Components/CreatePost";
import Post from "../Components/Post";
import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "http://localhost:4000/api/posts/get-all-post"
      );
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <NavBar />
      <SideBar />
      <CreatePost />
      <ContentOptions />
      <div id="feed">
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
      </div>
    </>
  );
}

export default Home;

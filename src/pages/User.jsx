import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import ContentOptions from "../Components/ContentOptions";
import UserInfo from "../Components/UserInfo";
import Post from "../Components/Post";

function User() {
  const { user } = useParams();
  const [posts, setPosts] = useState(null);
  function Example() {
    console.log("yo");
    useEffect(() => {
      document.title = user;

      const fetchPosts = async () => {
        const response = await fetch(
          "http://localhost:4000/api/posts/get-all-user-posts/" + user
        );
        const json = await response.json();

        if (response.ok) {
          setPosts(json);
        }
      };

      fetchPosts();
    }, []);
  }
  Example();

  return (
    <>
      <NavBar />
      <SideBar />
      <UserInfo />
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

export default User;

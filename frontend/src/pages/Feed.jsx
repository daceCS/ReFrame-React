import "../css/feed.css";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import ContentOptions from "../Components/ContentOptions";
import Post from "../Components/Post";
import Heart from "react-animated-heart";
import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState(null);
  const [sortVal, setSortVal] = useState(0);

  const SortNew = () => {
    setSortVal(0);
  };
  const sortOld = () => {
    setSortVal(1);
  };
  const sortTopVoted = () => {
    setSortVal(2);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "http://173.255.210.209:4002/api/posts/get-all-post/" + sortVal
      );
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };

    fetchPosts();
  }, [sortVal]);

  return (
    <>
      {console.log(sortVal)}
      <NavBar />
      <SideBar />
      <ContentOptions
        sortTopVoted={sortTopVoted}
        SortNew={SortNew}
        sortOld={sortOld}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <div className="App"></div>
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
                id={post.PostId}
                votes={post.Votes}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;

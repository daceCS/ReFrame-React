import "../css/feed.css";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import ContentOptions from "../Components/ContentOptions";
import CreatePost from "../Components/CreatePost";

function Home() {
  return (
    <body>
      <NavBar />
      <SideBar />
      <CreatePost/>
      <ContentOptions />
      <div id="feed"></div>

      <script src="../js/feed.js"></script>
    </body>
  );
}

export default Home;

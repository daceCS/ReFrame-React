import "../css/feed.css";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import ContentOptions from "../Components/ContentOptions";

function Home() {
  return (
    <body>
      <NavBar />
      <SideBar />

      <div id="create-post-interaction">
        <input
          type="button"
          id="create-post-interact-field"
          value="Create Post (Click Me!)"
          onclick="reDirectToCreatePost()"
        />
      </div>
      <ContentOptions />

      <img src="/images/Palm4.png" className="Palm" />
      <img src="/images/Seagull.png" className="Seagull" />

      <div id="feed"></div>

      <script src="../js/feed.js"></script>
    </body>
  );
}

export default Home;

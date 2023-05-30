import "../css/feed.css";
function SideBar() {
  return (
    <aside>
      <div className="menu-div">
        <nav>
          <a href="/users/mike" id="profile-link" className="profile">
            Profile
          </a>
          <a href="/" id="home-link" className="menu">
            Home
          </a>
          <a href="/upload" id="new-post-link" className="createButton">
            Create Post
          </a>
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;

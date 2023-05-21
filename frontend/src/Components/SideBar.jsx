function SideBar() {
  return (
    <aside>
      <div className="menu-div">
        <nav className="menu">
          <a href="/feed" id="home-link">
            Home
          </a>
          <a href="/createPost" id="new-post-link">
            Create Post
          </a>
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;

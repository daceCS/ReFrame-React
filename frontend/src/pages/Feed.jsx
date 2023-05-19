function Home() {
  return <body>
  <header>
      <nav>
          <input type="button" value="Sign Out" id="sign-out" onclick="signOut()"/>
          <form action="" className="search-bar">
              <input type="text" id="search" placeholder="Search Users" name="SearchStuff" autocomplete="off" oninput="searchBar()"/>
              <button type="submit" id="searchbutton"><img src = "../images/search.png"/></button>
          </form>
          <div className="dropdown">
              <ul id="dropdown-list">

              </ul>
          </div>
      </nav>
  </header>
  <aside>
      <div className="menu-div">
          <nav className="menu">
              <a href="/feed" id="home-link">Home</a>
              <a href="/createPost" id="new-post-link">Create Post</a>
          </nav>
      </div>
  </aside>

  <div id="create-post-interaction">
      <input type="button" id="create-post-interact-field" value="Create Post (Click Me!)" onclick="reDirectToCreatePost()"/>
  </div>
  <div id="content-options">
      <p id="sort-title">Sort By:</p>
      <input type="button" id="sort-top-voted" value="Most Liked" onclick="sortLiked()"/>
      <input type="button" id="sort-following" value="Following" onclick="sortFollowing()"/>
      <input type="button" id="sort-new" value=" Sort New" onclick="sortNew()"/>
      <input type="button" id="sort-old" value="Sort Oldest" onclick="sortOld()"/>
  </div>

  <img src="/images/Palm4.png" className="Palm"/>
  <img src="/images/Seagull.png" className="Seagull"/>

  <div id="feed"></div>

  <script src="../js/feed.js"></script>

</body>
  
  
 




}

export default Home;
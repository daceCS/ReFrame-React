function SideBar() {
  return (
    <aside>
      <div className="menu-div">
        <nav className="menu">

        <a href="/feed" class="button2 button--piyo" id = "home-link">
        <div class="button__wrapper">
            <span class="button__text">Home</span>
        </div>
        <div class="characterBox">
            <div class="character wakeup">
                <div class="character__face"></div>
            </div>
            <div class="character wakeup">
                <div class="character__face"></div>
            </div>
            <div class="character">
                <div class="character__face"></div>
            </div>
        </div>
    </a>

          <a href="/create" class="button button--pen" id = "create-post-link">
        <div class="button__wrapper">
            <span class="button__text">Create</span>
        </div>
        <div class="characterBox">
            <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
            </div>
            <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
            </div>
            <div class="character">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
            </div>
        </div>
    </a>

        </nav>
      </div>
    </aside>
  );
}

export default SideBar;

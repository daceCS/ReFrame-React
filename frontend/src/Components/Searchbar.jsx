function SearchBar() {
  return (
    <>
      <form action="" className="search-bar">
        <input
          type="text"
          id="search"
          placeholder="Search Users"
          name="SearchStuff"
          autocomplete="off"
          oninput="searchBar()"
        />
        <button type="submit" id="searchbutton">
          <img src="../images/search.png" />
        </button>
      </form>
      <div className="dropdown">
        <ul id="dropdown-list"></ul>
      </div>
    </>
  );
}
export default SearchBar;

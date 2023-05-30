import SearchIcon from "../images/search.png";

function SearchBar() {
  return (
    <>
      <form action="" className="search-bar">
        <input
          type="text"
          id="search"
          placeholder="Search Users"
          name="SearchStuff"
          autoComplete="off"
          onInput={console.log("search")}
        />
        <button type="submit" id="searchbutton">
          <img src={SearchIcon} />
        </button>
      </form>
      <div className="dropdown">
        <ul id="dropdown-list"></ul>
      </div>
    </>
  );
}
export default SearchBar;

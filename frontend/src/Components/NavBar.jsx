import SearchBar from "./Searchbar";

function NavBar() {
  return (
    <header>
      <nav>
        <input
          type="button"
          value="Sign Out"
          id="sign-out"
          onClick={console.log("sign out")}
        />

        <SearchBar />
      </nav>
    </header>
  );
}
export default NavBar;

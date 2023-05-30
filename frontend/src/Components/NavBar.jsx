import SearchBar from "./Searchbar";

function NavBar() {
  return (
    <header>
      <nav>
        <input
          type="button"
          value="Sign Out"
          id="sign-out"
          onClick="signOut()"
        />

        <SearchBar />
      </nav>
    </header>
  );
}
export default NavBar;

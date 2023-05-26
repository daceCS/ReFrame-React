import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SearchBar from "../Components/Searchbar";
import ContentOptions from "../Components/ContentOptions";
import UserInfo from "../Components/UserInfo";
import SideBar from "../Components/SideBar";

function User() {
  const { user } = useParams();
  function Example() {
    console.log("yo");
    useEffect(() => {
      document.title = user;
    }, []);
  }
  Example();

  return (
    <>
      <title>{user}</title>
      <body>
      <header>
          <nav>
              <input type="button" value="Sign Out" id="sign-out" onclick="signOut()"/>
              <SearchBar/>
          </nav>
      </header>
      <aside>
          <SideBar/>
      </aside>

      <ContentOptions/>

      <UserInfo/>

  </body>

    </>
  );
}

export default User;

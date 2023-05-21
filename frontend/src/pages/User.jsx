import { useParams } from "react-router-dom";
import { useEffect } from "react";

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
      <h1>User Page for {user}</h1>
    </>
  );
}

export default User;

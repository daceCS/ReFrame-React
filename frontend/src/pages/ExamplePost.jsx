import { useEffect, useInsertionEffect, useState } from "react";
import axios from "axios";
import Post from "../Components/Post";

function ExamplePost() {
  const [src, setSrc] = useState("");
  const [message, setMessage] = useState("");

  const fetchImage = () => {
    const url = `http://localhost:4000/api/accounts/image`;
    axios
      .get(url, {
        responseType: "blob",
        headers: {
          PostId: "testImg2.png", // pass in post id
        },
      })
      .then((res) => {
        var imageUrl = URL.createObjectURL(res.data);
        console.log(imageUrl);
        setSrc(imageUrl);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return <Post caption="test" src={src} />;
}

export default ExamplePost;

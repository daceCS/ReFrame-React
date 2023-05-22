import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Components/Post";

function ExamplePost() {
  const [src, setSrc] = useState("");

  const fetchImages = () => {
    const url = `http://localhost:4000/api/accounts/image`;
    axios.get(url, { responseType: "blob" }).then((res) => {
      var imageUrl = URL.createObjectURL(res.data);
      console.log(imageUrl);
      setSrc(imageUrl);
    });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return <Post caption="test" src={src} />;
}

export default ExamplePost;

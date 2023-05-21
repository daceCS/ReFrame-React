import { useEffect, useState } from "react";
import axios from "axios";

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

  return <img src={src} alt="trial" width="30%" height="30%" />;
}

export default ExamplePost;

import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { useState } from "react";
import "../css/feed.css";



function ExampleUpload() {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const fileOnChange = async (event) => {
    setImage(event.target.files[0]);
  };
  const changeCaption = async (event) => {
    setCaption(event.target.value);
  };

  const upload = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("avatar", image);
    console.log(caption);

    fetch("http://localhost:4000/api/posts//create-image-post", {
      method: "post",
      headers: { caption: caption },
      body: formData,
    })
      .then((res) => res.text({}))
      .then((resBody) => {
        console.log(resBody);
      });
  };

  return (
    <>
    <NavBar />
      <SideBar />
      <form action="upload-file" encType="multipart/form-data" className = "upload-file">
        <input type="file" onChange={fileOnChange} />
        <input type="text" onChange={changeCaption} />
        <textarea id = "text-input"/>
        <button onClick={upload}>Upload Post</button>
      </form>
      
      
    </>
  );
}

export default ExampleUpload;

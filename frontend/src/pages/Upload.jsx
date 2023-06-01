import { useState } from "react";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import "../css/feed.css";

function Upload() {
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

    fetch("http://173.255.210.209:4002/api/posts/create-image-post", {
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

      <form
        action="upload-file"
        encType="multipart/form-data"
        className="upload-file"
      >
        <input type="file" className="file-upload" onChange={fileOnChange} />
        <input type="text" onChange={changeCaption} id="caption-upload" />
        <textarea name="text input" className="text-input" cols="60" rows="40">
          {" "}
        </textarea>
        <button className="upload-button" onClick={upload}>
          Upload Post
        </button>
      </form>
    </>
  );
}

export default Upload;

import { useState } from "react";

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

    fetch("http://localhost:4000/api/posts/create", {
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
      <form action="upload-file" encType="multipart/form-data">
        <input type="file" onChange={fileOnChange} />
        <input type="text" onChange={changeCaption} />
        <button onClick={upload}>Upload Post</button>
      </form>
    </>
  );
}

export default ExampleUpload;

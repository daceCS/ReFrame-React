function ExampleUpload() {
  const upload = async () => {};

  return (
    <>
      <form action="upload-file">
        <input type="file" />
        <input type="submit" onClick={upload} />
      </form>
    </>
  );
}

export default ExampleUpload;

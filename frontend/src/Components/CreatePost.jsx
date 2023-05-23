

function CreatePost() {
    return (
      <>
        <div id="create-post-interaction">
        <input
          type="button"
          id="create-post-interact-field"
          value="Create Post (Click Me!)"
          onclick="reDirectToCreatePost()"
        />
      </div>
      </>
    );
  }
  export default CreatePost;
  
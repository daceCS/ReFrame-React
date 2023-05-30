function CreatePost() {
  return (
    <>
      <div id="create-post-interaction" className="button button--pen">
        <div class="button__wrapper"></div>
        <div class="characterBox">
          <div class="character wakeup">
            <div class="character__face"></div>
            <div class="charactor__face2"></div>
          </div>
          <div class="character wakeup">
            <div class="character__face"></div>
            <div class="charactor__face2"></div>
          </div>
          <div class="character">
            <div class="character__face"></div>
            <div class="charactor__face2"></div>
          </div>
        </div>
        <input
          type="button"
          id="create-post-interact-field"
          value="Create Post (Click Me!)"
          onClick={console.log("yo")}
        />
      </div>
    </>
  );
}
export default CreatePost;

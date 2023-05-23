

function UserInfo() {
    return (
      <>
         <div id="user-options">
          <p id="sort-user-options"></p>
          <input type="button" id="Follow-User" value="Follow" onclick="change()"/>
      </div>
      <form id="fileupload">
          <input id="banner-upload" type="file" name="image" onchange="img1()" hidden accept="image/png, image/jpeg" />
      </form>
      <form id="fileupload2">
          <input id="pfp-uploads" type="file" name="image" onchange="img()" hidden accept="image/png, image/jpeg" />
      </form>
      <div class="feed" id="feed"></div>
      </>
    );
  }
  export default UserInfo;
  
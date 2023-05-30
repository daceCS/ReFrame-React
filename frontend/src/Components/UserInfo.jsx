function UserInfo({
  userPageUsername,
  userPageFollowCount,
  userPagePostCount,
  userPageBio,
}) {
  return (
    <>
      <div class="user-info">
        <div class="banner-class">
          <img class="banner" id="banner" src="${userBannerImg}" />
        </div>
        <div class="profileIcon-class">
          <img class="profileIcon" id="pfp" src="${userProfileIcon}" />
        </div>
        <p id="username">{userPageUsername}</p>
        <p id="follow-count">Followers: {userPageFollowCount}</p>
        <p id="post-count">Posts: {userPagePostCount}</p>

        <p id="bio">{userPageBio}</p>
      </div>
    </>
  );
}
export default UserInfo;

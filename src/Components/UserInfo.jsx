function UserInfo({
  userPageUsername,
  userPageFollowCount,
  userPagePostCount,
  userPageBio,
}) {
  return (
    <>
      <div className="user-info">
        <div className="banner-class">
          <img className="banner" id="banner" src="${userBannerImg}" />
        </div>
        <div className="profileIcon-class">
          <img className="profileIcon" id="pfp" src="${userProfileIcon}" />
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

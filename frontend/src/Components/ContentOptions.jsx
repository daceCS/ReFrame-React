import "../css/Post.css";
function ContentOptions({ sortFollowing, sortTopVoted, SortNew, sortOld }) {
  return (
    <div id="content-options" className="button button--pen">
      <p id="sort-title">Sort By:</p>
      <input
        type="button"
        className="sort-top-voted"
        value="Most Liked"
        onClick={sortTopVoted}
      />
      
      <input type="button" className="sort-new" value=" Sort New" onClick={SortNew} />
      <input
        type="button"
        className="sort-old"
        value="Sort Oldest"
        onClick={sortOld}
      />
      <div className="button__wrapper"></div>
        <div className="characterBox">
          <div className="character wakeup">
            <div className="character__face"></div>
            <div className="charactor__face2"></div>
          </div>
          <div className="character wakeup">
            <div className="character__face"></div>
            <div className="charactor__face2"></div>
          </div>
          <div className="character">
            <div className="character__face"></div>
            <div className="charactor__face2"></div>
          </div>
        </div>
    </div>
  );
}
export default ContentOptions;

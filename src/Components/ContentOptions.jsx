function ContentOptions({ sortFollowing, sortTopVoted, SortNew, sortOld }) {
  return (
    <div id="content-options">
      <p id="sort-title">Sort By:</p>
      <input
        type="button"
        id="sort-top-voted"
        value="Most Liked"
        onClick={sortTopVoted}
      />
      <input
        type="button"
        id="sort-following"
        value="Following"
        onClick={sortFollowing}
      />
      <input type="button" id="sort-new" value=" Sort New" onClick={SortNew} />
      <input
        type="button"
        id="sort-old"
        value="Sort Oldest"
        onClick={sortOld}
      />
    </div>
  );
}
export default ContentOptions;

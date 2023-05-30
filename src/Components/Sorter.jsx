function Sorter() {
  return (
    <div className="content-options">
      <p id="sort-title">Sort By:</p>
      <input
        type="button"
        id="sort-top-voted"
        value="Most Liked"
        onclick="sortLiked()"
      />
      <input
        type="button"
        id="sort-following"
        value="Following"
        onclick="sortFollowing()"
      />
      <input
        type="button"
        id="sort-new"
        value=" Sort New"
        onclick="sortNew()"
      />
      <input
        type="button"
        id="sort-old"
        value="Sort Oldest"
        onclick="sortOld()"
      />
    </div>
  );
}
export default Sorter;

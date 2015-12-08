import API from "../API";

let LinkActions = {
  saveBookmark(newBookmark) {
    API.saveBookmark(newBookmark);
  },
  getAllBookmarks() {
    API.fetchAllBookmarks();
  },
  deleteBookmark(deletedBookmark) {
    API.deleteBookmark(deletedBookmark);
  },
  toggleLike(bookmark) {
    API.toggleLike(bookmark);
  },
  saveLikedBookmark(bookmark) {
    API.saveLikedBookmark(bookmark);
  }
};

export default LinkActions;

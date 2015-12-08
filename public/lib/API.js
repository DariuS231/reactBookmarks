import {get, post} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  saveBookmark(newBookmark) {
    post("/api/links", newBookmark)
      .done(data => ServerActions.receiveOneLink(data));
  },
  fetchAllBookmarks() {
    console.log("2. In the API.fetchAllBookmarks()")
    get("/api/links")
      .done(data => ServerActions.receiveLinks(data.links));
  },
  deleteBookmark(deletedBookmark) {
    post("/api/deleteLink", deletedBookmark)
      .done(data => ServerActions.receiveLinks(data.links));
  },
  toggleLike(bookmark) {
    post('/api/likeLink', bookmark)
      .done(data => ServerActions.receiveLinks(data.links));
  },
  saveLikedBookmark(bookmark) {
    post('/api/ipLikeBookmark', bookmark)
      .done(data => console.log('bookmark', data)); //ServerActions.receiveLinks(data.links));
  }
};

export default API;

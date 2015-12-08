import React from "react";
import Link from "./Link";
import LinkActions from "../actions/LinkActions";

class List extends React.Component {
  deleteBookmark(bookmark) {
    let deletedBookmark = bookmark;
    LinkActions.deleteBookmark(deletedBookmark);
  }
  render() {
    var content = this.props.bookmarks.map(bookmark => {
      return (
        <div>
          <Link key={bookmark.id} link={bookmark} />
          <button onClick={this.deleteBookmark.bind(this, bookmark)} key={(Date.now() + Math.floor(Math.random(999999))).toString(36)}>Delete</button>
        </div>
      )
    });
    return (
      <div className="list">
        {content}
      </div>
    );
  }
}

export default List;

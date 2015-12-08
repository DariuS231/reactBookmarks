import React from "react";
import LinkActions from "../actions/LinkActions";

class Link extends React.Component {
  toggleLike(bookmark){
    console.log('bookmark', bookmark);
    LinkActions.toggleLike(bookmark);
    LinkActions.saveLikedBookmark(bookmark);
  }
  render() {
    let {title, url, safe, liked} = this.props.link;

    return (
      <div className="link">
        <a href={url}
           style={ { color: (safe ? 'green' : 'black') } }
          >{title}</a>
        <button onClick={this.toggleLike.bind(this, this.props.link)} className={liked ? 'fa fa-heart red' : 'fa fa-heart-o'}> Like</button>
      </div>
    );
  }
}

export default Link;
